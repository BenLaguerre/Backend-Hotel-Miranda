var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('VERSION 2 : did it change? we wil SEE');
});

module.exports = router;
