const mongoose = require("mongoose");

const busIncomeSchema = mongoose.Schema(
  {
    income: {
      type: Number,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

const BusesIncome = mongoose.model("income", busIncomeSchema);

module.exports = BusesIncome;
