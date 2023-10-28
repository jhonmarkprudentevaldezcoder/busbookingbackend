const mongoose = require("mongoose");

const busInfoSchema = mongoose.Schema(
  {
    busno: {
      type: String,
    },
    busname: {
      type: String,
    },
    busdriver: {
      type: String,
    },
    busconductor: {
      type: String,
    },
    plateno: {
      type: String,
    },

    seatNo: {
      default: "32",
      type: String,
    },
    plateno: {
      type: String,
    },

    boardingTime: {
      type: String,
    },

    droppingTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BusesInfo = mongoose.model("busesinfo", busInfoSchema);

module.exports = BusesInfo;
