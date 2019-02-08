var fileStream=require('fs');
var UtilityOops=require('../Utility/OopsUtil');
var input=fileStream.readFileSync('inventory.json');
var object=JSON.parse(input);
//const json1=fileStream.readFileSync('rice.json')
//const json2=fileStream.readFileSync('rice.json')
//const json3=fileStream.readFileSync('rice.json')
//const access=fileStream.readFileSync('inventory.json');

var sum=0;
var d=object.Rice;
var e=object.Wheat;
var f=object.Pulses;

//var inv1=new util.Rice(name,weight,price)
//var inv2=new util.Pulses(name,weight,price)
//var inv3=new util.Wheat(name,weight,price)
for(let i in d)
{
    var name=d[i].name;
    var weight=d[i].weight;
    var rate=d[i].rate;
    var total=d[i].weight*d[i].rate
    console.log("The total value of ",d[i].name,"is",total);
    sum=sum+total;
    i=new UtilityOops.Rice(name,weight,rate)
}
console.log(sum);
console.log();


for(let j in e)
{
    var name=e[j].name;
    var weight=e[j].weight;
    var rate=e[j].rate;
    var total=e[j].weight*e[j].rate;
    console.log("The total value of "+e[j].name+" is ",total);
    sum=sum+total;
    j=new UtilityOops.Wheat(name,weight,rate)
}
console.log(sum);
console.log();


for(let k in f)
{
    var name=f[k].name;
    var weight=f[k].weight;
    var rate=f[k].rate;
    var total=f[k].weight*f[k].rate;
    console.log("The total value of "+f[k].name+" is "+total);
    sum=sum+total;
    k=new UtilityOops.Pulses(name,weight,rate)
}
console.log(sum);
console.log();