import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />

      <section id="hero">
        <h4>Ofertas de intercambio</h4>
        <h2>Promociones increíbles</h2>
        <h1>En todos nuestros productos</h1>
        <p>Ahorra más con cupones y descuentos de hasta 70%</p>
        <button>Comprar ahora</button>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="../src/assets/img/features/f1.png" alt="Envío gratuito" />
          <h6>Envío gratuito</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f2.png" alt="Pedido en línea" />
          <h6>Pedido en línea</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f3.png" alt="Ahorra dinero" />
          <h6>Ahorra dinero</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f4.png" alt="Promociones" />
          <h6>Promociones</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f5.png" alt="Ventas felices" />
          <h6>Ventas felices</h6>
        </div>
        <div className="fe-box">
          <img src="../src/assets/img/features/f6.png" alt="Soporte" />
          <h6>Soporte al cliente</h6>
        </div>
      </section>

      {/* HERO PRINCIPAL */}
<div 
style={{
    backgroundImage:
      'url("https://us.123rf.com/450wm/elenavdovina/elenavdovina1612/elenavdovina161200188/68247206-background-seamless-green-product-categories-online-store-seamless-green-background-with-white.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  }}
className="hero-section bg-gradient-to-r from-green-900 to-green-600 text-white text-center py-20">
  <h1 className="text-5xl font-bold mb-4">Bienvenido a Cara Market</h1>
  <p className="text-lg mb-6">Descubre productos únicos, paga fácil y recibe en casa.</p>
  <button className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition">
    Explorar productos
  </button>
</div>

{/* CATEGORÍAS */}
<div className="categorias grid md:grid-cols-3 gap-6 py-16 px-6 bg-gray-50">
  <div className="categoria bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
    <img
      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      alt="Tecnología"
      className="h-48 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">Tecnología</h3>
      <p>Lo último en gadgets, laptops y accesorios inteligentes.</p>
    </div>
  </div>

  <div className="categoria bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
    <img
      src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
      alt="Moda"
      className="h-48 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">Moda</h3>
      <p>Ropa, zapatos y accesorios para todos los estilos.</p>
    </div>
  </div>

  <div className="categoria bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      alt="Hogar"
      className="h-48 w-full object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">Hogar</h3>
      <p>Decora tu espacio con artículos prácticos y elegantes.</p>
    </div>
  </div>
</div>

{/* PRODUCTOS DESTACADOS */}
<div className="productos-destacados bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-4xl font-bold mb-10">Productos Destacados</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="producto bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
        alt="Smartwatch X100"
        className="mx-auto mb-4 rounded-lg w-60 h-60 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Smartwatch X100</h3>
      <p className="text-green-600 font-bold mb-3">S/. 249.00</p>
      <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">Agregar al carrito</button>
    </div>

    <div className="producto bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1583225372434-56b8f9a7b26c"
        alt="Audífonos Pro"
        className="mx-auto mb-4 rounded-lg w-60 h-60 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Audífonos Pro</h3>
      <p className="text-green-600 font-bold mb-3">S/. 179.00</p>
      <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">Agregar al carrito</button>
    </div>

    <div className="producto bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1587202372775-98927a9c7e2f"
        alt="Laptop Core i7"
        className="mx-auto mb-4 rounded-lg w-60 h-60 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">Laptop Core i7</h3>
      <p className="text-green-600 font-bold mb-3">S/. 2,899.00</p>
      <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">Agregar al carrito</button>
    </div>
  </div>
</div>

{/* BENEFICIOS */}
<div className="beneficios grid md:grid-cols-3 gap-6 py-20 px-6 bg-white">
  <div className="beneficio text-center">
    <img src="https://cdn-icons-png.flaticon.com/512/3103/3103446.png" alt="envío" className="mx-auto w-20 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">Envío rápido</h3>
    <p>Recibe tus compras en menos de 48 horas.</p>
  </div>
  <div className="beneficio text-center">
    <img src="https://cdn-icons-png.flaticon.com/512/929/929564.png" alt="pagos" className="mx-auto w-20 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">Pagos seguros</h3>
    <p>Protegido con las mejores tecnologías de cifrado.</p>
  </div>
  <div className="beneficio text-center">
    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" alt="soporte" className="mx-auto w-20 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">Atención 24/7</h3>
    <p>Soporte y asistencia en todo momento.</p>
  </div>
</div>

{/* TESTIMONIOS */}
<div className="testimonios bg-gray-100 py-20 text-center">
  <h2 className="text-4xl font-bold mb-8">Lo que dicen nuestros clientes</h2>
  <div className="grid md:grid-cols-3 gap-8 px-8">
    <div className="testimonio bg-white p-6 rounded-2xl shadow">
      <p>"Excelente servicio y productos de calidad. ¡Recomendado!"</p>
      <h4 className="mt-4 font-semibold">- Mariana López</h4>
    </div>
    <div className="testimonio bg-white p-6 rounded-2xl shadow">
      <p>"El envío fue rapidísimo y el soporte me ayudó en minutos."</p>
      <h4 className="mt-4 font-semibold">- Jorge Ramírez</h4>
    </div>
    <div className="testimonio bg-white p-6 rounded-2xl shadow">
      <p>"Me encanta el diseño del sitio, muy fácil de usar."</p>
      <h4 className="mt-4 font-semibold">- Sofía Torres</h4>
    </div>
  </div>
</div>

{/* PROMOCIÓN */}
<div 
style={{
    backgroundImage:
      'url("https://png.pngtree.com/thumb_back/fh260/background/20240325/pngtree-product-presentation-green-cosmetic-podium-background-image_15695091.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  }}
 className="promocion bg-gradient-to-r from-green-700 to-green-500 text-white text-center py-16">
  <h2 className="text-4xl font-bold mb-4">Descuentos exclusivos</h2>
  <p className="text-lg mb-6">Aprovecha hasta 50% en productos seleccionados por tiempo limitado.</p>
  <button className="bg-white text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-100">
    Ver ofertas
  </button>
</div>




      <section id="product1" className="section-p1">
        <h2>Productos destacados</h2>
        <p>Los más vendidos del minimarket</p>
        <div className="pro-container">
          <div className="pro">
            <img src="../src/assets/img/products/f1.jpg" alt="Aceite Vegetal" />
            <div className="des">
              <span>Primor</span>
              <h5>Aceite vegetal 1L</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 12.50</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f2.jpg" alt="Arroz Costeño" />
            <div className="des">
              <span>Costeño</span>
              <h5>Arroz superior 5kg</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 25.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f3.jpg" alt="Leche Gloria" />
            <div className="des">
              <span>Gloria</span>
              <h5>Leche evaporada 400ml</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 4.20</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>

          <div className="pro">
            <img src="../src/assets/img/products/f4.jpg" alt="Pan de molde" />
            <div className="des">
              <span>Bimbo</span>
              <h5>Pan de molde integral</h5>
              <div className="star">
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>S/. 8.90</h4>
            </div>
            <a href="#"><i className="fa-solid fa-cart-shopping cart"></i></a>
          </div>
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Servicio al cliente</h4>
        <h2>Hasta <span>70% de descuento</span> en productos seleccionados</h2>
        <button className="normal">Ver más</button>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Ofertas locas</h4>
          <h2>Lleva 2 y paga 1</h2>
          <span>Los mejores precios del mercado</span>
          <button className="white">Ver detalles</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Temporada de verano</h4>
          <h2>Promociones especiales</h2>
          <span>Productos frescos y naturales</span>
          <button className="white">Explorar</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Hasta 50% en bebidas</h3>
        </div>
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Snacks y dulces -40%</h3>
        </div>
        <div className="banner-box">
          <h2>OFERTAS DE TEMPORADA</h2>
          <h3>Descuentos en productos del hogar</h3>
        </div>
      </section>

      <section id="newsletters" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Suscríbete a nuestro boletín</h4>
          <p>Recibe novedades sobre productos y <span>ofertas exclusivas</span></p>
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

export default Home;
