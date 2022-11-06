const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "project",
    },
    text: {
      type: String,
      required: [true, "Please enter notes here"],
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
    ownerId: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
