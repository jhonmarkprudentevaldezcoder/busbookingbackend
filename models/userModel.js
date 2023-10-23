const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    rfid: {
      type: String,
    },
    firstname: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
    },
    type: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
