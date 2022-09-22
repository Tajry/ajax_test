<?php 
header("Content-Type: application/json", true);
require_once 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    try {
        $id = $_POST['id'];
        $stmt = $conn->prepare("DELETE  FROM employee WHERE id = :id " );
        $stmt->bindParam(':id' ,$id ,PDO::PARAM_STR);
        $arr  = array();
        if ($stmt->execute()){
            $arr_items = array(
                "msg" => 'success',
                "code" => 200
            );
            array_push($arr ,$arr_items);
        }
        echo json_encode($arr);
        http_response_code(200);
    
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    
}else {
    http_response_code(405);

}

?>