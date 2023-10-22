const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
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
    a1: {
      type: String,
    },
    a2: {
      type: String,
    },
    a3: {
      type: String,
    },
    a4: {
      type: String,
    },
    a5: {
      type: String,
    },
    a6: {
      type: String,
    },
    a7: {
      type: String,
    },
    a8: {
      type: String,
    },

    b1: {
      type: String,
    },
    b2: {
      type: String,
    },
    b3: {
      type: String,
    },
    b4: {
      type: String,
    },
    b5: {
      type: String,
    },
    b6: {
      type: String,
    },
    b7: {
      type: String,
    },
    b8: {
      type: String,
    },

    c1: {
      type: String,
    },
    c2: {
      type: String,
    },
    c3: {
      type: String,
    },
    c4: {
      type: String,
    },
    c5: {
      type: String,
    },
    c6: {
      type: String,
    },
    c7: {
      type: String,
    },
    c8: {
      type: String,
    },

    d1: {
      type: String,
    },
    d2: {
      type: String,
    },
    d3: {
      type: String,
    },
    d4: {
      type: String,
    },
    d5: {
      type: String,
    },
    d6: {
      type: String,
    },
    d7: {
      type: String,
    },
    d8: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Buses = mongoose.model("buses", busSchema);

module.exports = Buses;
