<?php

define('APP_PATH' , dirname(__FILE__). '/../');

// echo APP_PATH."index.php";

if (isset($_POST['logout'])){
    session_unset();
    session_destroy();
    header("location:index.php");
}
   
?>