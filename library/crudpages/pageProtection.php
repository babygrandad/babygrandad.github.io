<?php
if(!$_SESSION['role'] && !$_SESSION['id'] ){
    session_unset();
    session_destroy();
    header('location:../index.php');
}
?>