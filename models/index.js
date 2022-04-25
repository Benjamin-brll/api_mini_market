const { Product, ProductSchema } = require('./product.model')
const { Ventas, VentasSchema } = require('./ventas.model')

function setupModels(sequelize){
    Product.init(ProductSchema, Product.config(sequelize))
    Ventas.init(VentasSchema, Ventas.config(sequelize))
}

module.exports = setupModels