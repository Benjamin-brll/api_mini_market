const { Model, DataTypes } = require("sequelize");

const PROVEEDOR_TABLE = "proveedores";

const ProveedorSchema = {
  idProveedor: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "id_proveedor",
  },
  nombre: {
    allowNull: false,
    type: "varchar(30)",
  },
  apellidoPaterno: {
    allowNull: true,
    type: "varchar(20)",
    field: "apellido_paterno",
  },
  apellidoMaterno: {
    allowNull: true,
    type: "varchar(20)",
    field: "apellido_materno",
  },
  razonSocial: {
    allowNull: false,
    type: "varchar(20)",
    field: "razon_social",
  },
  ruc: {
    allowNull: false,
    type: "varchar(11)",
  },
};

class Proveedor extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVEEDOR_TABLE,
      modelName: "Proveedor",
      timestamps: false,
    };
  }
}

module.exports = { PROVEEDOR_TABLE, ProveedorSchema, Proveedor };
