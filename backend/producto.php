<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Incluir conexión PDO
require "bd.php";

try {
    // Consulta productos con categoría y proveedor
    $query = "
        SELECT 
            p.IdProducto,
            p.Nombre,
            p.Descripcion,
            p.Precio,
            p.Imagen,
            c.NombreCategoria AS Categoria,
            pr.NombreProveedor AS Marca
        FROM producto p
        INNER JOIN categoria c ON p.IdCategoria = c.IdCategoria
        INNER JOIN proveedor pr ON p.IdProveedor = pr.IdProveedor
    ";

    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Dar formato al precio y devolver JSON
    foreach ($productos as &$p) {
        $p["Precio"] = "S/." . number_format($p["Precio"], 2);
    }

    echo json_encode($productos, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Error al obtener productos: " . $e->getMessage()
    ]);
}
?>
