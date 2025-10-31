<?php
$host = "localhost";
$dbname = "SOA";   
$user = "root";    
$pass = "";        

try {
    $pdo = new PDO("mysql:host=localhost;dbname=SOA;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["success" => false, "message" => "Error de conexión: " . $e->getMessage()]));
}
?>
