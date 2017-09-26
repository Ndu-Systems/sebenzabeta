<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$rows = array();
$sql  = "
 SELECT * FROM candidate
 ";


$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows["data"][] = $row;
        $id             = $row['id'];
        $history_rows   = array();
		
        // get work history
        $history_sql    = "SELECT * FROM work_history WHERE userId = $id";
        $history_result = $conn->query($history_sql);
        if ($history_result->num_rows > 0) {
            while ($history_row = $result->fetch_assoc()) {
                
                $history_rows[]["history"] = $history_row;
                
            }
        }
		 $rows= array( $rows,$history_rows);
        // end job history
        
    }
}

echo json_encode($rows);
$conn->close();


?>