const express = require("express");

const ProveedorService = require("../services/proveedor.service");

const proveedoresApi = (app) => {
  const router = express.Router();

  app.use("/api/proveedores", router);

  const proveedorService = new ProveedorService();

  router.get("/", async (req, res, next) => {
    try {
      const proveedores = await proveedorService.findAll();

      res.status(200).json({
        data: proveedores,
        message: "Proveedores listados",
      });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "Proveedores no listados",
      });
    }
  });
};

module.exports = proveedoresApi;
