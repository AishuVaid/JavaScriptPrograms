/********************************************************************
 * Execution : default node :cmd> node palindromeChecker.js
 *  @file : palindromeChecker.js
 * 1.palindrome Checker.
 * @purpose :  True or False to Show if the String is Palindrome or not.
 * @overview :  A palindrome is a string that reads the same forward and
 *  backward, for example, radar, toot, and madam.
 *  We would like to construct an algorithm to input a string of
 *  characters and check whether it is a palindrome.
 * @author :Aishwarya RM <aishu.vaid@gmail.com>
 * @version :1.0
 * @since : 30-01-2019.

 ******************************************************************/
var access = require('../Utility/DSUtility');
var input = require('../Utility/Util');
var read = require('readline-sync');
function check()
{
var d = new access.Dequeue;
var word = read.question("Enter the word :");
var result=d.palindromeChecker(word);
if(result==false)
{
    console.log("String is not a palindrome");
}
else
{
    console.log("String is a palindrome");
}
}
check();
