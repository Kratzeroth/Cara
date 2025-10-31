<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

include 'bd.php';

// Leer los datos JSON enviados desde React
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(["success" => false, "message" => "No se recibieron datos"]);
    exit;
}

$nombre = $input["nombre"] ?? "";
$email = $input["email"] ?? "";
$password = $input["password"] ?? "";

// Validar campos
if (empty($nombre) || empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios"]);
    exit;
}

// Encriptar la contraseña antes de guardarla
$claveHash = password_hash($password, PASSWORD_BCRYPT);

try {
    // Verificar si el usuario ya existe
    $stmt = $pdo->prepare("SELECT * FROM usuario WHERE Email = ?");
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        echo json_encode(["success" => false, "message" => "El correo ya está registrado"]);
        exit;
    }

    // Insertar nuevo usuario
    $sql = "INSERT INTO usuario (Nombre, Email, Clave) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nombre, $email, $claveHash]);

    echo json_encode(["success" => true, "message" => "Usuario registrado correctamente"]);

} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Error en la base de datos: " . $e->getMessage()]);
}
?>
