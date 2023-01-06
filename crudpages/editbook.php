<?php
session_start();
define('APP_PATH' , dirname(__FILE__). '/../');
require_once(APP_PATH . '/dbconn/connection.php');
require_once('pageProtection.php');
$bookID='';
$queryStats = array('success' => '', 'error' => '');



if (isset($_GET['id'])) {
    $bookID = $_GET['id'];
} else {
    if (isset($_POST['bookID'])) {
        $bookID = $_POST['bookID'];
    }
}

$query = "SELECT books.book_id, books.book_name, authors.author_name, authors.author_id, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE book_id = '$bookID'";
$bookResult = mysqli_query($conn, $query);

$sql = "SELECT `author_id`, `author_name` FROM `authors` ORDER BY `author_name`";
$authorResults = mysqli_query($conn,$sql);

if (isset($_POST['editBook'])) {
    $bookName = $_POST['bookName'];
    $authorId= $_POST['bookAuthor'];
    $year= $_POST['bookYear'];
    $genre= $_POST['bookGengre'];
    $ageGroup= $_POST['bookAgeGroup'];

    $updateString = "UPDATE `books` SET book_name='$bookName', author_id='$authorId', `year`='$year', genre='$genre', age_group='$ageGroup' Where book_id ='$bookID'";
    
    if (mysqli_query($conn, $updateString)) {
        $bookResult = mysqli_query($conn, $query);
        $authorResults = mysqli_query($conn,$sql);
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
<title>Edit book</title>
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
            <a class="navbar-brand"  href="../dashboard.php">
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
            <a href="../dashboard.php">
                <button class="btn btn-danger btn-lg w-100">Back</button>
            </a>
        </div>
        <?php
        if (mysqli_num_rows($bookResult) > 0) {
                        while ($book = $bookResult->fetch_assoc()) { 
        ?>
        <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" autocomplete="off" class="input-form librarian-form">
            <div class="form-separator">
                <h2 class="form-title">Edit Book</h2>
                <input type="hidden" name='bookID' value="<?= $bookID?>">
            </div>
            <div class="form-separator">
                <label class="form-label">Book Name</label>
                <input class="form-control" type="text" name="bookName" id="bookName" value="<?= $book['book_name'] ?>">
                <span class="form-text" id="bookNameSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Author</label>
                <select class="form-select" name="bookAuthor" id="bookAuthor">
                <option value="<?= $book['author_id']; ?>" ><?= $book['author_name']; ?></option>

                <?php
                if (mysqli_num_rows($authorResults) > 0) {
                    while ($author = $authorResults->fetch_assoc()) { 
                        if($author['author_id'] != $book['author_id']){
                            echo '<option value="'.$author['author_id'].'" >'.$author['author_name'].'</option>';
                        }
                    }
                }
                ?>

                </select>
                <span class="form-text" id="bookAuthorSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Year</label>
                <!-- use php to create a select option with years only  -->
                <input class="form-control" type='number' name="bookYear" id="bookYear" value="<?= $book['year']; ?>">
                <span class="form-text" id="bookYearSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Genre</label>
                <input class="form-control" name="bookGengre" id="bookGengre" value="<?= $book['genre']; ?>">
                <span class="form-text" id="bookGengreSpan"></span>
            </div>
            <div class="form-separator">
                <label class="form-label">Age Group</label>
                <input class="form-control" type="text" name="bookAgeGroup" id="bookAgeGroup" value="<?= $book['age_group'] ;?>">
                <span class="form-text" id="bookAgeGroupSpan"></span>
            </div>
            <div class="form-separator">
            <label class="form-text text-success bg-light"><?= $queryStats['success']?></label>
            <label class="form-text text-danger"><?= $queryStats['error']?></label>
            </div>
            <div class="button-separator form-separator">
                <input class="btn btn-lg" type="submit" name="editBook" id="editBook" value="Commit Changes">
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
