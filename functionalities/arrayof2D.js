var Access=require('../Utility/Util');
var read=require('readline-sync');
var row=read.question("Enter the row =");
var column=read.question("Enter the column =");
Access.getArray(row,column,read);