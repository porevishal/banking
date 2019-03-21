/*
    Deposit functionality
    Stateless
*/

const userdata = require('./usersdata');
const transaction = require('./trasaction');

module.exports = {


    depositAmount: function (userName, amount) {

        let userBalance = userdata.getUserBalance(userName);

        const updatedBalance = userBalance + Number(amount);

        const balanceAfterDeposit = userdata.updateBalance(userName, updatedBalance);

        transaction.updateTransactionForUser(userName, userBalance, balanceAfterDeposit, 'deposit');

    }

};