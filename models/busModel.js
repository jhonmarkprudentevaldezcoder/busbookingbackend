const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
    drivername: {
      type: String,
    },
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
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
    seatNo: {
      default: "32",
      type: String,
    },
    a1: {
      default: "available",
      type: String,
    },
    a2: {
      default: "available",
      type: String,
    },
    a3: {
      default: "available",
      type: String,
    },
    a4: {
      default: "available",
      type: String,
    },
    a5: {
      default: "available",
      type: String,
    },
    a6: {
      default: "available",
      type: String,
    },
    a7: {
      default: "available",
      type: String,
    },
    a8: {
      default: "available",
      type: String,
    },

    b1: {
      default: "available",
      type: String,
    },
    b2: {
      default: "available",
      type: String,
    },
    b3: {
      default: "available",
      type: String,
    },
    b4: {
      default: "available",
      type: String,
    },
    b5: {
      default: "available",
      type: String,
    },
    b6: {
      default: "available",
      type: String,
    },
    b7: {
      default: "available",
      type: String,
    },
    b8: {
      default: "available",
      type: String,
    },

    c1: {
      default: "available",
      type: String,
    },
    c2: {
      default: "available",
      type: String,
    },
    c3: {
      default: "available",
      type: String,
    },
    c4: {
      default: "available",
      type: String,
    },
    c5: {
      default: "available",
      type: String,
    },
    c6: {
      default: "available",
      type: String,
    },
    c7: {
      default: "available",
      type: String,
    },
    c8: {
      default: "available",
      type: String,
    },

    d1: {
      default: "available",
      type: String,
    },
    d2: {
      default: "available",
      type: String,
    },
    d3: {
      default: "available",
      type: String,
    },
    d4: {
      default: "available",
      type: String,
    },
    d5: {
      default: "available",
      type: String,
    },
    d6: {
      default: "available",
      type: String,
    },
    d7: {
      default: "available",
      type: String,
    },
    d8: {
      default: "available",
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Buses = mongoose.model("buses", busSchema);

module.exports = Buses;
