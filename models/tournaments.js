const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    tname: String,
    tdate: String,
    teams: String,
    location: String,
    created: { type: Date, default: Date.now }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Tournament', tournamentSchema);