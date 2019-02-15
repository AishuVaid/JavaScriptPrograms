/****************************************************************************
 * Execution : default node : cmd> node stock.js
 * 
 * Purpose : Print the Stock Report.
 * 
 * @description
 * @overview : Write a program to read in Stock Names, Number of Share,
 *  Share Price. Print a Stock Report with total value of each Stock 
 * and the total value of Stock.
 * @author : Aishwarya RM <aishu.vaid@gmail.com>
 * @version : 1.0
 * @since : 28-01-2019
 * ***************************************************************************/
const util=require('../Utility/OopsUtil');
const fileStream=require('fs')
const json=fileStream.readFileSync('stock.json')
var object=JSON.parse(json)
var stock=new util.Stock(name,share,price);
for(let key in object.Stock)
{
    var name=object.Stock[key].name
var share=object.Stock[key].share
var price=object.Stock[key].price
    console.log("The total value "+object.Stock[key].name+" is "+stock.addValue(share,price))
  
}













var input=require('./StockPortFolio');
function main()
{


var result=new input.StockPortFolio
result.showresult()
}
main();





