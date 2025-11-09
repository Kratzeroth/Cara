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
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !email || !password || !confirmPassword) {
      setError("⚠️ Todos los campos son obligatorios");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("⚠️ Las contraseñas no coinciden");
      setSuccess("");
      return;
    }

    try {
      // Enviar datos al backend
      const response = await fetch("http://localhost:8080/Cara/Cara/backend/registro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setError("");
        setSuccess("✅ Registro exitoso");
        alert("✅ Usuario registrado correctamente");
        navigate("/products"); // redirigir después del registro
      } else {
        setError(data.message);
        setSuccess("");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setError("❌ No se pudo conectar con el servidor");
      setSuccess("");
    }
  };

  return (
    <>
      <Header />
      <main>
        <section id="login-section">
          <div className="login-card">
            <h2>Regístrate</h2>
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}

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

