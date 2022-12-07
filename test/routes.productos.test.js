const assert = require('assert');
const proxyquire = require('proxyquire');

const { productosMock, ProductosServiceMock } = require('../utils/mocks/productos')
const testServer = require('../utils/testServer')

describe('routes - productos', function() {
    const route = proxyquire('../routes/productos', {
        '../services/producto.service': ProductosServiceMock
    })

    const request = testServer(route)

    describe('GET /productos', function() {
        it('should respond with status 200', function(done) {
            request.get('/api/productos').expect(200, done)
        })

        it('should respond with the list of products', function(done){
            request.get('/api/productos').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productosMock,
                    message: 'productos listados'
                })
            })

            done();
        })
    })
})