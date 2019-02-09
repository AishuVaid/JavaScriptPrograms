var utility=require('readline-sync')
var utilOops=require('../Utility/DSUtility')
var util=require('../Utility/Util')
var T=require('util')
function DeckOfCards()
{
    var suit=["♣️", "🔸", "❤️", "♠️"];
    var rank=["king","queen","jack","ace","2","3","4","5","6","7","8","9","10"];
    var cards=suit.length*rank.length;

    var cardarr=[];
    for(let i=0;i<suit.length;i++)
    {
        for(let j=0;j<rank.length;j++)
        {
            var temp="";
            cardarr.push(temp+rank[j]+suit[i])
        }
    }

    for(let i=0;i<cards;i++)
    {
        var num=Math.floor(Math.random()*cards)
        var temp=cardarr[i];
        cardarr[i]=cardarr[num];
        cardarr[num=temp];
    }
    var player1=new utilOops.LinkedListQueue;
    var player2=new utilOops.LinkedListQueue;
    var player3=new utilOops.LinkedListQueue;
    var player4=new utilOops.LinkedListQueue;
     for(let i=0;i<cardarr.length;i++)
     {
         if(i>=0 && i<13)
         player1.enQueue(cardarr[i])
         else if(i>=13 && i<26)
         player2.enQueue(cardarr[i])
         else if(i>=26 && i<39)
         player3.enQueue(cardarr[i])
         else
         player4.enQueue(cardarr[i])
     }
     var data=player1.printList()
     var arr=data.split(" ")
     var arr10=util.sortByBubble(arr);
     console.log(" [ "+arr10+" ]")
     var data1=player2.printList();
     var arr1=data1.split(" ")
     var arr11=util.sortByBubble(arr1);
     console.log("   [  "+arr11+"   ]   ")
     var data2=player3.printList();
     var arr2=data2.split(" ")
     var arr12=util.sortByBubble(arr2);
     console.log(" [ "+arr12+" ] ")
     var data3=player4.printList();
     var arr3=data3.split(" ")
     //var arr13=data3.split(" ")
     var arr13=util.sortByBubble(arr3);
     console.log(" [ "+arr13+" ]  ");
    console.log("------------------")
}
DeckOfCards();