/*
    Withdraw functionality
    Stateless
*/

const userdata = require('./usersdata');
const transaction = require('./trasaction');

module.exports = {


    withDrawAmount: function (userName, amount) {

        const userBalance = userdata.getUserBalance(userName);

        let updatedBalance = userBalance - Number(amount);

        if (userBalance === 0 || updatedBalance < 0) {

            updatedBalance = 0;

        }

        const balanceAfterWithdrawal = userdata.updateBalance(userName, updatedBalance);

        transaction.updateTransactionForUser(userName, userBalance, balanceAfterWithdrawal, 'withdraw');

    }

};