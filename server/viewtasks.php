<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("dbconnection.php");

$id = $_GET["user_id"]; 

$query = $connection->prepare("SELECT * FROM list WHERE user_id = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();

$response = [];

while($user = $array->fetch_assoc()){
    $response[] = $user;
}

$json_response = json_encode($response);
echo $json_response;

?>