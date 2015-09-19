var Race = require('../models/Race');

exports.createRace = function (req, res) {
  var race = new Race({
    email: req.body.email,
    start: {
      time: req.body.startTime,
      location: req.body.startLocation
    }
  });
  race.save(function (err) {
    if (err) return res.status(500);
    return res.send(race.activationToken); 
  });
};
