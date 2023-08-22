const express = require("express");

const app = express.Router();

const Joi = require("joi");
const { Gym } = require("../../db");

app.post("/", async (req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  try {
    const data = await schema.validateAsync(req.body);
    const gym = (await Gym.create(data)).toObject();
    return res.status(201).json(gym);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
});

module.exports = app;
