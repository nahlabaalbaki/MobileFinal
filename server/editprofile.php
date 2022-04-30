<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("dbconnection.php");

$id = $_GET["user_id"]; 

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$username = $data->username;
$email = $data->email;


$query1=$connection->prepare("UPDATE users SET name=? , username =?, email=? WHERE user_id = ?");
$query1->bind_param("sssi", $name,$username, $email,$id);
$query1->execute();



$query1->close();
$connection->close();

echo true;
?>


