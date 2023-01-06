<?php
session_start();
define('APP_PATH', dirname(__FILE__) . '/../');
require_once(APP_PATH . '/dbconn/connection.php');
require_once('pageProtection.php');


$bookID = '';
$queryStats = array('success' => '', 'error' => '');



if (isset($_POST['bookID'])) {
    $bookID = $_POST['bookID'];
}

$query = "SELECT books.book_id, books.book_name, authors.author_name, authors.author_id, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE book_id = '$bookID'";

$sql = "SELECT `author_id`, `author_name` FROM `authors` ORDER BY `author_name`";
$authorResults = mysqli_query($conn, $sql);

if (isset($_POST['addNewBook'])) {
    $bookName = $_POST['bookName'];
    $authorId = $_POST['bookAuthor'];
    $year = $_POST['bookYear'];
    $genre = $_POST['bookGengre'];
    $ageGroup = $_POST['bookAgeGroup'];

    $addBook = "INSERT INTO `books`(`book_name`, `year`, `genre`, `age_group`, `author_id`) VALUES ('$bookName','$year','$genre','$ageGroup', '$authorId')";
    $updateString = "UPDATE `books` SET book_name='$bookName', author_id='$authorId', `year`='$year', genre='$genre', age_group='$ageGroup' Where book_id ='$bookID'";

    if (mysqli_query($conn, $addBook)) {
        $authorResults = mysqli_query($conn, $sql);
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
    <title>Add new book</title>
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
                    <button class="btn btn-danger btn-lg w-100">Back</button>
                </a>
            </div>
            <form action="" method="post" autocomplete="off" class="input-form librarian-form">
                <div class="form-separator">
                    <h2 class="form-title">Add New Book</h2>
                </div>
                <div class="form-separator">
                    <label class="form-text text-success bg-light"><?= $queryStats['success'] ?></label>
                    <label class="form-text text-danger"><?= $queryStats['error'] ?></label>
                </div>
                <div class="form-separator">
                    <label class="form-label">Book Name</label>
                    <input class="form-control" type="text" name="bookName" id="bookName">
                    <span class="form-text" id="bookNameSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Author</label>
                    <select class="form-select" name="bookAuthor" id="bookAuthor">
                        <option value="Author" disabled selected>Author</option>
                        <?php
                        if (mysqli_num_rows($authorResults) > 0) {
                            while ($author = $authorResults->fetch_assoc()) {
                                echo '<option value="' . $author['author_id'] . '" >' . $author['author_name'] . '</option>';
                            }
                        }
                        ?>
                    </select>
                    <span class="form-text" id="bookAuthorSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Year</label>
                    <!-- use php to create a select option with years only  -->
                    <input class="form-control" type='number' name="bookYear" id="bookYear">
                    <span class="form-text" id="bookYearSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Genre</label>
                    <input class="form-control" type="text" name="bookGengre" id="bookGengre">
                    <span class="form-text" id="bookGengreSpan"></span>
                </div>
                <div class="form-separator">
                    <label class="form-label">Age Group</label>
                    <input class="form-control" type="text" name="bookAgeGroup" id="bookAgeGroup">
                    <span class="form-text" id="bookAgeGroupSpan"></span>
                </div>
                <div class="button-separator form-separator">
                    <input class="btn btn-lg" type="submit" name="addNewBook" id="addNewBook" value="Add Book">
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