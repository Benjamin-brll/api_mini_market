const { Model, DataTypes } = require('sequelize');

const CATEGORIA_TABLE = "categorias";

const CategoriaSchema = {
    idCategoria: {
        primaryKey: true,
        allowNull: false,
        field: "id_categoria",
        type: DataTypes.INTEGER,
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

class Categoria extends Model {
    
    static associate(){

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIA_TABLE,
            modelName: "Categoria",
            timestamps: false,
        }
    }
}

module.exports = {CATEGORIA_TABLE, CategoriaSchema, Categoria}