var Race = require('../models/Race');

exports.createRace = function (req, res) {
  console.log(req.body);
  var race = new Race({
    email: req.body.email,
    start: {
      time: req.body.startTime,
      location: req.body.startLocation
    }
  });
  race.save(function (err) {
    if (err) return res.status(500);
    console.log(race);
    return res.send(race._id);
  });
};
