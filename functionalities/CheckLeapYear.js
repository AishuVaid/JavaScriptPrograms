/*************************************************************
*
*Execution :Execution : Default node cmd>node CheckLeapYear.js
*Purpose : Ensure the year is a leap year.
*@description :
*
*
*
*@ file : LeapYear.js
*@overview : to find out whether it is a leap year or not.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
************************************************************************

/*******************************************************************
*/
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require("readline-sync");
/**
 * For User Input
 */
var year=name.question("enter the year to be checked");
/**
 * Enter the year to be checked
 */
read.checkLeapYear(year);
/**
 *  accessing CheckLeapYear functionality from utility.js
 */