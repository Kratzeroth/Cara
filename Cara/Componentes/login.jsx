import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

/*para la navegacion de pg*/
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Todos los campos son obligatorios");
    } else {
      setError("");
      alert(`✅ Inicio de sesión exitoso\nEmail: ${email}`);
      /*dirige a pg de products*/
      navigate("/products");
    }
  };

  return (
    <>
      <Header />
      <main>
        <section id="login-section">
          <div className="login-card">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="submit" className="normal">Ingresar</button>
            </form>

            <p className="register-text">
              ¿Aún no tienes una cuenta?{" "}
              <Link to="/register">Regístrate</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
