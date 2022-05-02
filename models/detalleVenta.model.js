const { Model, DataTypes } = require('sequelize')

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
        type: DataTypes.INTEGER
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