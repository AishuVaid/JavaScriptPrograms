var Utility=require('../Utility/DSUtility');
var utility=require('../Utility/Util');
var access=require('../Utility/Util');
var T=require('util');
var read=require('readline-sync');
var weekdays=new Utility.Dequeue;
var date=new Utility.Dequeue;
var month=read.question("Enter the month=");
var year=read.question("Enter the year=");
var d=utility2.dayOfWeek(1,month,year);
console.log(d);
var result=["Sun","Mon"];
if(d<=result.length)
{
    console.log("The day falls on ="+result[d]);
}
var days=utility2.monthof(month);
var t=access.checkLeapYear(year);
if(t)
{
    if(month==2)
    {
        days=29;
    }
}
for(let i=0;i<result.length;i++)
{
    weekdays.enqueue(result[d]);
}
