/****************************************
*
*Execution : Default node cmd>node TripleZero.js
*Purpose : One output is number of distincttriplets as well as the second output
*is to print the distinct triplets.
*@description :
*
*
*
*@ file : TripleZero.js
*@overview : A program with cubic running time.Read in N integers and counts the number 
of triples that sum to exactly 0.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*******************************************/
var util=require('../Utility/Util');
var name=require('readline-sync');
var i=name.questionInt("enter array length");
var arr=[];
while(arr.length!=i)
{
    var value=name.questionInt("Enter value");
    arr.push(value);
}
util.obtainTriplets(arr);