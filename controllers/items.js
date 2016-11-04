var express = require('express');
var router = express.Router();

// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Items Controller :: Time: ', Date.now());
  next();
});


// define the root items route
router.get('/', function(req, res) {
  res.send('Items home page');
});

// define the specific item route
// Note: 'slug' is how we refer to document titles in url's
router.get('/:itemname', function(req, res) {
  res.send('This is item: ' + req.params.itemname);
});

module.exports = router;