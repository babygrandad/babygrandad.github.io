<?php

    define('APP_PATH' , dirname(__FILE__). '/../');

    include_once(APP_PATH . '/dbconn/connection.php');

    $queryResults = array('email'=>'','result'=>'');

    $name =''; $surname =''; $dob =''; $mail =''; $pass ='';

    //check if email is unique
    if (isset($_POST['register'])){
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $dob = $_POST['DOB'];
        $mail = $_POST['email'];
        $pass = $_POST['password'];
        $encPass = password_hash($pass, PASSWORD_DEFAULT);

        //query strings
        $email_query = "SELECT * FROM `users` WHERE email = '$mail'";
        $result = mysqli_query($conn,$email_query);

        $newUser_query = "INSERT INTO users (name, surname, dob, email, password, role)
                    VALUES ('$name','$surname', '$dob', '$mail', '$encPass', 'member')";
        $commitUser = mysqli_query($conn,$newUser_query);
        
        //check if email exists, if not...  
        if(mysqli_num_rows($result) > 0){
            $queryResults['email'] = 'Email already exists';
        }
        // commit user
        else{
            if($commitUser === TRUE){
                $queryResults['result'] = "Registration successful";
                $name =''; $surname =''; $dob =''; $mail =''; $pass ='';
            }else{
                $queryResults['result'] = 'Registration failed';
            }
        }

        $conn->close();
    }

    
?>