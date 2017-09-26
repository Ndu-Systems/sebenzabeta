<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sebenza";


//$servername = "127.0.0.1";
//$username = "ndusys0_sebenza";
//$password = "Harder01!";
//$dbname = "ndusys0_sebenza";


$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>