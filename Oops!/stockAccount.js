var D=require('../Utility/OopsUtil')
var read=require('readline-sync')
var file=require('fs')
var data=file.readFileSync('customer.json','utf8')
var data1=file.readFileSync('company.json','utf8')
var object=JSON.parse(data);
var object11=JSON.parse(data1);
var object1=new D.stockAccount
console.log("Enter 1 to create account :")
console.log("Enter 2 to buy shares ")
console.log("Enter 3 to sell shares")
console.log("Enter 4 to information shares of comapny and customer")
var num=read.question("Choose the number :")
if(num==1)
{
    object1.stockCreate(object)
}

if(num==2)
{
    object1.buy(object,object11)
}

if(num==3)
{
    object1.sell(object,object11)
}

if(num==4)
{
    object1.print(object,object11)
}