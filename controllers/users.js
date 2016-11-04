var express = require('express');
var router = express.Router();
var models = require('../models');

// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Users Controller :: Time: ', Date.now());
  next();
});

// define the root users route
router.get('/', function(req, res) {
  models.Users.findAll({})
    .then(function (users) {
      if (users != null) {
        res.send('Users List: <br /><pre>' + JSON.stringify(authors, null, 4) + '</pre>');
      } else {
        res.send('No Users found');
      }
    });
    res.send('Get works!');
});

// define the specific user route
router.get('/:id', function(req, res) {
  models.Users.findById(req.params.id)
    .then(function(user) {
      if (user != null) {
        res.send('Found User <br /><pre>' + JSON.stringify(user, null, 4) + '</pre>');
      } else {
        res.send('Did not find User');
      }
    });
});

module.exports = router;