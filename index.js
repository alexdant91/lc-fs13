require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");

const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { SERVER_PORT } = process.env;

/**
 * @path /api
 */
app.use("/api", require("./api"));

db.connect();

app.listen(SERVER_PORT, () => {
    console.log(`Server up and running on port ${SERVER_PORT}`);
});