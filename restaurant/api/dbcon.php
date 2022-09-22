<?php 

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'ajax_crud';
try {
    $conn = new PDO('mysql:host=localhost;dbname=api_crud' ,$db_user ,$db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo $e->getMessage();
}


?>