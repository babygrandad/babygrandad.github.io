<?php
echo 
'<tr>
    <td scope="row">'.$row['books.book_id'].'</td>  
    <td>'.$row['books.book_name'].'</td>
    <td>'.$row['books.year'].'</td>
    <td>'.$row['authors.author_name'].'</td>
    <td>'.$row['books.genre'].'</td>
    <td>'.$row['books.age_group'].'</td>
';

if($_SESSION['role'] == 'admin'){?>
    <td>
        <input class="m-1 btn btn-success" type="button" value="Edit">
        <input class="btn btn-danger" type="button" value="Delete">
    </td>
<?php } 
echo '</tr>';
?>