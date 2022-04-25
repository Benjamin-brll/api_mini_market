const { models } = require('../libs/mssql')

class ProductService {

    constructor(){

    }

    async findAll(){
        const products = await models.Product.findAll()
        return products
    }
}

module.exports = ProductService