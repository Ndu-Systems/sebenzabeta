<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$pass  = $data->password;
$rows = array();

$sql = "SELECT * FROM candidate WHERE email='$email' AND Password ='$pass'";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows["candidate"][] = $row;
    }
}

echo json_encode($rows);
$conn->close();


?>