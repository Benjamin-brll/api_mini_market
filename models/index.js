const { Producto, ProductoSchema } = require("./producto.model");
const { Usuario, UsuarioSchema } = require("./usuario.model");
const { Venta, VentaSchema } = require("./venta.model");
const { DetalleVenta, DetalleVentaSchema } = require("./detalleVenta.model");
const { Turno, TurnoSchema } = require("./turno.model");
const { Repartidor, RepartidorSchema } = require("./repartidores.model");
const { categorias, categoriasSchema } = require("./categorias.model");
const { metodoPago, metodoPagoSchema } = require("./metodoPago.model");
const { marcas, marcasSchema } = require("./marcas.model");
const { imagenes, imagenesSchema } = require("./imagenes.model");
const { Proveedor, ProveedorSchema } = require("./proveedor.model");

function setupModels(sequelize) {
  Producto.init(ProductoSchema, Producto.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  DetalleVenta.init(DetalleVentaSchema, DetalleVenta.config(sequelize));
  Turno.init(TurnoSchema, Turno.config(sequelize));
  Repartidor.init(RepartidorSchema, Repartidor.config(sequelize));
  categorias.init(categoriasSchema, categorias.config(sequelize));
  metodoPago.init(metodoPagoSchema, metodoPago.config(sequelize));
  marcas.init(marcasSchema, marcas.config(sequelize));
  imagenes.init(imagenesSchema, imagenes.config(sequelize));
  Proveedor.init(ProveedorSchema, Proveedor.config(sequelize));

  Venta.associate(sequelize.models);
  DetalleVenta.associate(sequelize.models);
  Producto.associate(sequelize.models);
}

module.exports = setupModels;
