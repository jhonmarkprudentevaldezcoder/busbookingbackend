const mongoose = require("mongoose");

const checkUpSchema = mongoose.Schema(
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

const Checkup = mongoose.model("Checkups", checkUpSchema);

module.exports = Checkup;
