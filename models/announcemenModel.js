const mongoose = require("mongoose");

const announcementSchema = mongoose.Schema(
  {
    rfid: {
      type: String,
      required: [true, "Please enter rfid"],
    },
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
    },
  },
  {
    timestamps: true,
  }
);

const Announcements = mongoose.model("Announcements", announcementSchema);

module.exports = Announcements;
