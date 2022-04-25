const { Product, ProductSchema } = require("./product.model");
const { User, UserSchema } = require("./user.model");
const { Ventas, VentasSchema } = require("./ventas.model");

function setupModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Ventas.init(VentasSchema, Ventas.config(sequelize));
}

module.exports = setupModels;
