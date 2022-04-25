const express = require("express");

const UserService = require("../services/user.service");

const usersApi = (app) => {
  const router = express.Router();

  app.use("/api/users", router);

  const userService = new UserService();

  router.get("/", async (req, res, next) => {
    try {
      const users = await userService.findAll();

      res.status(200).json({
        data: users,
        message: "Usuarios listados",
      });
    } catch (error) {
      res.status(500).json({
        data: error,
        message: "Usuarios no listados",
      });
    }
  });
};

module.exports = usersApi;
