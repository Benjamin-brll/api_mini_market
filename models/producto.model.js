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
        type: "varchar(50)",
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
        allowNull: true,
        type: DataTypes.INTEGER,
        field: "id_imagen"
    },
}

class Producto extends Model{

    static associate(models){
        this.belongsTo(models.Marca,{
            foreignKey: 'idMarca'
        })
        this.belongsTo(models.Categoria,{
            foreignKey: 'idCategoria'
        })
        this.hasOne(models.Imagen,{
            foreignKey: 'idImagen'
        })
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