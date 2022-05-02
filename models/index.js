const { Producto, ProductoSchema } = require("./producto.model");
const { Usuario, UsuarioSchema } = require("./usuario.model");
const { Venta, VentaSchema } = require("./venta.model");
const { DetalleVenta, DetalleVentaSchema } = require("./detalleVenta.model");
const { Turno, TurnoSchema } = require("./turno.model");
const { Repartidor, RepartidorSchema } = require("./repartidor.model");
const { Categoria, CategoriaSchema } = require("./categoria.model");
const { MetodoPago, MetodoPagoSchema } = require("./metodoPago.model");
const { Marca, MarcaSchema } = require("./marca.model");
const { Imagen, ImagenSchema } = require("./imagen.model");

function setupModels(sequelize) {
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  DetalleVenta.init(DetalleVentaSchema, DetalleVenta.config(sequelize));
  Turno.init(TurnoSchema, Turno.config(sequelize));
  Repartidor.init(RepartidorSchema, Repartidor.config(sequelize));
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  MetodoPago.init(MetodoPagoSchema, MetodoPago.config(sequelize));
  Marca.init(MarcaSchema, Marca.config(sequelize));
  Imagen.init(ImagenSchema, Imagen.config(sequelize));

  Venta.associate(sequelize.models)
  DetalleVenta.associate(sequelize.models)
  Producto.associate(sequelize.models)
}

module.exports = setupModels;
