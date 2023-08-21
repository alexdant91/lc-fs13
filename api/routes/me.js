const express = require("express");
const { authUser } = require("../../middleware/auth");

const app = express.Router();

/**
 * @path /api/me
 */
app.get("/", authUser, (req, res) => {
  return res.status(200).json(req.user);
});

module.exports = app;
