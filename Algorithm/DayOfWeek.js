/*****************************************************************
 * Execution : default node : cmd> node DayOfWeek.js
 * 
 * PruPose : to calculate monthly payment.
 * 
 * @description 
 * @file : DayOfWeek.js
 * @overview : calculate monthlyPayment that reads in three command-line arguments P, Y, and R
 *  and calculates the monthly payments you would have to make over Y years to pay off a 
 * P principal loan amount at R per cent interest compounded monthly.
 *  
 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * 
 * ***************************************************************
 *  */var Access=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var read=require('readline-sync');
/**
 * For User Input
 */
var day=Number(process.argv[2]);
var month=Number(process.argv[3]);
var year=Number(process.argv[4]);
var result=Access.FindDay(day,month,year);
/**
 * accessing day of week functionality from utility.js
 */
console.log("The result is "+result);
