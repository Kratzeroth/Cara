import React from "react";

// IMPORTS con la ruta correcta ../src/assets/img
import f1 from "../src/assets/img/products/f1.jpg";
import f2 from "../src/assets/img/products/f2.jpg";
import f3 from "../src/assets/img/products/f3.jpg";
import f4 from "../src/assets/img/products/f4.jpg";
import f5 from "../src/assets/img/products/f5.jpg";
import f6 from "../src/assets/img/products/f6.jpg";
import f7 from "../src/assets/img/products/f7.jpg";
import f8 from "../src/assets/img/products/f8.jpg";
import Header from "./Header";
import Footer from "./Footer";

const productos = [
    { id: 1, nombre: "Polo Astronauta Cartoon", marca: "Adidas", precio: "S/.78", imagen: f1 },
    { id: 2, nombre: "Camisa Tropical Breeze Manga Corta", marca: "Adidas", precio: "S/.54", imagen: f2 },
    { id: 3, nombre: "Camisa Retro Blossom Print", marca: "Adidas", precio: "S/.75", imagen: f3 },
    { id: 4, nombre: "Camisa Cherry Blossom Verano", marca: "Adidas", precio: "S/.69.90", imagen: f4 },
    { id: 5, nombre: "Camisa Night Bloom Hawaiana", marca: "Adidas", precio: "S/.67", imagen: f5 },
    { id: 6, nombre: "Camisa Boho Patchwork Algodón", marca: "Adidas", precio: "S/.71", imagen: f6 },
    { id: 7, nombre: "Pantalón Casual de Lino Pierna Ancha", marca: "Adidas", precio: "S/.108", imagen: f7 },
    { id: 8, nombre: "Blusa Oversize Mystic Art", marca: "Adidas", precio: "S/.99.90", imagen: f8 },
];

const Shop = () => {
    return (
        <>
            <Header />
            <main>

                <section id="page-header" className="about-header">
                    <h2>#comprar</h2>
                    <p>Compra con las mejores ofertas</p>
                </section>

                {/* Productos */}
                <section id="product1" className="section-p1">
                    <h2>Nuevas llegadas <small>({productos.length})</small></h2>
                    <p>Colección de verano con diseños modernos</p>

                    <div className="pro-container">
                        {productos.map((p) => (
                            <div className="pro" key={p.id}>
                                <img src={p.imagen} alt={p.nombre} />
                                <div className="des">
                                    <span>{p.marca}</span>
                                    <h5>{p.nombre}</h5>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4>{p.precio}</h4>
                                </div>
                                <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Paginación */}
                <section id="pagination" className="section-p1">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                </section>

                {/* Boletín */}
                <section id="newsletters" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4>Suscríbete a nuestro boletín</h4>
                        <p>Recibe actualizaciones por correo sobre nuestra tienda y <span>ofertas especiales</span></p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Tu correo electrónico" />
                        <button className="normal">Registrarse</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Shop;
