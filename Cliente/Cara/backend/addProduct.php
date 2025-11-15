<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli("localhost", "root", "", "cara_db");

$name = $_POST["name"];
$category = $_POST["category"];
$stock = $_POST["stock"];
$price = $_POST["price"];
$provider = $_POST["provider"];

$imageName = null;

if (isset($_FILES["image"])) {
    $file = $_FILES["image"];
    $imageName = time() . "_" . $file["name"];
    move_uploaded_file($file["tmp_name"], "../uploads/" . $imageName);
}

$sql = "INSERT INTO products (name, category, stock, price, provider, image)
        VALUES ('$name', '$category', '$stock', '$price', '$provider', '$imageName')";

echo $conn->query($sql)
  ? "Producto agregado correctamente"
  : "Error al agregar";
?>
