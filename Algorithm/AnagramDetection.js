/*********************************************************
 *  * * * Execution : default node : cmd> node YourNumber.js
 * 
 * Purpose : check if the given two strings are anagrams or not.
 * 
 * @description
 * @file : AnagramDetection.js
 * 
 * @overview :  One string is an anagram of another if the second is simply 
 * a rearrangement of the first. For example, 'heart' and 'earth' are anagrams.

   * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 */
var Access=require('../Utility/Util');
var read=require('readline-sync')
var s1=read.question("Enter the first string");
var s2=read.question("Enter the second string");
Access.CheckAnagram(s1,s2);