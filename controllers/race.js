var Race = require('../models/Race');
var uid = require('rand-token').uid;

exports.createRace = function (req, res) {
  var race = new Race({
    email: req.body.email,
    start: {
      time: req.body.startTime,
      location: req.body.startLocation
    },
    activation_token: uid(16)
  });

  race.save(function (err) {
    if (err) return res.status(500);
    return res.status(200);
  });
};
