import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PerfilU = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("perfil");

  const [user, setUser] = useState({
    nombre: "xxxx xxxxxxx",
    email: "xxxxx@mail.com",
    telefono: " 942 852 960",
    direccion: "Av. Universidad 123, Lima",
  });

  const [changesMade, setChangesMade] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setChangesMade(true);
  };

  const handleSave = () => {
    alert("✅ Datos guardados correctamente");
    setChangesMade(false);
  };

  const handleLogout = () => {
    alert("✅ Has cerrado sesión");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <main className="perfil-container">
        {/* Menú lateral */}
        <aside className="perfil-menu">
          <h3>Mi cuenta</h3>
          <ul>
            <li
              className={activeTab === "perfil" ? "active" : ""}
              onClick={() => setActiveTab("perfil")}
            >
              Perfil
            </li>
            <li
              className={activeTab === "pedidos" ? "active" : ""}
              onClick={() => setActiveTab("pedidos")}
            >
              Mis pedidos
            </li>
            <li onClick={handleLogout}>Cerrar sesión</li>
          </ul>
        </aside>

        {/* Formulario editable */}
        <section className="perfil-main">
          {activeTab === "perfil" && (
            <div className="perfil-card">
              <h2>Datos personales</h2>

              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={user.nombre}
                onChange={handleChange}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />

              <label>Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={user.telefono}
                onChange={handleChange}
              />

              <label>Dirección</label>
              <input
                type="text"
                name="direccion"
                value={user.direccion}
                onChange={handleChange}
              />

              {changesMade && (
                <button className="guardar-btn" onClick={handleSave}>
                  Guardar
                </button>
              )}
            </div>
          )}

          {activeTab === "pedidos" && (
            <div className="perfil-card">
              <h2>Mis pedidos</h2>
              <p>Pedido 1: Producto A - Enviado</p>
              <p>Pedido 2: Producto B - Procesando</p>
              <p>Pedido 3: Producto C - Entregado</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PerfilU;
