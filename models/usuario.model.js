const bcrypt = require('bcrypt')
const { Model, DataTypes } = require("sequelize");

const USUARIO_TABLE = "usuarios";

const UsuarioSchema = {
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
    async set(value){
      this.setDataValue('contrasena', bcrypt.hashSync(value,10))
    }
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

class Usuario extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: "Usuario",
      timestamps: false,
    };
  }
}

module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario };
