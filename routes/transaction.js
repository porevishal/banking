var express = require('express');
var router = express.Router();
var withdraw = require('../business/withdraw');
var deposit = require('../business/deposit');
var transaction = require('../business/trasaction');

/* GET home page. */

router.get('/:userId/deposit/:amount', function (req, res, next) {

    const userName = req.params.userId;
    const amount = req.params.amount;

    deposit.depositAmount(userName, amount);

    const trnsactionHistory = transaction.getTransactionForUser(userName);

    res.render('transaction', { transaction: trnsactionHistory, userName: userName });

});

router.get('/:userId/withdraw/:amount', function (req, res, next) {

    const userName = req.params.userId;
    const amount = req.params.amount;

    withdraw.withDrawAmount(userName, amount);

    const trnsactionHistory = transaction.getTransactionForUser(userName);

    console.log('---'+userName);

    res.render('transaction', { transaction: trnsactionHistory, userName: userName });

});

module.exports = router;