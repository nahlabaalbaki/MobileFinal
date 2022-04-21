<?php

include("dbconnection.php");

if(isset($_POST['name']) && $_POST['name']!=""){
    $name = $_POST["name"];

}else{
    die('No Access');
}

if(isset($_POST['username']) && $_POST['username']!=""){
    $username = $_POST["username"];

}else{
    die('No Access');
}   

if(isset($_POST['password']) && $_POST['password']!=""){
    $password = hash("sha256", $_POST["password"]);

}else{
    die('No Access');
}

if(isset($_POST['email']) && $_POST['email']!=""){
    $email = $_POST["email"];

}else{
    die('No Access');
}

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


?>
