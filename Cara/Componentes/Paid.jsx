import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import f1 from "../src/assets/img/products/f1.jpg";
import f2 from "../src/assets/img/products/f2.jpg";
import f3 from "../src/assets/img/products/f3.jpg";

const Pasarela = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto A", precio: 50, cantidad: 1, img: f1 },
    { id: 2, nombre: "Producto B", precio: 30, cantidad: 2, img: f2 },
    { id: 3, nombre: "Producto C", precio: 20, cantidad: 1, img: f3 },
  ]);

  const [mostrarPasarela, setMostrarPasarela] = useState(false);
  const [metodo, setMetodo] = useState("yape");

  const aumentarCantidad = (id) =>
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );

  const disminuirCantidad = (id) =>
    setProductos(
      productos.map((p) =>
        p.id === id && p.cantidad > 1 ? { ...p, cantidad: p.cantidad - 1 } : p
      )
    );

  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const generarQR = (texto) =>
    `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(
      texto
    )}`;

  return (
    <>
      <Header />
      <main className="pasarela-container">
        <h2 className="titulo-pasarela">Resumen de compra</h2>
        <div className="productos-grid">
          {productos.map((p) => (
            <div key={p.id} className="producto-card">
              <img src={p.img} alt={p.nombre} />
              <h4>{p.nombre}</h4>
              <p>S/. {p.precio}</p>
              <div className="cantidad-controles">
                <button onClick={() => disminuirCantidad(p.id)}>-</button>
                <span>{p.cantidad}</span>
                <button onClick={() => aumentarCantidad(p.id)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="resumen-total">
          <h3>Total a pagar: S/. {total}</h3>
          <button
            className="btn-pagar"
            onClick={() => setMostrarPasarela(true)}
          >
            Proceder al pago
          </button>
        </div>
      </main>

      {mostrarPasarela && (
        <div className="overlay-pasarela">
          <div className="modal-pago">
            <h2>Pago seguro - Tienda CARA</h2>
            <p className="monto">Monto total: S/. {total}</p>

            <div className="metodos">
              <button
                className={`metodo ${metodo === "yape" ? "activo" : ""}`}
                onClick={() => setMetodo("yape")}
              >
                Yape
              </button>
              <button
                className={`metodo ${metodo === "plin" ? "activo" : ""}`}
                onClick={() => setMetodo("plin")}
              >
                Plin
              </button>
            </div>

            <div className="qr-box">
              {metodo === "yape" ? (
                <>
                  <h3>Pagar con Yape</h3>
                  <img
                    src={generarQR(
                      `Pago Yape - Monto: S/. ${total} - Cel: 987654321`
                    )}
                    alt="QR Yape"
                  />
                  <p>Escanea el QR o envía a: <strong>987 654 321</strong></p>
                </>
              ) : (
                <>
                  <h3>Pagar con Plin</h3>
                  <img
                    src={generarQR(
                      `Pago Plin - Monto: S/. ${total} - Cel: 912345678`
                    )}
                    alt="QR Plin"
                  />
                  <p>Escanea el QR o envía a: <strong>912 345 678</strong></p>
                </>
              )}
            </div>

            <button className="btn-cerrar" onClick={() => setMostrarPasarela(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Pasarela;
