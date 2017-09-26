<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$rows = array();
 $sql = "
 SELECT  candidate.id ,  
candidate.name ,  
candidate.surname ,  
candidate.email ,  
candidate.cell ,  
candidate.identity ,  
candidate.gender ,  
candidate.job_sector ,  
candidate.citizenship ,  
candidate.job_title ,  
candidate.cv ,  
candidate.dob ,  
candidate.race ,

work_history.userId , 
work_history.company ,  
work_history.job_title ,  
work_history.job_duties ,  
work_history.start_date ,  
work_history.end_date 

FROM  work_history INNER  JOIN candidate  ON work_history.userId = candidate.id
 ";
 

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
		$rows["data"][]= $row;
	}
}

echo json_encode($rows);
$conn->close();


?>

