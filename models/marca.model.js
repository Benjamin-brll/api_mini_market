const { Model, DataTypes } = require('sequelize')

const MARCA_TABLE = 'marcas';

const MarcaSchema = {
    idMarca: {
        primaryKey: true,
        allowNull: false,
        field: "id_marca",
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        allowNull: false,
        type: "varchar(20)",
    }
}

class Marca extends Model {

    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: MARCA_TABLE,
            modelName: 'Marca',
            timestamps: false,
        };
    }
}

module.exports = {MARCA_TABLE, MarcaSchema, Marca};