//var readline=require('readline-sync');
//var fileStream=require('fs');


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





module.exports={Stock,inventory,




    inventory(object)
    {
        var rice=object.rice;
        var pulses=object.pulses;
        var wheat=object.wheat;

        for(let key in rice)
        {
            console.log("The total rate of "+rice[key].name+" for "+rice[key].weight+"kg = "+rice[key].weight*rice[key].rate)
            
        }
        for(let key in pulses)
        {
            console.log("The total rate of "+pulses[key].name+" for "+pulses[key].weight+"kg ="+pulses[key].weight*pulses[key].rate)
            
        }
        for(let key in wheat)
        {
            console.log("The total rate of "+wheat[key].name+" for "+wheat[key].weight+"kg ="+wheat[key].weight*wheat[key].rate)
            
        }
    },

    replaceUsingRegex(name,fullName,num,day,fileString)
    {
       

        fileString=fileString.replace(/<<name>/g,name)
        fileString=fileString.replace(/<<fullName>>/g,fullName)
        fileString=fileString.replace(/91-XXXXXXXXXXX/g,num)
        fileString=fileString.replace(/01-01-2016/g,day);
        return fileString;
    },


}
