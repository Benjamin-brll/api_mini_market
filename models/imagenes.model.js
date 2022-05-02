const { Model, DataTypes } = require('sequelize');

const IMAGENES_TABLE = "imagenes";

const imagenesSchema = {
    idImagen: {
        allowNull: false,
        primaryKey: true,
        type: "varchar(12)",
        field: "id_imagenes",
    },
    nombre: {
        allowNull: false,
        type: "varchar(20)",
    },
    extension: {
        allowNull: false,
        type: "char(4)",
    },
    tamaño: {
        allowNull: false,
        type: "varchar(20)",
    },
    nombreTamaño: {
        allowNull: false,
        type: "char(5)",
    }
}

class imagenes extends Model {

    static associate(){}
    
    static config(sequelize) {
        return {
            sequelize,
            tableName: IMAGENES_TABLE,
            modelName: "imagenes",
            timestamps: false,
        }
    }
}

module.exports = {IMAGENES_TABLE, imagenesSchema, imagenes}