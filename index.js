const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Tu número de WhatsApp Perú
const PHONE = "944480371";

// Ahora el endpoint usa POST y la misma ruta que el frontend
app.post("/api/wsp", (req, res) => {
  const { total } = req.body;

  if (!total) {
    return res.status(400).json({ error: "Falta el monto total." });
  }

  const mensaje = `Hola, deseo completar mi pago. El monto es: S/. ${total}`;
  
  const url = `https://api.whatsapp.com/send?phone=51${PHONE}&text=${encodeURIComponent(
    mensaje
  )}`;

  return res.json({ url });
});

app.listen(PORT, () =>
  console.log(`Microservicio WhatsApp escuchando en http://localhost:${PORT}`)
);
