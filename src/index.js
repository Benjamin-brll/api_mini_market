const express = require("express");
const app = express();

const { config } = require("../config/index");

const productsApi = require("../routes/products");
const usersApi = require("../routes/users");
const ventasApi = require("../routes/ventas");
const turnosApi = require("../routes/turnos");

app.use(express.json());

productsApi(app);
usersApi(app);
ventasApi(app);
turnosApi(app);

app.listen(config.port, () => {
  console.log(`app running on port http://localhost:${config.port}/`);
});
