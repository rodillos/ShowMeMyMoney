var express = require('express');
var router = express.Router();
import updateStock from '../common/common';

router.put('/sell', (req, res) => {
    let request = req.body;
    updateStock(request.stockName, request.stockSellAmount, 'substract');
  res.send('got a Sell request')
 });

module.exports = router;
