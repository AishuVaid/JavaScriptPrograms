
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








var p=file.readFileSync('addressBook1.json')
nameRestriction=/[a-z]/g;
contactRestriction=/[0-9]/g;

/**
 * regex
 */
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
class Address {
    /**
     * create a constructor to initialize and store values
     */
    constructor(addressb) {
        this.addressb;
    }
    createAddress(addressb) {
        var name = read.question("Please enter your first name: ");
        if (nameRestriction.test(name) == false) {
            console.log("Invalid name!");
            return false;
        }
        var lastName = read.question("Please enter your last name: ");
        /**
         * validating last name
         */
        if (nameRestriction.test(lastName) == false) {
            console.log("Invalid name!");
            return false;
        }
        /**
         * add the address information
         */
        console.log("***Address Info***");
        var street = read.question("Street: ");
        var city = read.question("City: ");
        if (nameRestriction.test(city) == false) {
            console.log("Invalid city name!");
            return false;
        }
        var state = read.question("State: ");
        if (nameRestriction.test(state) == false) {
            console.log("Invalid state name!");
            return false;
        }
        var nation = read.question("Nationality: ");
        if (nameRestriction.test(nation) == false) {
            console.log("Invalid Nationality!");
            return false;
        }
        var zip = read.question("Zip code: ");
        /**
         * zip code validation that should not exceed length 6
         */
        if (contactRestriction.test(zip) == false || zip.length != 6) {
            console.log("Invalid zip code!");
            return false;
        }
        var phoneNum = read.question("Phone number: ");
        if (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            console.log("Invalid phone number!");
            return false;
        }
        /**
         * push each value into json
         */
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        /**
         * write file into json
         */
        file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }
    /**
     * comaparing name of each object and sort alphabetically
     */
    compare1(a, b) {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
            return -1;
        }
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
            return 1;
        }
        return 0;
    }
    sorting() {
        console.log(addressb.Person.sort(this.compare1));
    }
    /**
     * open profile for given name
     */
    openProfile(addressb) {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            /**
                             * update profile
                             */
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    if (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    /**
                                     * update whole data after changes
                                     */
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    /**
                                     * save into json every time after update
                                     */
                                    save();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    if (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    if (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    if (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        console.log("Invalid name!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    if (contactRestriction.test(zUpdate) == false) {
                                        console.log("Invalid number!");
                                        return false;
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                    case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        pUpdate = read.question("No special characters Invalid number! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    //address();
                                    break;
                            }
                            break;
                        case 2:
                            /**
                             * to delete profile
                             */
                            var update = read.question("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            /**
                             * write file
                             */
                            file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            /**
                             * sort the profile by name
                             */
                            this.sorting(addressb);
                            save();
                            break;
                        case 4:
                            /**
                             * save file into json
                             */
                            function save() {
                                file.writeFile('addressBook1.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            save();
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            //address();
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {
                console.log("Profile unavailable!!Please create new one.");
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}



var read=require('readline-sync')
var file=require('fs')
var M=require('../Utility/DSUtility')
var s=0;
class StockAccount
{
    constructor()
    {

    }
    stockCreate(data)
    {
        var name1=read.question("Enter the name :")
        var id1=Math.floor(Math.random()*100);
        var share1=Math.floor(Math.random()*100);
        console.log(id1)

        data.customer(push)
        {
            name : name1;
            id : id1;
            share : share1;
        }
    }
    //console.log(data.customer);
}



	


  
module.exports={Stock,Rice,Wheat,Pulses,inventoryManage,Address,



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