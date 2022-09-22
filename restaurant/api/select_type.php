<?php 
header("Content-Type: application/json", true);
require_once 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $type =  $_POST['type'];
    try {
       $stmt = $conn->prepare("SELECT * FROM employee WHERE type = :type");
       $stmt->bindParam("type",$type,PDO::PARAM_STR);
       $stmt->execute();
       $arr = array();
       
       while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $arr_item = array(
                "id" => $row['id'],
                "name" => $row['name'],
                "type" => $row['type']
            ) ;
            array_push($arr ,$arr_item);
       }

        echo json_encode($arr);
        http_response_code(200);
       
    } catch(PDOException $e) {
        $e->getMessage();
    }
    http_response_code(200);
    
}else {
    // http_response_code(500);
}

?>