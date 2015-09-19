var mongoose = require('mongoose');

var raceSchema = new mongoose.Schema({
  email: { type: String, lowercase: true },
  start: {
    time: {type: Date},
    location: {type: String}
  },
  end: {
    time: {type: Date},
    location: {type: String}
  },
  activationToken: {type: Schema.Types.ObjectId, turnOn: true}
});


module.exports = mongoose.model('Race', raceSchema);
