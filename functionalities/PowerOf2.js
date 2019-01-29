/**********************************************************************
 * * Execution : default node : cmd> node DayOfWeek.js
 * 
 * PruPose : To calculate power of 2.
 * 
 * @description 
 * @file : PowerOf2.js
 * @overview :  This program takes a command-line argument N and prints a
 *  table of the powers of 2 that are less than or equal to 2^N.
*
****************************************************************
 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * 
 */
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require('readline-sync');
/**
 * For User Input
 */
var power=name.question("enter the number");
/**
 * accessing power of 2 functionality from utility.js
 */
read.getPowerOf2(power);
