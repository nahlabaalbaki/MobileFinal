<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
include("dbconnection.php");

if(isset($_POST['tasks']) && $_POST['tasks']!=""){
    $tasks = $_POST["tasks"];

}else{
    die('No Access');
}
$response = [];
$response["tasks"] = $tasks;

$mysql = "INSERT INTO list (tasks) VALUES (?)";
$query = $connection->prepare($mysql);
$query->bind_param("s", $tasks );
$query->execute();

$json_response = json_encode($response);
echo $json_response;

?>