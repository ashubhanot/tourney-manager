const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tournamentSchema = new Schema({
    name: String,
    date: String,
    teams: String,
    created: { type: Date, default: Date.now }
  }, {
    timestamps: true
  });


const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    tournaments: [tournamentSchema]
    }, {
        timestamps: true,
        toJSON: {
          transform: function(doc, ret) {
            delete ret.password;
            return ret;
          }
        
    }
});

module.exports = mongoose.model('User', userSchema);