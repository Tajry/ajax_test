<?php 
// header("Content-Type: application/json", true);
require_once 'dbcon.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    try {
        $stmt = $conn->prepare("SELECT * FROM employee");
        $stmt->execute();
        $data_arr = array();
        // $data_arr['result'] = array();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $data_item = array(
                'id' => $id,
                'name' => $name,
                'type' => $type
            );
    
            array_push($data_arr , $data_item);
        }
        echo json_encode($data_arr);
        http_response_code(200);
    
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    
}else {
    http_response_code(405);

}

?>