import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Importar imágenes
import person1 from "../src/assets/img/people/1.png";
import person2 from "../src/assets/img/people/2.png";
import person3 from "../src/assets/img/people/3.png";

const Contact = () => {
  // Array de objetos con datos de las personas
  const people = [
    {
      id: 1,
      img: person1,
      nombre: "Martín Condori",
      cargo: "Senior Marketing Manager",
      tel: "+000 123 90077 88",
      email: "contact@example.com",
    },
    {
      id: 2,
      img: person2,
      nombre: "José Quispe",
      cargo: "Senior Marketing Manager",
      tel: "+000 123 90077 88",
      email: "contact@example.com",
    },
    {
      id: 3,
      img: person3,
      nombre: "Ana Huamán",
      cargo: "Senior Marketing Manager",
      tel: "+000 123 90077 88",
      email: "contact@example.com",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Banner superior */}
        <section id="page-header" className="about-header">
          <h2>#Hablemos</h2>
          <p>Déjanos un mensaje, nos encanta escucharte</p>
        </section>

        {/* Detalles de contacto */}
        <section id="contact-details" className="section-p1">
          <div className="details">
            <span>Ponte en contacto</span>
            <h2>Visita una de nuestras oficinas o comunícate con nosotros</h2>
            <h3>Oficina Principal</h3>
            <div>
              <li>
                <i className="fa-regular fa-map"></i>
                <p>56 Glassford Street Glasgow G1 1UL, New York</p>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <p>contact@example.com</p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>+01 2222 365 / (+91) 01 2345 6789</p>
              </li>
              <li>
                <i className="fa-regular fa-clock"></i>
                <p>Lunes a Sábado: 9:00 am - 6:00 pm</p>
              </li>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249710.29650214312!2d-77.15323053286149!3d-12.062543713033204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ea5ddc2917%3A0x308a5998a681e2ba!2sUniversidad%20Tecnol%C3%B3gica%20del%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1741791321088!5m2!1ses-419!2spe"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Formulario y personas */}
        <section id="form-details">
          <form>
            <span>Déjanos un mensaje</span>
            <h2>Nos encanta escucharte</h2>
            <input type="text" placeholder="Tu nombre" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Asunto" />
            <textarea cols="30" rows="10" placeholder="Tu mensaje"></textarea>
            <button className="normal">Enviar</button>
          </form>

          <div className="people">
            {people.map((person) => (
              <div key={person.id}>
                <img src={person.img} alt={person.nombre} />
                <p>
                  <span>{person.nombre}</span> {person.cargo} <br />
                  Tel: {person.tel} <br />
                  {person.email}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletters" className="section-p1 section-m1">
          <div className="newstext">
            <h4>Suscríbete a nuestro boletín</h4>
            <p>
              Recibe actualizaciones de nuestra tienda y{" "}
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

export default Contact;
