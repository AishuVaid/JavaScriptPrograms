/*********************************************************
 *  * * * Execution : default node : cmd> node NumPalindrome.js
 * 
 * Purpose : in order to obtain the palindrome.
 * 
 * @description
 * @file : NumPalindrome.js
 * 
 * @overview : find the prime numbers that are Anagram and Palindrome.


   * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 */
var Access=require('../Utility/Util');
var read=require('readline-sync');
var result=Access.isAnagramPalindrome();
console.log(result);