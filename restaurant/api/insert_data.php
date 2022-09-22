<?php 
header("Content-Type: application/json", true);
require_once 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   $name =  $_POST['name'];
    $type =  $_POST['type'];
    try {
       $stmt = $conn->prepare("INSERT INTO employee(name,type) VALUE(:name ,:type)");
       $stmt->bindParam("name",$name,PDO::PARAM_STR);
       $stmt->bindParam("type",$type,PDO::PARAM_STR);
       $arr = array();
       if ($stmt->execute()) {
          $arr_item = array(
            "msg" => "success",
            "code" => 200
            );
            array_push($arr , $arr_item);
            
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