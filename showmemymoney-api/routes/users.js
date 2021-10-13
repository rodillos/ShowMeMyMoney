var express = require('express');
var router = express.Router();
const user = require('../data/user-data.json');
const fs = require('fs');


/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send(user);
});

 router.put('/buy', (req, res) => {
  updateStock(req.body.stockName, req.body.stockSellAmount, 'add');
 });

module.exports = router;
