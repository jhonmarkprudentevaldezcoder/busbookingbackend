const mongoose = require("mongoose");

const scheduleSchema = mongoose.Schema(
  {
    _Id: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please enter schedule name"],
    },
    description: {
      type: String,
      required: [true, "Please enter schedule description"],
    },
    status: {
      type: String,
      required: [true, "Please enter schedule status"],
    },
    note: {
      type: String,
      required: [true, "Please enter schedule note"],
    },
    category: {
      type: String,
      required: [true, "Please enter schedule category"],
    },
  },
  {
    timestamps: true,
  }
);

const Schedules = mongoose.model("Schedules", scheduleSchema);

module.exports = Schedules;
