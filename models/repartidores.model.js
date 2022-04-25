const { Model, DataTypes } = require("sequelize");

const REPARTIDOR_TABLE = "repartidores";

const RepartidorSchema = {
  idRepartidor: {
    allowNull: false,
    primaryKey: true,
    type: "varchar(12)",
    field: "id_repartidor",
  },
  nombre: {
    allowNull: true,
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
  edad: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },

  idTurno: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: "id_turno",
  },
};

class Repartidor extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: REPARTIDOR_TABLE,
      modelName: "Repartidor",
      timestamps: false,
    };
  }
}

module.exports = { REPARTIDOR_TABLE, RepartidorSchema, Repartidor };
