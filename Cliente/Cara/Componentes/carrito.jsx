import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import f1 from "../src/assets/img/products/f1.jpg";
import f2 from "../src/assets/img/products/f2.jpg";
import f3 from "../src/assets/img/products/f3.jpg";

const Carrito = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto A", precio: 50, cantidad: 1, img: f1 },
    { id: 2, nombre: "Producto B", precio: 30, cantidad: 2, img: f2 },
    { id: 3, nombre: "Producto C", precio: 20, cantidad: 1, img: f3 },
  ]);
  const aumentarCantidad = (id) => {
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const disminuirCantidad = (id) => {
    setProductos(
      productos.map((p) =>
        p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
      )
    );
  };

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <>
      <Header />
      <main className="carrito-container">
        <h2>Mi carrito</h2>
        <div className="carrito-card">
          {productos.map((p) => (
            <div key={p.id} className="carrito-item">
              <img src={p.img} alt={p.nombre} />
              <div className="detalle">
                <h4>{p.nombre}</h4>
                <p>Precio: S/. {p.precio}</p>
                <div className="cantidad">
                  <button onClick={() => disminuirCantidad(p.id)}>-</button>
                  <span>{p.cantidad}</span>
                  <button onClick={() => aumentarCantidad(p.id)}>+</button>
                </div>
              </div>
              <p className="subtotal">Subtotal: S/. {p.precio * p.cantidad}</p>
            </div>
          ))}

          <div className="resumen">
            <h3>Total: S/. {total}</h3>
            <Link to="/payment"><button className="finalizar-btn" >Finalizar compra</button></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Carrito;
