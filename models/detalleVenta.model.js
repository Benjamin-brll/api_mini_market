const { Model, DataTypes } = require('sequelize')
const { VENTA_TABLE } = require('./venta.model')

const DETALLE_VENTA_TABLE = 'detalle_ventas'

const DetalleVentaSchema = {
    idDetalleVenta: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_detalle_venta',
        type: DataTypes.INTEGER
    },
    idVenta: {
        allowNull: false,
        field: 'id_venta',
        type: DataTypes.INTEGER,
        references: {
            model: VENTA_TABLE,
            key: 'id_venta'
        }
    },
    idProducto: {
        allowNull: false,
        field: 'id_producto',
        type: DataTypes.INTEGER
    },
    subTotal: {
        allowNull: false,
        field: 'sub_total',
        type: DataTypes.DECIMAL(6,2)
    },
    cantidad: {
        allowNull: false,
        type: DataTypes.TINYINT
    },
}

class DetalleVenta extends Model{
    static associate(models){
        this.belongsTo(models.Usuario)
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: DETALLE_VENTA_TABLE,
            modelName: 'DetalleVenta',
            timestamps: false
        }
    }
}

module.exports = { DETALLE_VENTA_TABLE, DetalleVentaSchema, DetalleVenta}