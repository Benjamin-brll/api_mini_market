const productosMock = [
    {
        idProducto: 1,
        nombre: "TROZOS ATUN EN ACEITE",
        descripcion: "LATA 170 GR",
        precio: "6.00",
        stock: 69,
        idCategoria: 1,
        idMarca: 1,
        idImagen: 2,
        Categorium: {
            idCategoria: 1,
            nombre: "ABARROTES"
        },
        Marca: {
            idMarca: 1,
            nombre: "PRIMOR"
        },
        Imagen: {
            idImagen: 1,
            nombre: "primor_ta1.jpg",
            extension: "jpg",
            tamano: "182.66",
            nombreTamano: "kb"
        }
    },
    {
        idProducto: 2,
        nombre: "TROZOS DE ATÚN EN ACEITE VEGETAL",
        descripcion: "LATA 170 GR",
        precio: "6.10",
        stock: 10,
        idCategoria: 1,
        idMarca: 3,
        idImagen: 1,
        Categorium: {
            idCategoria: 1,
            nombre: "ABARROTES"
        },
        Marca: {
            idMarca: 3,
            nombre: "CAMPOMAR"
        },
        Imagen: {
            idImagen: 2,
            nombre: "campomar_ta1.jpg",
            extension: "jpg",
            tamano: "18.79",
            nombreTamano: "kb"
        }
    }
]

function filteredProductsMock(categoria){
    return productosMock.filter((producto) => producto.Categorium.nombre.includes(categoria))
}

class ProductosServiceMock {
    async getProducts() {
        return Promise.resolve(productosMock)
    }

    async createProduct() {
        return Promise.resolve(productosMock[0])
    }
}

module.exports = {
    productosMock,
    filteredProductsMock,
    ProductosServiceMock
}