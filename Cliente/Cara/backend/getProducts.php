<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "cara_db");

$result = $conn->query("SELECT * FROM products");
$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
