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

/**
 * POST /update
 * Update race with end time, location.
 */
exports.updateRace = function (req, res) {
    Race.findById(req.body.id, function(err, race) {
        console.log(race);
        race.end.time = req.body.endTime;
        race.end.location = req.body.endLocation;

        race.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(500);
            }

            console.log(race);
            return res.send(race);
        });
    });
};

/**
 * GET /race
 * Return all races.
 */
exports.getRaces = function (req, res) {
    console.log(req.query.id);
    if (req.query.id) {
        Race.findById(req.query.id, function(err, race) {
            console.log(race);
            if (err) {
                console.log(err);
                return res.status(500);
            }

            console.log(race);
            return res.send(race);
        });
    } else {
        Race.find({}, function(err, races) {
            if (err) return res.status(500);
            return res.send(races);
        });
    }
};