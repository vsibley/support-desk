const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:'User'
    },
    platform: {
      type: String,
      required: [true, "Please select what social media platform you will be collbarating on"],
      enum: ['Instagram', 'TikTok', 'BeReel', 'Facebook']
    },
    description: {
      type: String,
      required: [true, "Please add a description of the collab details"],
    },
    collab: {
      type: String,
      required: true,
      enum: ['Paid Partnership', 'Product Partnership', 'Unpaid', 'Brand Ambassador'],
      default: false,
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'in-progress', 'closed'],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
