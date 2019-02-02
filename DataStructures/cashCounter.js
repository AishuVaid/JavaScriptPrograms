/*******************Simulate Banking Cash Counter******************
 * 4.Simulate Banking Cash Counter.
 * Execution : default node : cmd>node cashCounter.js
 * @purpose : people to either deposit or withdraw money and maintain the cash balance.
 *
 * @description
 * @file : cashCounter.js
 * @overview : Create a Program which creates Banking Cash Counter where people
 *  come in to deposit Cash and withdraw Cash. Have an input panel to add people 
 * to Queue to either deposit or withdraw money and dequeue the people.
 *  Maintain the Cash Balance.

 * @param :Panel to add People to Queue to Deposit or Withdraw Money and dequeue 
 */


var access=require('../Utility/DSUtility');

var M=require('../Utility/Util');
var read=require('readline-sync');
function Queue()
{
var L=new access.Queue;
var bankAmount=4000;
var set=[];
var flag=true;
var count=0;
var size=read.question("Enter the total number of people to be in the queue");

    if(size>0)
    {
        for(let i=1;i<size;i++)
        {
            var input=read.question("Enter 1 to deposit amount \n enter 2 to withdraw amount");
            if(input==1)
            {
                var amount=read.questionFloat("Enter the total amount to deposit :")
                var set=L.enqueue(Number(amount));
                flag=true;
                
            }
            else if(input==2)
            {
                var amount=read.questionInt("Enter the total amount to be withdraw :");
                var get=L.enqueue(Number(-amount))
                flag=true;
            }
            else
            {
                console.log("Make sure that you have entered correct key ");
                flag=false;
                return;

            }
        }
    }
    else
    {
        console.log("Invalid input");
        return;
    }
    if(flag)
    {
        var add=0;
        for(let i=0;i<size;i++)
        {
            add=add+L.deEqueue();
        }
        console.log(add);
        var totalAmount=bankAmount+add;
        console.log("Total amount left in the bank is :"+totalAmount);
        if(totalAmount<bankAmount)
        {
            console.log("Minimum cash is not maintained in bank :");
        }
        else
        {
            console.log("Minimum cash is maintained in bank :");
    
        }
    }
} 

Queue();