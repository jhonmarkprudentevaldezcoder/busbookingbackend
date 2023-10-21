const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    rfid: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    firstname: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    email: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    password: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    username: {
      type: String,
      required: [true, "Please enter rfid"],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;
