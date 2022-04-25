const express = require("express");

const TurnoService = require("../services/turno.service");

const turnosApi = (app) => {
  const router = express.Router();

  app.use("/api/turnos", router);

  const turnoService = new TurnoService();

  router.get("/", async (req, res, next) => {
    try {
      const turnos = await turnoService.findAll();

      res.status(200).json({
        data: turnos,
        message: "Turnos listados",
      });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "Turnos no listados",
      });
    }
  });
};

module.exports = turnosApi;
