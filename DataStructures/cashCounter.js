var access=require('../Utility/DSUtility');
var M=require('../Utility/Util');
var read=require('readline-sync');
var L=new access.Queue;
var bankamount=4000;
var flag=true;
var count=0;
var size=read.question("Enter the total number of people to be in the queue");
try
{
    if(size>0)
    {
        for(let i=0;i<size;i++)
        {
            var input=read.question("Enter 1 to deposit amount /n enter 2 to withdraw amount");
            if(input==1)
            {
                var amount=read.questionFloat("Enter the total amount to deposit :")
                
            }
        }
    }

}