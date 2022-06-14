const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setupSchema = new Schema({
    name: String,
    overdrive: {
      type: Number,
      min: 0,
      max: 10,
    },
    delay: {
      type: Number,
      min: 0,
      max: 10,
    },

  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Setup", setupSchema);