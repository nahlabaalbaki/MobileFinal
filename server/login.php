<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include("dbconnection.php");

if(isset($_GET["username"]) && $_GET["username"]!=""){
    $username=$_GET["username"];
}
else{
	die("No Access");
}
if(isset($_GET["password"]) && $_GET["password"]!=""){
    $password=hash("sha256",$_GET["password"]);
}
else{
	die("No Access");
}

$mysql="SELECT * FROM users WHERE username=? AND password=?";

$stmt=$connection->prepare($mysql);
$stmt->bind_param("ss",$username, $password);

$stmt->execute();
$result= $stmt->get_result();

$row=$result->fetch_assoc();
$json_response =json_encode($row);

echo $json_response;

$stmt->close();
$connection->close();

?>