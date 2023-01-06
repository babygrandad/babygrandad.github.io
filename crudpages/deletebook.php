<?php
session_start();
define('APP_PATH', dirname(__FILE__) . '/../');
require_once(APP_PATH . '/dbconn/connection.php');
require_once('pageProtection.php');

$bookID = '';
$queryStats = array('success' => '', 'error' => '');



if (isset($_GET['id'])) {
    $bookID = $_GET['id'];
}

$query = "SELECT books.book_id, books.book_name, authors.author_name, authors.author_id, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE book_id = '$bookID'";
$bookResult = mysqli_query($conn, $query);

if (isset($_POST['deleteBook'])){
    $bookID = $_POST['bookID'];
    $deleteString = "DELETE FROM `books` WHERE `book_id` = '$bookID'";
    if(mysqli_query($conn, $deleteString)){
        $queryStats['success'] = "Record permanantly deleted";
    }else{
        $queryStats['error'] = "Error: " . $deleteString . "<br>" . mysqli_error($conn);
    }
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete book</title>
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
                <a class="navbar-brand" href="../dashboard.php">
                    <img src="../images/obey-cream.png" alt="logo">
                </a>
                <form class="d-flex nav-button-container">
                    <a href="../index.html">
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
                <a href="../dashboard.php">
                    <button class="btn btn-danger btn-lg w-100">Cancel</button>
                </a>
            </div>
            <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" autocomplete="off" class="input-form librarian-form">
                <div class="form-separator">
                    <h2 class="form-title">Add New Book</h2>
                    <input type="hidden" name='bookID' value="<?= $bookID?>">
                </div>
                <div class="form-separator">
                    <?php
                    if(!$bookID || $bookID = ''){ ?>
                        <p class="text-danger bg-light p-2">No record has been selected.</p>
                    <?php }else{ ?>
                        <p class="text-danger bg-light p-2">You are about to delete this record. Select delete to confirm. This action cannot be reversed.</p>
                    <?php }
                    ?>
                </div>
                <div class="form-separator">
                    <?php
                    if (mysqli_num_rows($bookResult) > 0) {
                        while ($row = $bookResult->fetch_assoc()) {
                    ?>
                            <div class="form-separator">
                                <h4>Book: <?= ucwords($row['book_name']) ?>.</h4>
                                <h4>By: <?= ucwords($row['author_name']) ?>.</h4>
                            </div>
                    <?php
                        }
                    }
                    ?>
                </div>
                <div class="form-separator">
                <label class="form-text text-success bg-light"><?= $queryStats['success']?></label>
                <label class="form-text text-danger bg-light"><?= $queryStats['error']?></label>
                </div>
                <div class="button-separator form-separator">
                    <input class="btn btn-lg" type="submit" name="deleteBook" id="deleteBook" value="Delete">
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