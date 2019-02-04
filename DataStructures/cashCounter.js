/*******************Simulate Banking Cash Counter******************
 * 4.Simulate Banking Cash Counter.
 * Execution : default node : cmd>node cashCounter.js
 * @purpose : people to either deposit or withdraw money and maintain the cash balance.
 *
 * @description
 * @file : cashCounter.js
 * @overview : Create a Program which creates Banking Cash Counter where people
 *  come in to deposit Cash and withdraw Cash. Have an input panel to add people 
 * to Queue to either deposit or withdraw money and dequeue the people.
 *  Maintain the Cash Balance.

 * @param :Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
 *********************************************************************
 */


var access = require('../Utility/DSUtility')
var M = require('../Utility/Util');
var read = require('readline-sync');
function Queue() {
    var L = new access.Queue;
    var bankamnt = 4000;
    var set = [];
    var flag = true;
    var count = 0;
    var valid = false;
    do {
        var size = read.question("Enter the total number of people to be in queue :")
        if (isNaN(size)) {
            console.log("Not a valid entry");
        }
        else {
            valid = true;
        }
    } while (!valid)
    if (size > 0) {
        /**
         * Loop the number of size of people to deposit and withdraw amount.
         */
        for (let i = 1; i < size; i++) {
            var input = read.question("Enter 1 deposit amount :\nEnter 2 to withdraw amount :")
            if (input == 1) {
                var amount = read.questionFloat("Enter the total amount to deposit :")
                var set = L.enqueue(Number(amount));
                flag = true;
            }
            else if (input == 2) {
                var amount = read.questionInt("Enter the total amount to be withdraw :")
                var get = L.enqueue(Number(-amount))
                flag = true;
            }
            else {
                console.log("Make sure that you have entered correct key ");
                flag = false;
                return;
            }
        }
    }
    else {
        console.log(" Invalid input ");
        return;
    }
    /**
     * Condition to check if flag is true enter the loop.
     */
    if (flag) {
        var add = 0
        /**
         * Loop number of size and dequeue the people.
         */
        for (let i = 1; i < size; i++) {
            add = add + L.deEqueue();
        }
        console.log(add);
        var totalamount = bankamnt + add;
        console.log("Total amount left in bank is :" + totalamount);
        if (totalamount < bankamnt) {
            console.log("Minimum cash is not maintained in bank:");
        }
        else {
            console.log("Minimum cash is maintained in bank");
        }
    }
}
Queue();

