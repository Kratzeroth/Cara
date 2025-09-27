import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Importar imágenes y video desde assets
import a6 from "../src/assets/img/about/a6.jpg";
import video1 from "../src/assets/img/about/1.mp4";
import f1 from "../src/assets/img/features/f1.png";
import f2 from "../src/assets/img/features/f2.png";
import f3 from "../src/assets/img/features/f3.png";
import f4 from "../src/assets/img/features/f4.png";
import f5 from "../src/assets/img/features/f5.png";
import f6 from "../src/assets/img/features/f6.png";

const About = () => {
  return (
    <>
      <Header />
      <main>
        {/* Banner superior */}
        <section id="page-header" className="about-header">
          <h2>#Nosotros</h2>
          <p>Conoce más sobre nuestra tienda y nuestra historia</p>
        </section>

        {/* Quiénes somos */}
        <section id="about-head" className="section-p1">
          <img src={a6} alt="Nosotros" />
          <div>
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos un ecommerce dedicado a ofrecer productos de calidad al mejor
              precio, con un enfoque en la innovación, el servicio al cliente y
              la confianza. Nuestra misión es brindarte una experiencia de
              compra rápida, segura y satisfactoria, adaptándonos a tus
              necesidades y tendencias del mercado.
            </p>
            <abbr title="">
              Creando experiencias únicas para nuestros clientes gracias a un
              equilibrio entre diseño, calidad y accesibilidad.
            </abbr>
            <br />
            <br />
            <marquee bgcolor="#ccc" loop="-1" scrollAmount="5" width="100%">
              Tu satisfacción es nuestra prioridad. Compra fácil, rápido y con
              total seguridad.
            </marquee>
          </div>
        </section>

        {/* Video de la app */}
        <section id="about-app" className="section-p1">
          <h1>
            Descarga nuestra <a href="#">App</a>
          </h1>
          <div className="video">
            <video autoPlay muted loop src={video1}></video>
          </div>
        </section>

        {/* Features */}
        <section id="feature" className="section-p1">
          <div className="fe-box">
            <img src={f1} alt="Envíos gratis" />
            <h6>Envíos gratis</h6>
          </div>
          <div className="fe-box">
            <img src={f2} alt="Compra en línea" />
            <h6>Compra en línea</h6>
          </div>
          <div className="fe-box">
            <img src={f3} alt="Ahorra dinero" />
            <h6>Ahorra dinero</h6>
          </div>
          <div className="fe-box">
            <img src={f4} alt="Promociones" />
            <h6>Promociones</h6>
          </div>
          <div className="fe-box">
            <img src={f5} alt="Ventas felices" />
            <h6>Ventas felices</h6>
          </div>
          <div className="fe-box">
            <img src={f6} alt="Soporte" />
            <h6>Soporte</h6>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletters" className="section-p1 section-m1">
          <div className="newstext">
            <h4>Suscríbete a nuestro boletín</h4>
            <p>
              Recibe actualizaciones por correo sobre nuestra tienda y{" "}
              <span>ofertas especiales</span>
            </p>
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

export default About;
