const { Model, DataTypes } = require('sequelize');

const CATEGORIAS_TABLE = "categorias";

const categoriasSchema = {
    idCategoria: {
        allowNull: false,
        primaryKey: true,
        type: "varchar(15)",
        field: "id_categoria",
    },
    nombre: {
        allowNull: false,
        type: "varchar(30)",
    },
    descripcion: {
        allowNull: true,
        type: "text",
    }
}

class categorias extends Model {
    
    static associate(){

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIAS_TABLE,
            modelName: "categorias",
            timestamps: false,
        }
    }
}

module.exports = {CATEGORIAS_TABLE, categoriasSchema, categorias}