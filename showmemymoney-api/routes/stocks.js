var express = require('express');
var router = express.Router();
const stocks = require('../data/stocks-data.json');

/* GET stock listing. */
router.get('/', function(req, res, next) {
  res.send(stocks);
});

module.exports = router;
