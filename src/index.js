const express = require("express");
const cors = require('cors');
const path = require('path')
const app = express();

const { config } = require("../config/index");

const productosApi = require("../routes/productos");
const usuariosApi = require("../routes/usuarios");
const ventasApi = require("../routes/ventas");
const turnosApi = require("../routes/turnos");
const repartidoresApi = require("../routes/repartidores");
const categoriasApi = require("../routes/categorias");
const metodoPagoApi = require("../routes/metodoPago");
const marcasApi = require("../routes/marcas");
const imagenesApi = require("../routes/imagenes");
const proveedoresApi = require("../routes/proveedores");

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json());

productosApi(app);
usuariosApi(app);
ventasApi(app);
turnosApi(app);
repartidoresApi(app);
categoriasApi(app);
metodoPagoApi(app);
marcasApi(app);
imagenesApi(app);
proveedoresApi(app);

app.listen(config.port, () => {
  console.log(`app running on port http://localhost:${config.port}/`);
});
