import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/img/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    // [MOD] Estado para almacenar el usuario logueado.
    const [loggedInUser, setLoggedInUser] = useState(null); 
    // [MOD] Hook para la navegación.
    const navigate = useNavigate(); 

    // [MOD] Efecto: Lee localStorage al cargar y monitorea cambios de sesión.
    useEffect(() => {
        const user = localStorage.getItem("usuario");
        setLoggedInUser(user);

        // Escucha cambios de sesión.
        const handleStorageChange = () => {
            setLoggedInUser(localStorage.getItem("usuario"));
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []); 

    // [MOD] Función para manejar el cierre de sesión (Logout).
    const handleLogout = () => {
        localStorage.removeItem("usuario");
        setLoggedInUser(null);
        navigate("/");
    };


    return (
        <header id="header">
            {/* LOGO */}
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>

            {/* NAVBAR */}
            <div>
                <ul id="navbar" className={menuOpen ? "active" : ""}>
                    <li><Link to="/" className="active">Inicio</Link></li>
                    <li><Link to="/shop">Tienda</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li>
                        <a
                            href="#"
                            id="close"
                            onClick={(e) => {
                                e.preventDefault();
                                setMenuOpen(false);
                            }}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* BOTONES: CARRITO + LOGIN / PERFIL */}
            <div className="header-actions">
                <Link to="/cart" id="cart-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>2</span>
                </Link>

                {/* [MOD] Lógica condicional: Muestra Login o Perfil/Logout. */}
                {loggedInUser ? (
                    // Si está logueado
                    <>
                        <Link to="/profile">
                            {/* Muestra "Hola, [Primer Nombre]" */}
                            <button id="profile-btn">Hola, {loggedInUser.split(' ')[0]}</button>
                        </Link>
                        <button id="logout-btn" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </>
                ) : (
                    // Si NO está logueado (Reemplaza el botón estático original)
                    <Link to="/login">
                        <button id="login-btn">Iniciar sesión</button>
                    </Link>
                )}
            </div>

            {/* MODO MÓVIL */}
            <div className="mobile">
                <i
                    id="bar"
                    className="fa-solid fa-bars"
                    onClick={() => setMenuOpen(true)}
                ></i>
            </div>
        </header>
    );
};

export default Header;