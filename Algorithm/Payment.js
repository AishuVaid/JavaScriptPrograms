/************************************
 *  *Execution : default node : cmd> node Payment.js
* 
* @Purpose :
* 
* @description 
* @file : Payment.js
* @overview : Write a Util Static Function to calculate monthlyPayment that reads in 
three command-line arguments P, Y, and R and calculates the monthly payments you would 
have to make over Y years to pay off a P principal loan amount at R per cent
 interest compounded monthly. 
* @author : Aishwarya RM <aishu.vaid@gmail.com>
* @version : 1.0
* @since : 28-01-2019
* *****************************************************************************
* 
/** */
var Access=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var read=require('readline-sync');
/*
*for user input
*/
Access.monthlyPayment();
/**
 * Accessing monthly payment from utility.js
 */