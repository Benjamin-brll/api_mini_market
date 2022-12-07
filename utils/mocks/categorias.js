const categoriasMock = [
    {
        idCategoria: 1,
        nombre: "ABARROTES"
    },
    {
        idCategoria: 2,
        nombre: "LÁCTEOS Y HUEVOS"
    },
    {
        idCategoria: 3,
        nombre: "QUESOS Y FIAMBRES"
    },
    {
        idCategoria: 4,
        nombre: "FRUTAS Y VERDURAS"
    },
    {
        idCategoria: 5,
        nombre: "CARNES Y POLLOS"
    },
    {
        idCategoria: 6,
        nombre: "PESCADOS Y MARISCOS"
    },
    {
        idCategoria: 7,
        nombre: "BEBIDAS"
    },
    {
        idCategoria: 8,
        nombre: "CERVEZAS Y LICORES"
    },
    {
        idCategoria: 9,
        nombre: "HIGIENE Y LIMPIEZA"
    }
]

function filteredCategoriasMock(nombre){
    return categoriasMock.filter((categoria) => categoria.nombre.includes(nombre))
}

class CategoriasServiceMock {
    async getCategorias() {
        return Promise.resolve(categoriasMock)
    }

    async createCategoria() {
        return Promise.resolve(categoriasMock[0])
    }
}

module.exports = {
    categoriasMock,
    filteredCategoriasMock,
    CategoriasServiceMock
}