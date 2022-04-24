<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("dbconnection.php");

$data = json_decode(file_get_contents("php://input"));


    $name = $data->name;
    $username = $data->username;
    $password = hash("sha256", $data->password);
    $email = $data->email;



$response = [];
$response["name"] = $name;
$response["username"] = $username;
$response["password"] = $password;
$response["email"] = $email;

$mysql = "INSERT INTO users (name, username, password, email) VALUES (?, ?, ?, ?)";
$query = $connection->prepare($mysql);
$query->bind_param("ssss", $name, $username, $password, $email);
$query->execute();



$json_response = json_encode($response);
echo $json_response;

$query->close();
$connection->close();
?>