<?php

include("dbconnection.php");

if(isset($name) || isset($username) || isset($password) || isset($email)) {

$name = $_POST["name"];
$username = $_POST["username"];
$password = hash("sha256", $_POST["password"]);
$email = $_POST["email"];

$response = [];
$response["name"] = $name;
$response["username"] = $username;
$response["password"] = $password;
$response["email"] = $email;

$query = $mysqli->prepare("INSERT INTO users (name, username, password, email) VALUES (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $username, $password, $email);
$query->execute();


$json_response = json_encode($response);
echo $json_response;

}
?>