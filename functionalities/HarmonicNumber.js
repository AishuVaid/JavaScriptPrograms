/**********************************************************************
*
**Execution :Execution : Default node cmd>node HarmonicNumber.js
*Purpose : Print the Nth harmonic number.
*@description :
*
*
*
*@ file : HarmonicNumber.js
*@overview : Prints the Nth harmonicnumber and ensure N!=0.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
*@version :1.0
*@since :28-01-2019
*
/***********************************************************
*/
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require("readline-sync");
/**
 * For User Input
 */
var number=name.question("Enter the number");
/**
 * taking the number as input for which we need harmonic number.
 */
read.findHarmonicNumber(number);
/**
 * accessing harmonic number functionality from utility.js
 */