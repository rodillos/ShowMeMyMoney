var express = require('express');
var router = express.Router();
const fs = require('fs');
import updateStock from '../common/common';

router.put('/buy', (req, res) => {
  updateStock(request.stockName, request.stockSellAmount, 'add');
  res.send('got a Buy request')
 });

module.exports = router;
