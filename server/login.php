<?php

include("dbconnection.php");


$query = $mysqli->prepare("SELECT username, password FROM users;");
$query->execute();

$array = $query->get_result();

$response = [];

while($user= $array->fetch_assoc()){
    $response[] = $user;
}

$json_response = json_encode($response);
echo $json_response;		
	?>