import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
   <Header />

      {/* Cabecera Blog */}
      <section id="page-header" className="blog-header">
        <h2>#LeeMás</h2>
        <p>Lee todos los estudios de caso sobre nuestros productos!</p>
      </section>

      {/* Sección Blog */}
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b1.jpg" alt="Blog 1" />
          </div>
          <div className="blog-details">
            <h4>Sudadera con cremallera de algodón</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b2.jpg" alt="Blog 2" />
          </div>
          <div className="blog-details">
            <h4>Cómo peinar un Quiff</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon
              irony, godard....</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>11/12</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b3.jpg" alt="Blog 3" />
          </div>
          <div className="blog-details">
            <h4>Artículos imprescindibles para skaters</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>07/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b4.jpg" alt="Blog 4" />
          </div>
          <div className="blog-details">
            <h4>Tendencias inspiradas en pasarela</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>05/07</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b5.jpg" alt="Blog 5" />
          </div>
          <div className="blog-details">
            <h4>Tendencias masculinas AW20</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b6.jpg" alt="Blog 6" />
          </div>
          <div className="blog-details">
            <h4>Sudadera de algodón con cremallera</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>13/01</h1>
        </div>

        <div className="blog-box">
          <div className="blog-img">
            <img src="../src/assets/img/blog/b7.jpg" alt="Blog 7" />
          </div>
          <div className="blog-details">
            <h4>Sudadera de algodón con cremallera</h4>
            <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies
              yr wolf chartreuse hexagon irony, godard...</p>
            <a href="#">SEGUIR LEYENDO</a>
          </div>
          <h1>30/02</h1>
        </div>
      </section>

      {/* Paginación */}
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
      </section>

      {/* Newsletter */}
      <section id="newsletters" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Suscríbete al boletín</h4>
          <p>Recibe actualizaciones por correo sobre nuestra última tienda y <span>ofertas especiales</span></p>
        </div>
        <div className="form">
          <input type="text" placeholder="Tu correo electrónico" />
          <button className="normal">Suscribirse</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
