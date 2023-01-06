<?php
session_start();
define('APP_PATH' , dirname(__FILE__). '/../');
require_once(APP_PATH . '/dbconn/connection.php');
require_once('pageProtection.php');


$authorID='';
$queryStats = array('success' => '', 'error' => '');



if (isset($_GET['id'])) {
    $authorID = $_GET['id'];
} else {
    if (isset($_POST['authorID'])) {
        $authorID = $_POST['authorID'];
    }
}

$query = "SELECT * from `authors` WHERE `author_id`= '$authorID'";
$authorResult = mysqli_query($conn, $query);

if (isset($_POST['editAuthor'])) {
    $authorName = $_POST['authorName'];
    $age= $_POST['authorAge'];
    $genre= $_POST['authorGengre'];

    $updateString = "UPDATE `authors` SET author_name='$authorName',  genre='$genre', age='$age' Where author_id ='$authorID'";
    
    if (mysqli_query($conn, $updateString)) {
        $authorResult = mysqli_query($conn, $query);
        $queryStats['success'] = "Record updated successfully";
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
<title>Edit author</title>
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
            <a class="navbar-brand"  href="../auth-dashboard.php">
            <img src="../images/obey-cream.png" alt="logo">
            </a>
            <form class="d-flex nav-button-container">
            <a href="../dashboard.php">
                <input class="btn bg-danger" type="button" value="Back">
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
        <?php
        if (mysqli_num_rows($authorResult) > 0) {
                        while ($author = $authorResult->fetch_assoc()) { 
        ?>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" autocomplete="off" class="input-form librarian-form">
            <div class="form-separator">
                <h2 class="form-title">Edit Author</h2>
                <input type="hidden" name='authorID' value="<?= $authorID?>">
            </div>
            <div class="form-separator">
                <label class="form-label">Author Name</label>
                <input class="form-control" type="text" name="authorName" id="authorName" value="<?= $author['author_name'] ?>">
                <span class="form-text" id="authorNameSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Age</label>
                <input class="form-control" type='text' name="authorAge" id="authorAge" value="<?= $author['age']; ?>">
                <span class="form-text" id="authorAgeSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Genre</label>
                <input class="form-control" name="authorGengre" id="authorGengre" value="<?= $author['genre']; ?>">
                <span class="form-text" id="authorGengreSpan"></span>
            </div>
            <div class="form-separator">
            <label class="form-text text-success bg-light"><?= $queryStats['success']?></label>
            <label class="form-text text-danger"><?= $queryStats['error']?></label>
            </div>
            <div class="button-separator form-separator">
                <input class="btn btn-lg" type="submit" name="editAuthor" id="editAuthor" value="Commit Changes">
            </div>
        </form>
        <?php
                        }
                    }
        ?>
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
