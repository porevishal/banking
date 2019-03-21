var express = require('express');
var userBalance = require('../business/usersdata');
var router = express.Router();

/* GET home page. */

router.get('/:userId', function (req, res, next) {

    const userName = req.params.userId;
    const userB = userBalance.getUserBalance(userName);
    res.render('balance', { balance: userB });

});

module.exports = router;