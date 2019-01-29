/**********************************************************


************************************************************
*Execution : Default node cmd>node Gambler..js
*Purpose : Print Number of wins and percentage of win and loss.
*@description :
*
*
*
*@ file : Gambler.js
*@overview : Simulates a gambler who start with $stake and place fair 
*$1 bets until he goes broke. play till gambler is broke or has won.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*************************************************************** */
var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require('readline-sync');
/**
 * For User Input
 */
var stake=name.question("Enter the stake amount");
/**
 * giving the stake amount as input
 */
var goal=name.question("Enter the goal amount");
/**
 * giving the goal amount as input
 */
var times=name.question("Enter the number of times bet is made");
/**
 * giving the bet number of times as input
 */
read.playGambler(stake,goal,times);
/**
 * accessing gambler functionality from utility.js
 */