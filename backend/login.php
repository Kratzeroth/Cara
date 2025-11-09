<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); // permite cualquier origen
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}


require "bd.php"; // conexión PDO

$data = json_decode(file_get_contents("php://input"), true);
/*Captcha v2*/
$captcha = $data["captcha"] ?? null;

if (!$captcha) {
    echo json_encode(["success" => false, "message" => "Falta verificación del captcha"]);
    exit;
}

// Validar con Google
$secretKey = "6LerhvIrAAAAAMbIkA2iPmggFalucFXUdUx5GKqr";
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captcha}");
$responseKeys = json_decode($response, true);

if (!$responseKeys["success"]) {
    echo json_encode(["success" => false, "message" => "Captcha inválido"]);
    exit;
}


$email    = $data["email"]    ?? null;
$password = $data["password"] ?? null;

if (!$email || !$password) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}

$sql = "SELECT * FROM usuario WHERE Email = ? LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user["Clave"])) {
    echo json_encode(["success" => true, "message" => "Login exitoso", "usuario" => $user["Nombre"]]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales inválidas"]);
}
