var express = require('express');
var UserKes = require('../models').UserKes;

var router = express.Router();

router.get('/', function(req, res, next) {
  UserKes.findAll()
    .then((UserKes) => {
      res.render('sequelizeKes', { UserKes });
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
