var read=require('../Utility/Util');
var input=require('readline-sync');
var t=input.question("Enter the temperature");
var v=input.question("Enter the velocity");
while((Math.abs(t)>50) || v>120 || v<3)
{
   console.log("Enter the correct temperature and velocity");
   var t=input.question("Enter the temperature");
   var v=input.question("Enter the velocity");
}
read.getChill(t,v);
