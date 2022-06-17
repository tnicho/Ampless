const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const setupSchema = new Schema({
    name: String,
    overdrive: {
      type: Number,
      min: 0,
      max: 10,
    },
    overdriveOn: {type: Boolean,},
    delay: {
      type: Number,
      min: 0,
      max: 10,
    },
    delayOn: {type: Boolean,},
    gainBoost: {
      type: Number,
      min: 0,
      max: 10,
    },
    gainBoostOn: {type: Boolean,},
    reverbOn: {type: Boolean,},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}

  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Setup", setupSchema);