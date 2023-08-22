const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const GymSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { strict: true, timestamps: true, versionKey: false } //
);

const Gym = model("Gym", GymSchema);

module.exports = Gym;
