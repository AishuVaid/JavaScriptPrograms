/****************************************************************************
 * Execution : default node : cmd>node VendingMachine.js
 * 
 * Purpose : to calculate the minimum number of Notes as well 
 * as the Notes to be returned by the Vending Machine as a Change.
 * 
 * @description :
 * 
 * *@file : VendingMachine.js
*@overview : Use Recursion and check for largest value of the Note
 to return change to get to minimum number of Notes.  one the
  number of minimum Note needed to give the change and second
   list of Rs Notes that would given in the Change.


*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*******************************************/

 var Access=require('../Utility/Util');
var input=require('readline-sync');
var amount=input.questionInt("Enter amount ");
var arr=[2000,500,100,50,10,2,1]
Access.countNotes(arr,amount);