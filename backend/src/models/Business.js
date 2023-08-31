const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    yearEst: {
      type: Number,
      maxLength: 4,
      minLength: 4,
      required: true,
    },
    profitLossSummary: {
      type: Number,
      required: true,
    },
    ownerData: {
      name: {
        type: String,
        required: true,
        max: 50,
      },
      email: {
        type: String,
        required: true,
        max: 50,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Business", businessSchema);
