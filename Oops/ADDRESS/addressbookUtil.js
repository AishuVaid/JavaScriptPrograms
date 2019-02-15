var read=require('readline-sync')
var file=require('fs')
var sort=require("../../Utility/DSUtility")

class Person
{
    constructor(fname,lname,city,state,zip,phoneno)
    {
        this.firstname=fname,
        this.lastname=lname,
        this.city=city;
        this.state=state;
        this.zipcode=zip;
        this.phonenumber=phoneno
    }
}
class AddressBookManager
{
    open(address)
    {
        var temp=-1;
        if(address.Person.length>0)
        {
            for(var i=0;i<address.Person.length;i++)
            {
                console.log(address.Person[i]);
            }
        }
        console.log("welcome!")

    }
    
}

class AddressBook
{
    address(data)
    {
        console.log("Press 1 to add info of person")
        console.log("Press 2 to update info of person");
        console.log("Press 3 to update info of a person");
        console.log("Press 4 to sort addressbook based on zip")
        console.log("Press 5 to sort addressbook based on first name")
        console.log("Press 6 to print the addressbook")
        
    }
}