/*********************************************************
 *  * * * Execution : default node : cmd> node Bubble.js
 * 
 * Purpose : Sort the given list based pn bubble sort.
 * 
 * @description
 * @file : Bubble.js
 * 
 * @overview : read in the list ints. 

   * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 */
var read=require('../Utility/Util');
var input=require('readline-sync');
var arrayLength=input.questionInt("Enter the array length");
var array=[];
for(let a=0;a<arrayLength;a++)
{
    var num=input.questionInt("Enter the value");
    array.push(num);
}
read.BubbleSort(array);
