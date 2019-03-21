/*
    Transaction functionality
    Stateful
*/


const transactionMap = new Map();

module.exports = {

    getTransactionForUser: function (userName) {

        return transactionMap.get(userName);

    },

    updateTransactionForUser: function (userName, originalAmount, updateAmount, operation) {

        const transactionMessage = this.getTransactionMessage(originalAmount, updateAmount, operation);

        let transactions = transactionMap.get(userName);

        if (!transactions) {
            transactionMap.set(userName, new Array());
            transactions = transactionMap.get(userName);
        }

        transactions.push(transactionMessage);
        transactionMap.set(userName, transactions);

    },

    getTransactionMessage: function (originalAmount, updateAmount, operation) {

        message1 = 'Amount before transaction - ' + originalAmount;
        message2 = '    | Amount after transaction - ' + updateAmount;
        date = new Date();
        message3 = '    | Transaction carried at ' + date.toLocaleString("en-US");
        message4 = '  |'+operation;

        transactionMessage = message1 + message2 + message3 + message4;

        return transactionMessage;

    }

};

