const mongoose = require("mongoose");

const userReservedSchema = mongoose.Schema(
  {
    userid: {
      type: String,
    },
    contact: {
      type: String,
    },
    busName: {
      type: String,
    },
    busCategory: {
      type: String,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    busId: {
      type: String,
    },
    payment: {
      type: String,
    },
    boardingTime: {
      type: String,
    },
    boardingName: {
      type: String,
    },
    droppingTime: {
      type: String,
    },
    droppingName: {
      type: String,
    },
    totalSeats: {
      type: String,
    },
    reservedDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserReserveds = mongoose.model("userReserved", userReservedSchema);

module.exports = UserReserveds;
