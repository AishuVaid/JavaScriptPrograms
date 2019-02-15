var file=require('fs')
var read=('readline-sync')
var utility=require('../StockAccount/CompanySharesUtil')
function main()
{
    try
    {
        var CompanyShares=new utility.companySharesQueue();
        outer :while(true)
        {
            console.log("1.Add");
            console.log("2. Remove");
            console.log("3.Print");
            console.log("4.Save and exit")
        
        var choice=read.questionInt("Enter valid choice : ");
    switch(choice)
{
    case 1: CompanyShares.addTolist();
    break;

    case 2:CompanyShares.removeFromList();
    break;

    case 3: CompanyShares.print();
    break;

    case 4: CompanyShares.writelist();
    break outer;

    default: console.log("Please enter valid number")
    break;
}
}
    }
    catch(err)
    {
        console.log(err.message)
    }
}
main();