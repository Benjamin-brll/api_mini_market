const { Product, ProductSchema } = require("./product.model");
const { User, UserSchema } = require("./user.model");
const { Ventas, VentasSchema } = require("./ventas.model");
const { Turno, TurnoSchema } = require("./turno.model");
const { Repartidor, RepartidorSchema } = require("./repartidores.model");
const { categorias, categoriasSchema} = require("./categorias.model");
const { metodoPago, metodoPagoSchema} = require("./metodoPago.model");
const { marcas, marcasSchema } = require("./marcas.model");
const { imagenes, imagenesSchema } = require("./imagenes.model");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Ventas.init(VentasSchema, Ventas.config(sequelize));
  Turno.init(TurnoSchema, Turno.config(sequelize));
  Repartidor.init(RepartidorSchema, Repartidor.config(sequelize));
  categorias.init(categoriasSchema, categorias.config(sequelize));
  metodoPago.init(metodoPagoSchema, metodoPago.config(sequelize));
  marcas.init(marcasSchema, marcas.config(sequelize));
  imagenes.init(imagenesSchema, imagenes.config(sequelize));
}

module.exports = setupModels;
