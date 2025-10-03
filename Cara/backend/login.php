<?php
header("Content-Type: application/json; charset=UTF-8");
require "db.php"; // conexión PDO

$data = json_decode(file_get_contents("php://input"), true);

$email    = $data["email"]    ?? null;
$password = $data["password"] ?? null;

if (!$email || !$password) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}

$sql = "SELECT * FROM Usuario WHERE Email = ? LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && $password === $user["Clave"]) {
    // aquí luego mejoraremos con password_verify()
    echo json_encode(["success" => true, "message" => "Login exitoso", "usuario" => $user["Nombre"]]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales inválidas"]);
}
