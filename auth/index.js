const express = require("express");
const Joi = require("joi");
const { User } = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express.Router();

/**
 * @poth /auth/token
 */
app.post("/token", async (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  try {
    const data = await schema.validateAsync(req.body);

    const user = await User.findOne({ email: data.email }, null, {
      lean: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = bcrypt.compareSync(data.password, user.password);

    if (!isValidPassword) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SERVER_SECRET_KEY,
      { expiresIn: "1day" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error.message);
  }
});

module.exports = app;
