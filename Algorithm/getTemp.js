/**************************************************************************
 * * Execution : default node : cmd> node YourNumber.js
 * 
 * Purpose : used for temperature conversion.
 * 
 * @description
 * @file : Temp.js
 * @overview : To the Util Class add temperaturConversion static function, 
 * given the temperature in fahrenheit as input outputs the temperature in Celsius
 *  or viceversa using the formula

 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * *****************************************************************************
 * 
 */
var Access=require('../Utility/Util');
var read=require('readline-sync');
Access.TemperatureConversion(read);