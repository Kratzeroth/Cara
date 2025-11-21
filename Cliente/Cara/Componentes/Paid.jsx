import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react"; 
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

  // ---------------------------
  //     MICROSERVICIO WSP
  // ---------------------------
  const pagarPorWhatsApp = async () => {
    try {
      const resp = await fetch("https://microservicios-jnj5.onrender.com/api/wsp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: "Cliente",
          total: total,
        }),
      });

      const data = await resp.json();

      if (data.url) {
        window.open(data.url, "_blank");
      } else {
        alert("Error al generar el enlace de pago");
      }
    } catch (err) {
      console.error(err);
      alert("No se pudo conectar con el microservicio");
    }
  };

  // ---------------------------
  //     MERCADO PAGO
  // ---------------------------
  const generarMercadoPagoURL = async (total) => {
    try {
      const resp = await fetch(
        "https://microservicio-mercado.onrender.com/api/pago",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ total }),
        }
      );

      const data = await resp.json();
      return data.url || null;
    } catch (err) {
      console.error("ERROR MP:", err);
      return null;
    }
  };

  // Componente para QR Mercado Pago
  const MercadoPagoQR = ({ total }) => {
    const [link, setLink] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
      const cargar = async () => {
        const url = await generarMercadoPagoURL(total);
        if (url) setLink(url);
        else setError(true);
      };
      cargar();
    }, [total]);

    if (error)
      return <p style={{ color: "red" }}>❌ Error al generar QR de Mercado Pago.</p>;

    if (!link) return <p>Cargando QR...</p>;

    return (
      <>
        <QRCodeCanvas
          value={link}
          size={250}
          bgColor="#ffffff"
          fgColor="#000000"
          includeMargin={true}
        />
        <p>
          También puedes pagar aquí: <br />
          <a href={link} target="_blank" rel="noreferrer">
            Abrir Mercado Pago
          </a>
        </p>
      </>
    );
  };

  // ---------------------------
  //     YAPE
  // ---------------------------
  const generarYapeURL = (total) => {
    const phone = "987654321";
    const message = `Pago por compra Tienda CARA - Monto: S/. ${total}`;
    return `https://www.yape.com.pe/pay?phone=${phone}&amount=${total}&message=${encodeURIComponent(
      message
    )}`;
  };

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

      {/* ---------- MODAL ---------- */}
      {mostrarPasarela && (
        <div className="overlay-pasarela">
          <div className="modal-pago">
            <h2>Cancela tu pedido</h2>
            <p className="monto">Monto total: S/. {total}</p>

            <div className="metodos">
              <button
                className={`metodo ${metodo === "yape" ? "activo" : ""}`}
                onClick={() => setMetodo("yape")}
              >
                Yape
              </button>

              <button
                className={`metodo ${metodo === "mercado" ? "activo" : ""}`}
                onClick={() => setMetodo("mercado")}
              >
                Mercado Pago
              </button>
            </div>

            <div className="qr-box">
              {metodo === "yape" && (
                <>
                  <h3>Pagar con Yape</h3>
                  <QRCodeCanvas
                    value={generarYapeURL(total)}
                    size={250}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    includeMargin={true}
                  />
                  <p>
                    Escanea el QR o envía a: <strong>987 654 321</strong>
                  </p>
                </>
              )}

              {metodo === "mercado" && (
                <>
                  <h3>Pagar con Mercado Pago</h3>
                  <MercadoPagoQR total={total} />
                </>
              )}
            </div>

            <button
              className="btn-wsp"
              onClick={pagarPorWhatsApp}
              style={{
                marginTop: "15px",
                backgroundColor: "#25D366",
                color: "white",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              💬 Pagar por WhatsApp
            </button>

            <button
              className="btn-cerrar"
              onClick={() => setMostrarPasarela(false)}
            >
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
