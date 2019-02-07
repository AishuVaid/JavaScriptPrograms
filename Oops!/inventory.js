const util=require('../Utility/OopsUtil');
const fileStream=require('fs');
const json1=fileStream.readFileSync('rice.json')
const json2=fileStream.readFileSync('rice.json')
const json3=fileStream.readFileSync('rice.json')
//const access=fileStream.readFileSync('inventory.json');
var object=JSON.parse(json);
var inv1=new util.Rice(name,weight,price)
var inv2=new util.Pulses(name,weight,price)
var inv3=new util.Wheat(name,weight,price)
for(let key1 in object1.Rice)
{
    var name=object1.Rice[key].name;
    var weight=object1.Rice[key].weight;
    var price=object1.Rice[key].price;
    console.log("The total value of "+object1.Rice[key1].name+" is "+inv1.addValue(weight,price))
}
for(let key2 in object2.Pulses)
{
    var name=object2.Pulses[key].name;
    var weight=object2.Pulses[key].weight;
    var price=object2.Pulses[key].price;
    console.log("The total value of "+object2.Pulses[key2].name+" is "+inv2.addValue(weight,price)) 
}
for(let key3 in object3.Wheat)
{
    var name=object3.Wheat[key].name;
    var weight=object3.Wheat[key].weight;
    var price=object3.Wheat[key].price;
    console.log("The total value of "+object3.Wheat[key3].name+" is "+inv1.addValue
    
    (weight,price))
}
function inventory()
{
    utilOops.inventory(object);
}
inventory();
