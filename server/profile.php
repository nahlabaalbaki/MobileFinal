<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include("dbconnection.php");

$id = $_GET["user_id"];

$query = $connection->prepare("SELECT * FROM users WHERE user_id = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();


$user = $array->fetch_assoc();


$json_response = json_encode($user);
echo $json_response;

?>