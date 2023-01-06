<?php
session_start();
define('APP_PATH', dirname(__FILE__) . '/../');
require_once(APP_PATH . '/dbconn/connection.php');
require_once('pageProtection.php');

$authorID = '';
$queryStats = array('success' => '', 'error' => '');

if (isset($_POST['authorID'])) {
    $authorID = $_POST['authorID'];
}

if (isset($_POST['addNewAuthor'])) {
    $authorName = $_POST['authorName'];
    $age = $_POST['authorAge'];
    $genre = $_POST['authorGengre'];

    $addAuthor = "INSERT INTO `authors`(`author_name`, `age`, `genre`) VALUES ('$authorName','$age','$genre')";

    if (mysqli_query($conn, $addAuthor)) {
        $queryStats['success'] = "Record added successfully";
    } else {
        $queryStats['error'] = "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add new author</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/form.css">
    <link rel="stylesheet" href="../css/CRUDpages.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="../auth-dashboard.php">
                    <img src="../images/obey-cream.png" alt="logo">
                </a>
                <form class="d-flex nav-button-container">
                    <a href="../index.php">
                        <input class="btn" type="button" value="Login">
                    </a>
                </form>
            </div>
        </nav>
    </header>
    <main class="form-main centering padding container-fluid">
        <section class="form-containers row col-md-8 col-lg-5">
            <h1>Obey Library management</h1>
            <div class="backToDash">
                <a href="../auth-dashboard.php">
                    <button class="btn btn-danger btn-lg w-100">Back</button>
                </a>
            </div>
            <form action="" method="post" autocomplete="off" class="input-form librarian-form">
                <div class="form-separator">
                    <h2 class="form-title">Add New Author</h2>
                </div>
                <div class="form-separator">
                    <label class="form-label">Author Name</label>
                    <input class="form-control" type="text" name="authorName" id="authorName">
                    <span class="form-text" id="authorNameSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Age</label>
                    <input class="form-control" type='number' name="authorAge" id="authorAge">
                    <span class="form-text" id="authorAgeSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Genre</label>
                    <input class="form-control" type="text" name="authorGengre" id="authorGengre">
                    <span class="form-text" id="authorGengreSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-text text-success bg-light"><?= $queryStats['success'] ?></label>
                    <label class="form-text text-danger"><?= $queryStats['error'] ?></label>
                </div>
                <div class="button-separator form-separator">
                    <input class="btn btn-lg" type="submit" name="addNewAuthor" id="addNewAuthor" value="Add Author">
                </div>
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