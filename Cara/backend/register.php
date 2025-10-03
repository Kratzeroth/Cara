<?php
header("Content-Type: application/json; charset=UTF-8");
require "db.php"; 

// Capturar datos enviados desde React (JSON)
$data = json_decode(file_get_contents("php://input"), true);

$nombre   = $data["nombre"]   ?? null;
$email    = $data["email"]    ?? null;
$password = $data["password"] ?? null;

if (!$nombre || !$email || !$password) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}


$stmt = $pdo->query("SELECT MAX(IdUsuario) AS ultimo FROM Usuario");
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$nuevoId = $row["ultimo"] + 1;


$sql = "INSERT INTO Usuario (IdUsuario, Nombre, Email, Clave) VALUES (?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);


$ok = $stmt->execute([$nuevoId, $nombre, $email, $password]);

if ($ok) {
    echo json_encode(["success" => true, "message" => "Usuario registrado con éxito"]);
} else {
    echo json_encode(["success" => false, "message" => "No se pudo registrar"]);
}