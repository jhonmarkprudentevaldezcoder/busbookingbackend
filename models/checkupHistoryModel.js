const mongoose = require("mongoose");

const checkUpHistorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    physician: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const CheckupsHistory = mongoose.model("CheckupsHistory", checkUpHistorySchema);

module.exports = CheckupsHistory;
