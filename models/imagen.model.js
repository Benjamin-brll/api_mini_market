const { Model, DataTypes } = require('sequelize');

const IMAGEN_TABLE = "imagenes";

const ImagenSchema = {
    idImagen: {
        primaryKey: true,
        allowNull: false,
        field: "id_imagen",
        type: DataTypes.INTEGER,
    },
    nombre: {
        allowNull: false,
        type: "varchar(20)",
    },
    extension: {
        allowNull: false,
        type: "char(4)",
    },
    tamano: {
        allowNull: false,
        type: "varchar(20)",
    },
    nombreTamano: {
        allowNull: false,
        field: 'nombre_tamano',
        type: "char(5)",
    }
}

class Imagen extends Model {

    static associate(){}
    
    static config(sequelize) {
        return {
            sequelize,
            tableName: IMAGEN_TABLE,
            modelName: "Imagen",
            timestamps: false,
        }
    }
}

module.exports = {IMAGEN_TABLE, ImagenSchema, Imagen}