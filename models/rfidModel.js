const mongoose = require("mongoose");

const rfidSchema = mongoose.Schema(
  {
    rfid: {
      type: String,
      required: [true, "Please enter rfid"],
    },
  },
  {
    timestamps: true,
  }
);

const Rfids = mongoose.model("Rfids", rfidSchema);

module.exports = Rfids;
