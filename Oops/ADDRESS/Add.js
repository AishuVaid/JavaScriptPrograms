var utility=require(),
var file=require('fs')
var read=file.readFileSync('Address.json','utf8')
var data=JSON.parse(read)
var object=new utility.AddressBook
var addressmanager=new utility.AddressBookManager
object.address;