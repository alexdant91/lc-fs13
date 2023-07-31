const express = require("express");
const app = express.Router();

const Joi = require("joi");
const bcrypt = require("bcryptjs");
const { User } = require("../../db");

/**
 * @path /api/users
 */
app.get("/", async (_, res) => {
    try {
        const users = await User.find({}, "-password -__v", { lean: true });

        return res.status(200).json(users);
    } catch(error) {
        console.log(error);
        return res.status(500).json(error.message)
    }
});

/**
 * @path /api/users/:id
 */
app.get("/:id", async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findOne({ _id }, "-password -__v", { lean: true });

        return res.status(200).json(user);
    } catch(error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
});

/**
 * @path /api/users
 */
app.post("/", async (req, res) => {
    const schema = Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        data.password = bcrypt.hashSync(data.password, 12);

        const user = await User.create(data);

        delete user._doc.password;

        return res.status(201).json({ user: user._doc });
    } catch(error) {
        console.log(error);
        return res.status(500).json(error.message)
    }
});

module.exports = app;