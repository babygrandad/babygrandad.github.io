<?php
$severname = 'localhost';
$username = 'root';
$password = '';
$database = 'library';


$con = new mysqli($severname,$username,$password,$database);

if($con->connect_error){
    die("connection failed: ". $con->connect_error);
}
echo 'Connected succefully';

?>