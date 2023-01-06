<?php
// $severname = 'localhost';
// $username = 'root';
// $password = '';
// $database = 'library';

$severname = 'sql7.freesqldatabase.com';
$username = 'sql7588693';
$password = 'FyWV9FXVBR';
$database = 'sql7588693';


$conn = new mysqli($severname,$username,$password,$database);

if($conn->connect_error){
    die("connection failed: ". $conn->connect_error);
}
?>
