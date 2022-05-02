const express = require("express");
const app = express();

const { config } = require("../config/index");

const productsApi = require("../routes/products");
const usersApi = require("../routes/users");
const ventasApi = require("../routes/ventas");
const turnosApi = require("../routes/turnos");
const repartidoresApi = require("../routes/repartidores");
const categoriasApi = require("../routes/categorias");
const metodoPagoApi = require("../routes/metodoPago");
const marcasApi = require("../routes/marcas");
const imagenesApi = require("../routes/imagenes");

app.use(express.json());

productsApi(app);
usersApi(app);
ventasApi(app);
turnosApi(app);
repartidoresApi(app);
categoriasApi(app);
metodoPagoApi(app);
marcasApi(app);
imagenesApi(app);

app.listen(config.port, () => {
  console.log(`app running on port http://localhost:${config.port}/`);
});
