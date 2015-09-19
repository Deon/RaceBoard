var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var raceSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  start: {
    time: {type: String},
    location: {type: String}
  },
  end: {
    time: {type: String},
    location: {type: String}
  },
  activationToken: {type: Schema.Types.ObjectId, turnOn: true}
});


module.exports = mongoose.model('Race', raceSchema);
