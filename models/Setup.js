const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setupSchema = new Schema({
    name: String,
    overDrive: Number,
    delay: Number,

  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Setup", setupSchema);