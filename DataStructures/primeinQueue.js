/************************************************************
 * Execution    :   1. cmd> node primeAddAnagram.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon primeAddAnagram.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To display all prime and angram numbers within 1000 with interval as 100.
 * 
 * @description
 * 
 * @file        :   primeAddAnagram.js
 * @overview    :   Find the prime numbers within the range and display.
 * @author      :   Aishwarya RM <aishu.vaid@gmail.com>
 * @version     :   1.0
 * @since       :   04-02-2019
 * 
 * **********************************************************/
var access = require('../Utility/DSUtility');
var M = require('../Utility/Util');
var readline = require('readline-sync');
var arr = [];
var Q = new access.LinkedListQueue;
for (let i = 0; i < 1000; i++) {
    if (M.isPrime(i))
        arr.push(i)
}
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (M.CheckAnagram(arr[i], arr[j])) {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
console.log(" Anagrams are :" + Q.printList());