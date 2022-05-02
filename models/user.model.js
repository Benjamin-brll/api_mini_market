const { Model, DataTypes } = require("sequelize");

const USER_TABLE = "usuarios";

const UserSchema = {
  idUsuario: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    field: "id_usuario",
  },
  nombre: {
    allowNull: true,
    type: "varchar(30)",
  },
  correo: {
    allowNull: true,
    type: "varchar(50)",
  },
  contrasena: {
    allowNull: true,
    type: "varchar(70)",
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
  telefono: {
    allowNull: false,
    type: "varchar(15)",
  },
  sexo: {
    allowNull: false,
    type: "varchar(10)",
  },
  isAdmin: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "is_admin",
  },
  estado: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
