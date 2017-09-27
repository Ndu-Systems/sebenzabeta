<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "conn.php";
$data = json_decode(file_get_contents("php://input"));

        
if (isset($data->email) ){
 			$id			=	$data->id;         
	 		$email              = $data->email;		
			$companyName 		= $data->companyName;
			$Location 			= $data->Location;
			$Status				= $data->Status;
			$JobId   			= $data->JobId;

			if ($conn->query("SELECT * FROM candidate WHERE email = '$email' AND JobId ='$JobId' ")->num_rows == 0){
			   $sql = "
				UPDATE  candidate  SET	 
				 companyName = '$companyName', 
				 Location = '$Location',
				 Status = '$Status',
				 JobId = '$JobId'
				WHERE id= '$id' 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}
			}
			else if($conn->query("SELECT * FROM candidate WHERE email = '$email' AND JobId ='$JobId' ")->num_rows == 1){
				 $sql = "
				UPDATE  candidate  SET					
				 Status = '$Status',
				 JobId = '$JobId'
				WHERE id= '$id' 		
				";								
								
				if ($conn->query($sql) === TRUE) {
					echo 1;
				} else {
				echo 0;
				}
			}
			else{
				echo "Candidate Has been sent to this Job interview";
			}									
	}		
	else {

		echo json_encode( "500");
	}
?>