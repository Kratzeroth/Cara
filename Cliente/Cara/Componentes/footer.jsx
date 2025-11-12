import React from "react";
import logo from "../src/assets/img/logo.png";  
import appStore from "../src/assets/img/pay/app.jpg";
import playStore from "../src/assets/img/pay/play.jpg";
import pay from "../src/assets/img/pay/pay.png";

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src={logo} alt="Logo de la empresa" />
                <h4>Contacto</h4>
                <p><strong>Dirección:</strong> 562 Wellington Road, Calle 32, San Francisco</p>
                <p><strong>Teléfono:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
                <p><strong>Horario:</strong> 10:00 - 18:00, Lunes - Sábado</p>
                <div className="follow">
                    <h4>Síguenos</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-x"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>Nosotros</h4>
                <a href="#">Quiénes somos</a>
                <a href="#">Información de entrega</a>
                <a href="#">Política de privacidad</a>
                <a href="#">Términos y condiciones</a>
                <a href="#">Contáctanos</a>
            </div>

            <div className="col">
                <h4>Mi cuenta</h4>
                <a href="#">Iniciar sesión</a>
                <a href="cart.html">Ver carrito</a>
                <a href="#">Mi lista de deseos</a>
                <a href="#">Rastrear mi pedido</a>
                <a href="#">Ayuda</a>
            </div>

            <div className="col install">
                <h4>Instalar</h4>
                <p>Desde App Store o Google Play</p>
                <div className="row">
                    <img src={appStore} alt="App Store" />
                    <img src={playStore} alt="Google Play" />
                </div>
                <p>Pasarelas de pago seguras</p>
                <img src={pay} alt="Pagos seguros" />
            </div>

            <div className="copyright">
                <p>© 2021, Tech2 etc - Plantilla Ecommerce en HTML y CSS</p>
            </div>
        </footer>
    );
}

export default Footer;
