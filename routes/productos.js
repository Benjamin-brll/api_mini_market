const express = require("express");

const ProductoService = require("../services/producto.service");

const productosApi = (app) => {
  const router = express.Router();

  app.use("/api/productos", router);

  const productoService = new ProductoService();

  router.get("/", async (req, res, next) => {
    try {
      const productos = await productoService.findAll();

      res.status(200).json(
        productos.map((msg) => {
          return {
            nombre: msg.nombre,
            descripcion: msg.descripcion,
            precio: msg.precio,
          };
        })
      );
      //   res.status(200).json({
      //     data: productos,
      //   });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "productos no listados",
      });
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const producto = req.body;

      const nuevoProducto = await productoService.create(producto);
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "producto no creado",
      });
    }
  });
};

module.exports = productosApi;
