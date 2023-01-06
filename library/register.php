<?php 
include_once('dbconn/connection.php');
require ("classes/RegisterUser.class.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obey register</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="css/form.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/regValidate.js" defer></script>

</head>
<body>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand"  href="index.php">
                <img src="images/obey-cream.png" alt="logo">
              </a>
              <form class="d-flex nav-button-container">
                <a href="index.php">
                    <input class="btn" type="button" value="Login">
                </a>
              </form>
            </div>
        </nav>
    </header>
    <main class="form-main logs centering padding container-fluid">
        <section class="form-containers row col-md-8 col-lg-5">
            <h1>Welcome to Obey Library</h1>
            <form id="registerForm" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" autocomplete="off" class="input-form">
                <div class="form-separator">
                    <h2 class="form-title">Register</h2>
                </div>
                <div class="form-separator">
                    <label class="form-label">Name</label>
                    <input class="form-control" type="text" name="name" id="registerName" value="<?php echo $name?>">
                    <span class="form-text" id="registerNameSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Surname</label>
                    <input class="form-control" type="text" name="surname" id="registerSurname" value="<?php echo $surname?>">
                    <span class="form-text" id="registerSurnameSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Date of birth</label>
                    <input class="form-control" type="date" name="DOB" id="registerDOB" value="<?php echo $dob?>">
                    <span class="form-text" id="registerDOBSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Email</label>
                    <input class="form-control" type="email" name="email" id="registerEmail" value="<?php echo $mail?>">
                    <span class="form-text" id="registerEmailSpan"><?php echo $queryResults['email']?></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Password</label>
                    <input class="form-control" type="password" name="password" id="registerPassword">
                    <span class="form-text" id="registerPasswordSpan"></span>
                </div>
                <div class="button-separator form-separator">
                    <input class="btn btn-lg" type="submit" name="register" id="registerButton" value="Register">
                </div>
                <span class="form-text text-success" id="registrationFeedback"><?php echo $queryResults['result']?></span>
                <p>Already have an account? <a href="index.php" class="form-links">Login here</a></p>
            </form>
        </section>
    </main>

    <footer class="centering padding footer-padding container-fluid">
        <div class="row">
            <div class="col">
                <p>&copy Copyright 2022 | Obey Libray</p>
                <p>This website was designed and developed by Relebogile Nkotswe</p>
            </div>
        </div>
    </footer>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>
