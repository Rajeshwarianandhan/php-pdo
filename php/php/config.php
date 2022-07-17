<?php

// $user = 'root'; // Mysql
// User$password = 'root'; // Mysql Password
// $server = 'localhost'; // Mysql Host
// $database = 'mydb'; // Mysql Databse
// // PDO Connection string
// $pdo = new PDO("mysql:host=$server;dbname=$database", $user, $password);


$servername = "localhost";
$username = "root";
$password = "root";

try {
  $conn = new PDO("mysql:host=$servername;dbname=mydb", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

?>