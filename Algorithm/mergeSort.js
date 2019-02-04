var Access=require('../Utility/Util');
var read=require('readline-sync');
var num=read.questionInt("Enter the size of array :");
var arr=[];
while(i<num)
{
    var number=read.questionInt("enter the array elements :");
    arr.push(number)
    i++;
}
console.log("Before sorting");
console.log(arr);

console.log("After sorting");
var result=Access.mergeSort(arr);
console.log(result);
