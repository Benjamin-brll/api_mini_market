const { Product, ProductSchema } = require("./product.model");
const { User, UserSchema } = require("./user.model");
const { Ventas, VentasSchema } = require("./ventas.model");
const { Turno, TurnoSchema } = require("./turno.model");
const { Repartidor, RepartidorSchema } = require("./repartidores.model");
const { MetodoPago, MetodoPagoSchema } = require("./metodoPago.model");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Ventas.init(VentasSchema, Ventas.config(sequelize));
  Turno.init(TurnoSchema, Turno.config(sequelize));
  Repartidor.init(RepartidorSchema, Repartidor.config(sequelize));
  MetodoPago.init(MetodoPagoSchema, MetodoPago.config(sequelize));
}

module.exports = setupModels;
