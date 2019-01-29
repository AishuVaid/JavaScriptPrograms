/****************************************************************************
 * Execution : default node : cmd>node VendingMachine.js
 * 
 * Purpose : to calculate the square root of a number.
 * 
 * @description :
 * 
 * *@file : getSquare.js
*@overview : Write a static function sqrt  to compute the square
 root of a nonnegative number c given in the input using Newton's method:
- initialize t = c
- replace t with the average of c/t and t
- repeat until desired accuracy reached using condition 
Math.abs(t - c/t) > epsilon*t where epsilon = 1e-15;


*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*******************************************/
var Access=require('../Utility/Util');
var input=require('readline-sync');
var read=input.question("Enter the number =");
var result=Access.findRoot(read);