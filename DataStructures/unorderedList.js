/********************************************************************
 * Execution : default node :cmd> node unorderedList.js
 *  @file : unorderedList.js
 * 1.Unordered List.
 * @purpose :  Read from file the list of Words and take user input to search a Text.
 * @overview :  Read the Text from a file, split it into words and arrange it as 
 * Linked List. Take a user input to search a Word in the List.
 *  If the Word is not found then add it to the list, and if it found then remove
 *  the word from the List. In the end save the list into a file.
 * @author :Aishwarya RM <aishu.vaid@gmail.com>
 * @version :1.0
 * @since : 30-01-2019.

 ******************************************************************/
var access = require('../Utility/DSUtility');
var M = require('../Utility/Util');
var read = require('readline-sync');
var word = read.question("enter number to be searched in file:");
var arr = M.fileRead();
var l = new access.LinkedList;
for (let i = 0; i < arr.length; i++) {
    l.add(arr[i]);


}
var found = l.contain(word);
if (found == true) {
    l.remove(word);
    var output = l.print();
    M.fileWrite('sample.txt', output);
    console.log(output)
}
else {
    l.add(word);
    var out = l.print();
    M.fileWrite('sample.txt', out);
    console.log(out)
}