/****************************************************************************
 * Execution : default node : cmd>node binarySearchOfString.js
 * 
 * Purpose : Print the result if the word is found or not
 * * 
 * @description :
 * 
  *@file : binarySearchOfString.js
*@overview : Read in a list of words from File. Then prompt the user 
to enter a word to search the list. The program reports if the
 search word is found in the list.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*******************************************/
var read=require('../Utility/Util');
var input=require('readline-sync');
var word=input.question("Enter the word to be searched");
var file=require('fs');
var arr=[];
file.readFile('test.txt',(err,data)=>
{
    if(err)
    throw err;
    arr=data.toString().split(" ");
    console.log(arr);
        console.log(read.getBinarySearch(arr,word));
})