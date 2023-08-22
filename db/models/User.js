const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gym: {
      type: Schema.Types.ObjectId, //fa rif all'id creato da mongoose nel db
      ref: "Gym",
      required: false,
      default: null, //valore di base se quando crea utente non metti i param (mette null in automatico)
    },
  },
  { strict: true, timestamps: true, versionKey: false }
);

const User = model("User", UserSchema);

module.exports = User;
