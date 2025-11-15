<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli("localhost", "root", "", "cara_db");

$id = $_POST["id"];
$name = $_POST["name"];
$category = $_POST["category"];
$stock = $_POST["stock"];
$price = $_POST["price"];
$provider = $_POST["provider"];

$imageSql = "";

if (isset($_FILES["image"])) {
    $file = $_FILES["image"];
    $imageName = time() . "_" . $file["name"];
    move_uploaded_file($file["tmp_name"], "../uploads/" . $imageName);
    $imageSql = ", image='$imageName'";
}

$sql = "UPDATE products SET 
        name='$name', 
        category='$category',
        stock='$stock',
        price='$price',
        provider='$provider'
        $imageSql
        WHERE id=$id";

echo $conn->query($sql)
  ? "Producto actualizado"
  : "Error al actualizar";
?>
