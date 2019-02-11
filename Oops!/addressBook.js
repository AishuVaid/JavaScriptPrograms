var prompt=require('readline-sync')
var access=require('../Utility/OopsUtil')
var fs=require('fs')
var data=fs.readFileSync('addressBook1.json','utf8')
var addressb=JSON.parse(data);
function addressBook()
{
    var a=new access.Address;

    console.log("******ADDRESS BOOK***********")
    console.log("1.Create profile");
    console.log("2:Open Address Book")
    console.log("3.Exit");
    var choice1=prompt.question("Please enter your choice :");
    switch(parseInt(choice1))
    {
        case 1:
        a.createAddress(addressb);
        break;
        case 2: 
        a.openProfile(addressb);
        break;
        case 3:
        console.log("Thank you!!!")
        break;
        default:
        console.log("Please enter a valid option!")
    }
}
addressBook();