const Date = require("../models/date");

exports.createDate = (req, res, next) => {
    console.log(req.body);
  const date = new Date({
    location: req.body.location,
    description: req.body.description,
    userIdOne: req.body.userIdOne,
    userIdTwo: req.body.userIdTwo
  });
  date
    .save()
    .then(result => {
      res.status(201).json({
        message: "Date added successfully",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Creating a date failed!"
      });
    });
};

exports.getDates = (req, res, next) => {
    Date.find()
      .then(dates => {
        if (dates) {
          res.status(200).json(dates);
        } else {
          res.status(404).json({ message: "Dates not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Fetching dates failed!"
        });
      });
  };

  exports.deleteDate = (req, res, next) => {
      console.log("in delete");
    Date.findByIdAndRemove(req.params.id)
      .then(dates => {
        if (dates) {
          res.status(200).json(dates);
        } else {
          res.status(404).json({ message: "Date could not be deleted!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Date could not be deleted!"
        });
      });
  };
