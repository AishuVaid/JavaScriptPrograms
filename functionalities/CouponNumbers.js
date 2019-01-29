/*****************************************************************
*Execution : Default node cmd>node CouponNumber.js
*Purpose : Generate N distinct coupon numbers.
*@description :
*
*
*
*@ file : CouponNumber.js
*@overview : Given N distinct coupon numbers.This program stimulates a random process.
We repeatedly choose a random number and check whether it's a new one.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
****************************************************************
*/
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require('readline-sync');
/**
 * For User Input
 */
var input=name.question("enter the input");
/**
 * taking the input
 */
read.getCoupon(input);
/**
 * accessing the coupon number functionality from utility.js
 */