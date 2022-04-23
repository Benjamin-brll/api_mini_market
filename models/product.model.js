const { Model, DataTypes } = require('sequelize')

const PRODUCT_TABLE = 'productos';

const ProductSchema = {
    
    idProducto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: true,
        type: "varchar(30)",
    },
    descripcion: {
        allowNull: true,
        type: "text",
    },
    precio: {
        allowNull: true,
        type: DataTypes.DECIMAL(4,2)
    },
    stock: {
        allowNull: true,
        type: DataTypes.SMALLINT
    },
    idCategoria: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idMarca: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idImagen: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
}

class Product extends Model{
    
    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product}