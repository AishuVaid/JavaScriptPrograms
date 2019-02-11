/****************************************************************************
 * Execution : default node : cmd> node deckofcards.js
 * 
 * Purpose :Shuffle and distribute the cards by random method and arrange in a 2D array.
 * 
 * @description
 * @file : deckofcards.js
 * @overview : Write a Program DeckOfCards.java, to initialize deck of cards having
 *  suit ("Clubs", "Diamonds", "Hearts", "Spades") & Rank 
 * ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). 
 * Shuffle the cards using Random method and then distribute 9 Cards to 4
 *  Players and Print the Cards the received by the 4 Players using 2D Array.

 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * *****************************************************************************/
var t=require('util');
var suit= ["♣️", "🔸", "❤️", "♠️"];
var rank=['2','3','4','5','6','7','8','9','10',"jack","queen","king","ace"];
var cards=suit.length * rank.length;
var cardarr=[];

for(let i=0;i<suit.length;i++)
{
    for(let j=0;j<rank.length;j++)
    {
        var temp=" ";
        cardarr.push(temp+rank[j]+suit[i]);
    }
}

for(let i=0;i<cards;i++)
{
    var num=Math.floor(Math.random()*cards);
    var temp=cardarr[i]+" ";
    cardarr[i]=cardarr[num];
    cardarr[num]=temp;
}

var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(j=0;j<9;j++)
    {
        arr[i][j]=cardarr[j+a]
    }
    a=a+9;
}

for(let i=0;i<arr.length;i++)
{

    console.log("Deck of Cards["+i+"]= "+"["+""+arr[i]+"]");
    
}
	
