/****************************************************************************
 * Execution : default node : cmd> node YourNumber.js
 * 
 * Purpose : use binary search to find the number.
 * 
 * @description
 * @file : YourNumber.js
 * @overview : takes a command-line argument N, asks you to think of a number between 0 and N-1, 
 * where N = 2^n, and always guesses the answer with n questions.
 * the Number N and then recursively ask true/false if the number is between a high and low value.
 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * *****************************************************************************
 * 
 */var Access=require('../Utility/Util');
/**
 * for accessing data from utility file
 */var read=require('readline-sync');
 /**
  * for user input
  */
var N=process.argv[2];
var result=Access.FindNumber(0,N-1,read);
console.log("Your number is="+result);