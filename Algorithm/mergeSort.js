var Access=require('../Utility/Util');
var read=require('readline-sync');
var num=read.questionInt("Enter the size of array :");
var arr=[];
while(num!=arr.length)
{
    var number=read.questionInt("enter the array elements :");
    arr.push(number)
}
var l=0;
var h=arr.length;
function Merge()
{
    Access.mergeSort(arr);
    console.log("Merge sorted result =",arr);
}
Merge();