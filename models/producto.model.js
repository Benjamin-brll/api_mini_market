const { Model, DataTypes } = require('sequelize')

const PRODUCTOS_TABLE = 'productos';

const ProductoSchema = {
    
    idProducto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: "id_producto"
    },
    nombre: {
        allowNull: false,
        type: "varchar(30)",
    },
    descripcion: {
        allowNull: true,
        type: "text",
    },
    precio: {
        allowNull: false,
        type: DataTypes.DECIMAL(4,2)
    },
    stock: {
        allowNull: true,
        type: DataTypes.SMALLINT
    },
    idCategoria: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "id_categoria"
    },
    idMarca: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "id_marca"
    },
    idImagen: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "id_imagen"
    },
}

class Producto extends Model{
    
    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCTOS_TABLE,
            modelName: 'Producto',
            timestamps: false
        }
    }
}

module.exports = { PRODUCTOS_TABLE, ProductoSchema, Producto}