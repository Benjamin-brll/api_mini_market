const { Model, DataTypes } = require("sequelize");

const TURNO_TABLE = "turnos";

const TurnoSchema = {
  idTurno: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "id_turno",
  },
  nombre: {
    allowNull: false,
    type: "varchar(20)",
  },
  inicioHorario: {
    allowNull: false,
    type: DataTypes.TIME,
    field: "horario_inicio",
  },
  HorarioFin: {
    allowNull: false,
    type: DataTypes.TIME,
    field: "horario_fin",
  },
};

class Turno extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TURNO_TABLE,
      modelName: "Turno",
      timestamps: false,
    };
  }
}

module.exports = { TURNO_TABLE, TurnoSchema, Turno };
