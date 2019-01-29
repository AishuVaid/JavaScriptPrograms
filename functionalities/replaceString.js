/**************************************************************************
*Execution : Default node  cmd>node replaceString.js
*Purpose    : To replace String template
* @description :
*
*
*@file : replaceString.js
*@overview : take username as input.Ensure Username has minimum 3 characters.
@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
****************************************************************************

/*********************************************************************
*/
var Read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var Name=require("readline-sync");
/**
 * For User Input
 */
var username=Name.question("enter the name");
/**
 * Enter the name that is to be replaced.
 */
Read.replaceString(username);
/**
 *  accessing replaceString functionality from utility.js
 */
