
/*************************************************
    *Purpose :to deploy all the business logic
    *
    * @description
    * @file :OopsUtil.js
    * @overview : All the business logic is coded here.
    * @author : Aishwarya.R.M.
    * @version :1.0
    * @Since: 07-02-2019.
    * 
    ******************************************************/

      /****************Stock Report***********************
        * 1.Stock Report.
        * *************************
        * @purpose :  Print the Stock Report.
        * @description :  Write a program to read in Stock Names,
        *  Number of Share, Share Price. Print a Stock Report with
        *  total value of each Stock and the total value of Stock.
        * @function:Calculate the value of each stock and the total value.
        * **********************************************************/


var read=require('readline-sync');
var file=require('fs');


class Stock
{
    constructor(name,share,price)
    {
        this.name=name;
        this.share=share;
        this.price=price;

    }
    addValue(share,price)
    {
        var sum=price*share;
        return sum;
    }
}


     /*********JSON Inventory Data Management of Rice, Pulses and Wheats**************
        * 1.JSON Inventory Data Management of Rice, Pulses and Wheats.
        * *************************
        * @purpose : Create the JSON from Inventory Object and output the JSON String.
        * @description : Create a JSON file having Inventory Details for Rice, 
        * Pulses and Wheats with properties name, weight, price per kg. 
        * @function: Create a JSON file having Inventory Details for Rice, 
        * Pulses and Wheats with properties name, weight, price per kg. 
        * **********************************************************/




class Rice
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight*this.price;
    }
}

    class Wheat
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight*this.price;
    }
}

    class Pulses
{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    totalValue()
    {
        return this.weight*this.price;
    }
}


 /****************Inventory Management Program***********************
        * 1.Inventory Management Program.
        * *************************
        * @purpose : Create the JSON from Inventory Object and output the JSON String.
        * @description :Extend the above program to Create InventoryManager to
        *  manage the Inventory. The Inventory Manager will use InventoryFactory
        *  to create Inventory Object from JSON. The InventoryManager will 
        * call each Inventory Object in its list to calculate the Inventory 
        * Price and then call the Inventory Object to return the JSON String. 
        * The main program will be with InventoryManager.
        * @function: Get JSON Object in Java or NSDictionary in iOS. 
        * Create Inventory Object from JSON. Calculate the value for every Inventory. 
        * **********************************************************/







class inventoryManage
{
    constructor()
    {

    }
add(data)
{
    var name=read.question("Enter the name of the stock to add :")
    var shares=read.questionInt("Enter the number of Shares :")
    var quantity=read.questionInt("Enter the price of the shares :")
    data.Stock.push(
        {
            shareName : name,
            noOfShares : shares,
            price : quantity
        })
        var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))

}
remove(data)
{
    var name=read.question("Enter the name of the stock you want to remove :")
    for(let i=0;i<data.Stock.length;i++)
    {
        if(data.Stock[i].shareName==name)
        {
            var index=data.Stock.indexOf(data.Stock[i])
            data.Stock.splice(index,1)
        }
        var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))
    }
}

print(data)
{
    var stock=data.Stock;
    for(const key in stock)
    {
        console.log(stock[key]);
    }
}

edit(data)
{
    var stock=data.Stock;
    var name=read.question("Enter the stock name to edit :")
    var sharess=read.question("Enter no of shares to edit :")
    var money=read.question("Enter the shares price :")
    for(let key in stock)
    {
        if(stock[key].shareName==name)
        var value=key;
        if(stock[key].noOfShares==sharess)
        var value1=key;
        if(stock[key].price==money)
        var value2=key;
    }
    var name1=read.question("Enter the new name of the share :");
    stock[value].shareName=name1;
    var name2=read.question("Enter the new no of shares");
    stock[value1].noOfShares=name2;
    var name3=read.question("Enter the new price of the shares :")
    stock[value2].price=name3;
    var d=file.writeFileSync('inventoryManage.json',JSON.stringify(data))
}
}


  
  
module.exports={Stock,Rice,Wheat,Pulses,inventoryManage,



      /****************Regular Expression Demonstration.********************** *
        * 1.Regular Expression Demonstration.
        * *************************
        * @purpose : Print the Modified Message.
        * @description : Read in the following message: Hello <<name>>,
        *  We have your full name as <<full name>> in our system. 
        * your contact number is 91-xxxxxxxxxx. 
        * Please,let us know in case of any clarification Thank you 
        * BridgeLabz 01/01/2016. Use Regex to replace name, full name,
        *  Mobile#, and Date with proper value.
        * @function: Logic -> Use Regex to do the following
               Replace <<name>> by first name of the user (assume you are the user)
               replace <<full name>> by user full name.
               replace any occurance of mobile number that should be in
              format 91-xxxxxxxxxx by your contact number.
              replace any date in the format XX/XX/XXXX by current date.

        *  **********************************************************/

 

    replaceUsingRegex(name,fullName,num,day)
    {
       var fs = require('fs');
       var fileString = fs.readFileSync('oops.txt','utf8');

        fileString=fileString.replace(/<<name>>/g,name)
        fileString=fileString.replace(/<<full name>>/g,fullName)
        fileString=fileString.replace(/<<xxxxxxxxxx>>/g,num)
        var date = new Date();
        day = date.toDateString();
        fileString=fileString.replace(/01-01-2016/g,day);
        return fileString;
    },


}
