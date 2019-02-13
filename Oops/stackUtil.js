var read = require("readline-sync");
var file = require("fs");
var access = require('../Utility/DSUtility')

class companySharesStack {
    constructor() {
        this.stock = new access.StackLinkedList;
        try {
            var data = JSON.parse(
                file.readFileSync("companyStack.json"))
            for (let j = 0; j < data.company.length; j++) {
                this.stock.push(data.company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    
    addToStack() {
        var flag = false;
        do {
            var name = read.question("Enter the name want to add : ");
            if (!isNaN(name)) {
                console.log("Please enter alphabets only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var share = read.questionInt("Enter the share :");
        var price = read.questionInt("Enter the price :");
        this.stock.push({
            name: name,
            share: share,
            price: price
        });
        console.log("Elements after adding to list :");
        console.log(this.stock.printShares());
    }
    
    removeFromStack() {
        console.log(this.stock.printShares());
        var company = read.question("Enter company name: ");
        this.stock.pop(company);
        console.log(this.stock.printShares());
    }
    
    print() {
        console.log(this.stock.printShares());
    }
   
    writeStock() {
        file.writeFileSync("/home/admin1/Desktop/JavaScript/Programs/Oops/companyStack.json");
            JSON.stringify(this.stock.printShares()),
            function (err) {
                if (err) {
                    throw err;
                }
            }
    }
}
module.exports = { companySharesStack }
