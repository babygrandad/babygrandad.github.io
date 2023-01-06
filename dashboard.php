<?php
session_start();
error_reporting (E_ALL ^ E_NOTICE);

include_once('./dbconn/connection.php');
require ('./classes/LogoutUser.class.php');

if(!$_SESSION['role'] && !$_SESSION['id'] ){
    session_unset();
    session_destroy();
    header('location: index.php');
}

$ogQuery = "SELECT books.book_id, books.book_name, authors.author_name, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id";
$query = $ogQuery;
$queryResult = mysqli_query($conn, $query);
$searchValue ='';
$sortOption = 'Sort By';
$sortWarning = '';
$sortValue;


if(isset($_POST['booksSearchButton'])){
    $searchValue = mysqli_real_escape_string($conn,$_POST['booksSearchBox']);
    $searchString = "SELECT books.book_id, books.book_name, authors.author_name, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE books.book_name LIKE '%$searchValue%'";
    if(!$searchValue || $searchValue == ''){
        $query = $ogQuery;
    }else{
        $query = $searchString;
    }

    $queryResult = mysqli_query($conn, $query);
}

if(isset($_POST['sortASC'])){
    if(!$_POST['sortBy']){
        $sortWarning = 'text-danger';
        $sortOption = 'Please select sort order';
    }
    else {
        $sortValue = $_POST['sortBy'];
        $searchValue = mysqli_real_escape_string($conn,$_POST['booksSearchBox']);
        $searchString = "SELECT books.book_id, books.book_name, authors.author_name, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE books.book_name LIKE '%$searchValue%' ORDER BY `$sortValue` ASC";
        
        if(!$searchValue || $searchValue == ''){
            $query = $ogQuery.' ORDER BY '.$sortValue. ' ASC';
        }else{
            $query = $searchString;
        }
    
        $queryResult = mysqli_query($conn, $query);

    }
}

if(isset($_POST['sortDSC'])){
    if(!$_POST['sortBy']){
        $sortWarning = 'text-danger';
        $sortOption = 'Please select sort order';
    }
    else {
        $sortValue = $_POST['sortBy'];
        $searchValue = mysqli_real_escape_string($conn,$_POST['booksSearchBox']);
        $searchString = "SELECT books.book_id, books.book_name, authors.author_name, books.year, books.genre, books.age_group FROM books INNER JOIN authors on books.author_id = authors.author_id WHERE books.book_name LIKE '%$searchValue%' ORDER BY `$sortValue` DESC";
        
        if(!$searchValue || $searchValue == ''){
            $query = $ogQuery.' ORDER BY '.$sortValue. ' DESC';
        }else{
            $query = $searchString;
        }
    
        $queryResult = mysqli_query($conn, $query);

    }
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obey Library</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="css/colors.css">
    <link rel="stylesheet" href="css/form.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <header>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="dashboard.php">
                    <img src="images/obey-cream.png" alt="logo">
                </a>
                <form class="d-flex nav-button-container" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
                    <?php
                    if ($_SESSION['role'] == 'librarian') { ?>
                        <!-- off canvas button from here -->
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
                            Actions
                        </button>
                    <?php } ?>
                    <!-- off canvas button to here -->
                    <input class="btn" type="submit" name="logout" value="Logout">
                </form>
            </div>
        </nav>
    </header>
    <main class="form-main centering padding container-fluid" id="dataMain">
        <?php
        if ($_SESSION['role'] == 'librarian') { ?>
            <!-- off canvas code from here -->
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">Actions</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        The CRUD options are categorically separated. Click the acordion to view more options.
                    </div>
                    <div class="mt-3">
                        <div class="accordion accordion-flush" id="accordionFlush">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Books
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body">
                                        <a href="crudpages/addbook.php">
                                            <button type="button" class="btn btn-secondary mb-2 w-100">Add New Book</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Authors
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body">
                                        <a href="auth-dashboard.php">
                                            <button type="button" class="btn btn-secondary mb-2 w-100">Authours Table</button>
                                        </a>
                                        <a href="crudpages/addAuthor.php">
                                            <button type="button" class="btn btn-secondary mb-2 mt-2 w-100">Add New Author</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- off canvas code to here-->
        <?php } ?>
        <section class="form-containers container row">
            <div class="m-auto col-lg-8">
                <h1>Welcome to Obey Library - Books</h1>
                <div class="col-12 searchButtonContainer" id="book-search-container">
                    <form class="d-bolck lookUpFunctions" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
                        <div class="d-flex searchInputs">
                            <input class="form-control" type="text" name="booksSearchBox" id="booksSearchBox" value="<?php echo isset($_POST['booksSearchBox']) ? $_POST['booksSearchBox'] : '' ;?>">
                            <input class="btn" type="submit" name="booksSearchButton" value="Search">
                        </div>
                        <div class="d-flex sortingFuctions">
                            <select class="form-select <?=$sortWarning?>" name="sortBy" id="">
                                <option value="" selected disabled><?= $sortOption?></option>
                                <option value="book_name">Book Name</option>
                                <?php
                                if ($_SESSION['role'] == 'librarian') { ?>
                                <option value="author_name">Author</option>
                                <?php } ?>
                                <option value="genre">Genre</option>
                            </select>
                            <input class="btn" type="submit" name="sortASC" value="Sort &#8593;">
                            <input class="btn" type="submit" name="sortDSC" value="Sort &#8595;">
                        </div>
                    </form>
                </div>
            </div>
            <div class="tableContainer m-auto col-lg-10 table-responsive">
                <table class="table table-bordered table-hover border-orange-400">
                    <thead class="tableHeader">
                        <tr class="table-active">
                            <th scope="col">#</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Year published</th>
                            <th scope="col">Author</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Age Group</th>
                            <?php if ($_SESSION['role'] == 'librarian') { ?>
                                <th scope="col">Action</th>
                            <?php } ?>
                        </tr>
                    </thead>
                    <tbody class="tableInfo table-group-divider">
                        <?php 
                        if(mysqli_num_rows($queryResult) < 1){
                            echo
                                '<tr><td>No Results found!</td></tr>';
                        }
                        else {
                            while ($row = $queryResult->fetch_assoc()) {
                                echo
                                '<tr>
                                 <td scope="row">' . $row['book_id'] . '</td>  
                                 <td>' . ucwords($row['book_name']) . '</td>
                                 <td>' . $row['year'] . '</td>
                                 <td>' . ucwords($row['author_name']) . '</td>
                                 <td>' . $row['genre'] . '</td>
                                 <td>' . $row['age_group'] . '</td>
                             ';
                                if ($_SESSION['role'] == 'librarian') {?>
                                    
                                    <td>
                                    <a href="./crudpages/editbook.php?id=<?= $row['book_id']?>">
                                        <input class="m-1 btn btn-success" type="button" value="Edit">
                                    </a>
                                        <a href="./crudpages/deletebook.php?id=<?= $row['book_id']?>">
                                            <input class="btn btn-danger" type="button" value="Delete">
                                        </a>
                                    </td>
                    <?php
                                ;
                                }
                            }
                        }
                        ?>
                        </tr>
                    </tbody>
                </table>
            </div>
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