/*

    This holds all the users and their balances.
    Stateful
    @author - Vishal Pore

*/

let userMap = new Map();

// by default insert some users
userMap.set("Vishal", 100000);
userMap.set("TW", 200000);

module.exports = {

    getUserBalance: function (userName) {

        let user = userMap.get(userName);

        if (!user) {
            userMap.set(userName, 0);
        }

        return userMap.get(userName);

    },

    updateBalance: function (userName, balance) {

        userMap.set(userName, balance);

        return userMap.get(userName);

    },

    getAllUsers() {

        for (const entry of userMap.entries()) {
            console.log(entry);
        }

    }

};