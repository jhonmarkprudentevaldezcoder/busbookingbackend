const mongoose = require("mongoose");

const busIncomeSchema = mongoose.Schema(
  {
    income: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BusesIncome = mongoose.model("income", busIncomeSchema);

module.exports = BusesIncome;
