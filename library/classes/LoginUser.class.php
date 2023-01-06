<?php

    define('APP_PATH' , dirname(__FILE__). '/../');

    include_once(APP_PATH . '/dbconn/connection.php');

    $status = array('login'=>'');

    $mail =''; $pass =''; $encPass;

    //check if email is unique
    if (isset($_POST['login'])){
        $mail = $_POST['email'];
        $pass = $_POST['password'];
        
        //check if email is in database
        
        $email_query = "SELECT * FROM `users` WHERE email = '$mail'"; //write query to search for email
        $result = mysqli_query($conn,$email_query); //save the results in a variable
        //use variable as the argument in the "if statement" below

        if(mysqli_num_rows($result) == 1){
            while($row = $result->fetch_assoc()) {
                $encPass = $row['password'];
                
                if(password_verify($pass,$encPass)){
                    session_start();
                    $_SESSION['name'] = ucfirst($row['name']); //session_name
                    $_SESSION['surname'] = ucfirst($row['surname']);//session_surname
                    $_SESSION['email'] = strtolower($row['email']);//session_emali
                    $_SESSION['role'] = $row['role'];//session_membership
                    $_SESSION['user_id'] = $row['user_id'];//session_id


                    //direct to dashboard
                    header('location: dashboard.php');
                }
                else{
                    $status['login'] = 'Incorrect email or password.';
                }
            }
        }
        else{
            $status['login'] = 'Incorrect email or password.';
        }

        $conn->close();
    }

    
?>