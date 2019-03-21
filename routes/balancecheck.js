var express = require('express');
var router = express.Router();
var userdata = require('../business/usersdata');

/* GET home page. */

router.get('/:userId', function (req, res, next) {

    let balance = userdata.getUserBalance(req.params.userId);

    res.render('balancecheck', { balance: balance, userName : req.params.userId });


});


module.exports = router;