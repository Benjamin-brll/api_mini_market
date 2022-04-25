const express = require("express");

const RepartidorService = require("../services/repartidor.service");

const repartidoresApi = (app) => {
  const router = express.Router();

  app.use("/api/repartidores", router);

  const repartidorService = new RepartidorService();

  router.get("/", async (req, res, next) => {
    try {
      const repartidores = await repartidorService.findAll();

      res.status(200).json({
        data: repartidores,
        message: "Repartidores listados",
      });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "Repartidores no listados",
      });
    }
  });
};

module.exports = repartidoresApi;
