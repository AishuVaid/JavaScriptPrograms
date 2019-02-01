var read=require('../Utility/DSUtility');
var list=new read.LinkedList();
list.add("abc");
list.add("pqr");
list.add("xyz");
list.add("ghi");
list.print();
var res=list.getSize();

//list.remove("pqr");
console.log(res);
