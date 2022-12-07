const assert = require('assert');
const proxyquire = require('proxyquire');

const { categoriasMock, CategoriasServiceMock } = require('../utils/mocks/categorias')
const testServer = require('../utils/testServer')

describe('routes - categorias', function() {
    const route = proxyquire('../routes/categorias', {
        '../services/categoria.service': CategoriasServiceMock
    })

    const request = testServer(route)

    describe('GET /categorias', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/categorias').expect(200, done)
        })

        it('should respond with the list of categories', function(done){
            request.get('/api/categorias').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: categoriasMock,
                    message: 'categorias listadas'
                })
            })

            done();
        })
    })
})