var express = require('express');
var UserKes = require('../models').UserKes;

var router = express.Router();

router.get('/', function(req, res, next) {
  UserKes.findAll()
    .then((UserKes) => {
      res.json(UserKes);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function(req, res, next) {
  UserKes.create({
    name: req.body.name,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
