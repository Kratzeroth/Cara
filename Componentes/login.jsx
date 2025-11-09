import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!captchaValue) {
      setError("Por favor confirma que no eres un robot");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Cara/Cara/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captcha: captchaValue }),
      });

      const data = await response.json();

      if (data.success) {
        // Guarda el usuario en localStorage
          localStorage.setItem("usuario",data.usuario);
        alert(`✅ Bienvenido, ${data.usuario}`);
        
        navigate("/products");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Error en la conexion:",err);
      setError("Error al conectar con el servidor");
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
              <ReCAPTCHA
                sitekey="6LerhvIrAAAAAKgGSWaLJ9B2lII1988rGHKuqC2S"
                onChange={(value) => setCaptchaValue(value)}
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

