/***********************************************************
 *
 * Execution      :Default node    cmd>node palindromeChecker.js
 * Purpose        :To check weather given string is palindrome or not.
 *@description 
 * 
 *
 *@file          :palindromeChecker.js
 *@overview      :palindromeChecker A palindrome is a string that reads 
 the same forward and backward,it should appear same then the 
 string is palindrome.
 *@version       :1.0
 *@since         :02/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/DSUtility');
var M = require('../Utility/Util');
var read = require('readline-sync');
function Dequeue() {
    var L = new access.Dequeue;
    var flag = false;
    /**
     * Validating the input it accepts only string not number.
     */
    do {
        var str = read.question("Enter the string to check palindrome :")
        if (!isNaN(str)) {
            console.log("Not a valid entry");
        }
        else {
            flag = true;
        }
    } while (!flag)
    str = str.toLocaleLowerCase();
    var arr = str.split("")
    /**
     * Loop the array till array length and add it to front.
     */
    for (let i = 0; i < arr.length; i++) {
        L.addFront(arr[i])
    }
    var string1 = "";
    /**
    * Loop the array till array length and removeFront
    * and concat it to string.
    */
    for (let i = 0; i < arr.length; i++) {
        string1 = string1 + "" + L.removeFront();
    }
    console.log(string1);
    var string2 = "";
    /**
    * Loop the array till array length and add it to front.
    */
    for (let i = 0; i < arr.length; i++) {
        L.addFront(arr[i])
    }
    /**
     * Loop the array till array length and removeRear
     * and concat it to string.
     */
    for (let i = 0; i < arr.length; i++) {
        string2 = string2 + "" + L.removeRear();
    }
    console.log(string2);
    /**
     * Condition to check if the both the strings are equal are not.
     */
    if (string1 == string2) {
        console.log(" Entered string is palindrome ");
    }
    else {
        console.log("Entered string is not a palindrome ");

    }
} Dequeue();
