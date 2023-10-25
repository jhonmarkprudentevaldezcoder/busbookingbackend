const mongoose = require("mongoose");

const busRouteSchema = mongoose.Schema(
  {
    busId: {
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
  },
  {
    timestamps: true,
  }
);

const BusRoute = mongoose.model("BusRoutes", busRouteSchema);

module.exports = BusRoute;
