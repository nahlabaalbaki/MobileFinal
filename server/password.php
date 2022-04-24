<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("dbconnection.php");

$id = $_GET["user_id"]; 

$data = json_decode(file_get_contents("php://input"));

$password = hash("sha256", $data->password);


$query1=$connection->prepare("UPDATE users SET password=? WHERE user_id = ?");
$query1->bind_param("si", $password,$id);
$query1->execute();


$query1->close();
$connection->close();
?>




