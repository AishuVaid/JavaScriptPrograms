var utility=('../Utilitu/OopsUtil')
var file=require('fs')
var read=require('readline-sync')
var data=file.readFileSync('Clinic.json','utf8')
var object=JSON.parse(data)
var p=new utility.Patient
var p1=new utility.Doctors
console.log("Enter 1 to search patient");
console.log("Enter 2 to search doctor");
console.log("Enter 3 to take appointment");
var number=read.questionInt("Choice number :")
if(number==1)
{
    p.searchPatient(object)
}
if(number==2)
{
    p1.searchDoctor(object)
}
if(number==3)
{
    p1.appointment(object)
}

