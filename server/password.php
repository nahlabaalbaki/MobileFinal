<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
session_start();
include("dbconnection.php");

if(isset($_POST['newpassword']))
{
 $oldpass=$_GET["password"];
 $username=$_SESSION['login'];
 $newpassword=("sha256",$_POST['newpassword']);
$sql=mysqli_query($connection,"SELECT password FROM users where password='$oldpass' && username='$username'");

$num=mysqli_fetch_array($sql);
if($num>0)
{
 $con=mysqli_query($connection,"Update users set password=' $newpassword' where username='$username'");
echo "Password Changed Successfully !!";
}
else
{
echo="Failed!";
}
}



?>
