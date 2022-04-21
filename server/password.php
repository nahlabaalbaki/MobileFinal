<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

include("dbconnection.php");

$data= decode(file_get_contents("php://input"));

$result = mysqli_query($connection, "SELECT *from users WHERE username='" . $_SESSION["username"] . "'");
$row = mysqli_fetch_array($result);
if ($data->currentpassword == $row["password"]) {
        mysqli_query($connection, "UPDATE users set password='" . $data->newpassword . "' WHERE username='" . $_SESSION["username"] . "'");
        $message = "Password Changed";
    } else
        $message = "Current Password is not correct";




?>