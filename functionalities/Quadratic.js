/********************************************************************
 * * * Execution : default node : cmd> node DayOfWeek.js
 * 
 * Purpose :Quadratic.java to find the roots of the equation a*x*x + b*x + c. 
 * Since the equation is x*x, hence there are 2 roots.
 *  The 2 roots of the equation can be found using a formula.
 * 
 * @description 
 * @file : PowerOf2.js
 * @overview :  Quadratic.java to find the roots of the equation a*x*x + b*x + c. 
 * Since the equation is x*x, hence there are 2 roots. 
 * The 2 roots of the equation can be found using a formula.
 * delta = b*b - 4*a*c
*Root 1 of x = (-b + sqrt(delta))/(2*a)
*Root 2 of x = (-b - sqrt(delta))/(2*a)
*Take a, b and c as input values to find the roots of x.
*/
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var input=require('readline-sync');
/**
 * For User Input
 */
var a=input.question("Enter the value of a");
/**
 * accessing value of a
 */
var b=input.question("Enter the value of b");
/**
 * accessing value of b
 */
var c=input.question("Enter the value of c");
/**
 * accessing value of c
 */
read.getEquation(a,b,c);
/**
 * accessing the quadratic functionality from utility.js 
 */