var read = require("readline-sync");
var file = require("fs");
var accessDs = require('../Utility/DSUtility')
list = new accessDs.LinkedList();
class CompanyShares {
  constructor() {
    this.linkedList = new accessDs.LinkedList();
   // try {
        var data = JSON.parse(
            file.readFileSync('/home/admin1/Desktop/JavaScript/Programs/Oops!/companyShares.json')
          );
          for (let j = 0; j < data.Company.length; j++) {
            this.linkedList.add(data.Company[j]);
      }
   // } //catch (err) {
      //console.log("File not found");
    //}
  }
 
  addTolist() {
    var flag = false;
    do {
      var name = read.question("Enter the name want to add : ");
      var symbol = read.question("Enter the symbol")
      if (!isNaN(name)||!isNaN(symbol)) {
        console.log("Please enter alphabets only ......!");
      } else {
        flag = true;
      }
    } while (!flag);
    var share = read.questionInt("Enter the share :");
    var price = read.questionInt("Enter the price :");


    this.linkedList.add({
      name: name,
      symbol: symbol,
      share: share,
      price: price
    });
    console.log("Elements after adding to the list :");
    console.log(this.linkedList.printShares());
  }
  
  removeFromList() {
    
    console.log(this.linkedList.printShares());
    var company = read.question("Enter company name or symbol: ");
    this.linkedList.removeStock(company);
    
    console.log(this.linkedList.printShares());
    
  }
  print() {
    console.log(this.linkedList.printShares());
  }
  writeList() {
    file.writeFileSync(
      "companyShares.json",
      JSON.stringify(this.linkedList.printShares()),
      function(err) {
        if (err) {
          throw err;
        }
      }
    );
  }
}
module.exports = { CompanyShares };