const fileStream=require('fs');
const string=fileStream.readFileSync('oops.txt','utf8');

const utilOops=require('../Utility/OopsUtil')
const read=require('readline-sync')

var name=read.question("Enter name you want to replace")
while(!isNaN(name))
{
    console.log("Enter valid name")
    name=read.question("Enter the name you want to replace")
}
//console.log("dsgfdsgf");

var fullName=read.question('Enter full name')
while(!isNaN(fullName))
{
    console.log("Enter valid name")
    fullName=read.question('enter your full name')
}
//console.log("sfsdfdsfdsf");

var num=read.questionInt("Enter phone number")
while(isNaN(num) && num.length!=09)
{
    console.log("Enter valid number")
    name=read.question("Enter the phone number")
}

var date=new Date();
var day=date.toDateString();
var ans=utilOops.replaceUsingRegex(name,fullName,num,day,string);
console.log(ans);