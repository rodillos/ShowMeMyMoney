var express = require('express');
var router = express.Router();
const user = require('../data/user-data.json');

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send(user);
});

module.exports = router;
