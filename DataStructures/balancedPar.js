/********************************************************************
 * Execution : default node :cmd> node balancedPar.js
 *  @file : balancedPar.js
 * 1.Balance Parenthesis.
 * @purpose :  Read from file the list of Words and take user input to search a Text.
 * @overview :  Read the Text from a file, split it into words and arrange it as 
 * Linked List. Take a user input to search a Word in the List.
 *  If the Word is not found then add it to the list, and if it found then remove
 *  the word from the List. In the end save the list into a file.
 * @author :Aishwarya RM <aishu.vaid@gmail.com>
 * @version :1.0
 * @since : 30-01-2019.

 ******************************************************************/
const readline=require('readline-sync');
/**
 * accepts user input
 */
var access=require('../Utility/DSUtility');
function Stack()
{
    var stack=new access.Stack;
    var string=readline.question("Enter the mathematical expression to be checked ");
    var ch;

    for(let i=0;i<string.length;i++)
    {
        ch=string.charAt(i)
        if(ch == '(' || ch=='{' || ch=='[')
        {
            stack.push(ch);
        }
        else
        {
           switch(ch)
           {
               case ')' : if(stack.pop()!='(')
               {
                   return false;
               }
               break;
               case '}' : if(stack.pop()!='{')
               {
                   return false;
               }
               break;
               case ']' : if(stack.pop()!= '[')
               {
                   return false;
               }
               break;
           }
        }
    }
    if(stack.size==0)
    {
        return true;
    }
    return false;
}
var output=Stack();
console.log(output);
if(output)
{
    console.log("Arithmetic expression is balanced");
}
else
{
    console.log("Arithmetic expression is not balanced");
}