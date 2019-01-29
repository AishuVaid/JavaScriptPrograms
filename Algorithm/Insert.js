/***********************************************
 * * * Execution : default node : cmd> node YourNumber.js
 * 
 * Purpose :use insertion sort to sort elements.
 * 
 * @description
 * @file : Insert.js
 * @overview :  Reads in strings from standard input and prints them in sorted order.
     Uses insertion sort.Use Insertion Sort to sort the words in the String array.
   * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * *****************************************************************************
 * 
 *  */
var read=require('../Utility/Util');
var input=require('readline-sync');
var arrayLength=input.questionInt("Enter the array length");
var array=[];
for(let i=0;i<arrayLength;i++)
{
    var num=input.questionInt("Enter the value");
    array.push(num);
}
read.InsertionSort(array);
