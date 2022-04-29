const { Model, DataType } = require('sequelize')

const MARCAS_TABLE = 'marcas';

const marcasSchema = {
    idMarca: {
        allowNull: false,
        primaryKey: true,
        type: "varchar(12)",
        field: "id_marcas",
    },
    nombre: {
        allowNull: false,
        type: "varchar(20)",
    },
    descripcion: {
        allowNull: true,
        type: "text",
    }
}

class marcas extends Model {

    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: MARCAS_TABLE,
            modelName: 'marcas',
            timestamps: false,
        };
    }
}

module.exports = {MARCAS_TABLE, marcasSchema, marcas};