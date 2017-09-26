<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sebenza";


//$servername = "127.0.0.1";
//$username = "possib0_admin";
//$password = "J9CR1ATpzgp8Vcs";
//$dbname = "possib0_poss";


$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>