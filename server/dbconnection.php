<?php
// session_start();
$db_host = "localhost:3310";
$db_user = "root";
$db_pass = null;
$db_name = "plannerdb";

$connection = new mysqli($db_host, $db_user, $db_pass, $db_name);

if(mysqli_connect_error()){
    die("Conenction Failed!");
}

?>