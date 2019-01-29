/*********************************************************************
*
*Execution : Default node cmd>node FlipACoin.js
*Purpose : flip coin and print percentage of heads and tails.
*@description :
*
*
*
*@file : FlipACoin.js
*@overview : the number of times to flip coin. Ensure it is positive integer.
Use Random function to get value between 0 and 1. If <0.5 then tails or heads.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
***************************************************************************
*/
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require("readline-sync");
/**
 * taking the number as input for which we need harmonic number.
 */
var result=name.question("Enter flip result");
/**
 * taking the number of flips as input
 */
read.flipACoin(result);
/**
 * accessing FlipACoin functionality from utility.js
 */