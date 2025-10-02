import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Header from "./Header";
import Footer from "./Footer";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

 
   /*para la cambio de pg al registrarse*/
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    /*validacion de campos*/

    if (!nombre || !email || !password || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      /*validacion de contraseñas iguales */
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
      alert("✅ Registro exitoso"); 
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
            <h2>Registrate </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                /* actualiza el estado de la contrasseña */
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="submit" className="normal">Registrarse</button>
            </form>

            <p className="register-text">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Registro;
