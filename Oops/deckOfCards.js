var utilityOops=require('../Utility/OopsUtil')
var deck=new utilityOops.Deck();
var cardarr=deck.createDeck();
var arr=[[],[],[],[]];
var a=0;

for(let i=0;i<4;i++)
{
    for(let j=0;j<9;j++)

{
    arr[i][j]=cardarr[j+a]

}
a=a+9;
}
for(let i=0;i<arr.length;i++)
{
    console.log("Deck of card["+i+"]="+""+arr[i]+"]");
    
}