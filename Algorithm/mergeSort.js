var access = require('../Utility/Util')
var readline = require("readline-sync");
var arr = [];
    /**
     * Ask user the size of the array and store elements in the array.
     */
    var size = readline.questionInt("Enter the size of array: ");
    for (let i = 0; i < size; i++) {
      arr[i] = readline.questionInt("Enter the array elements: ");
    }
  
 

/*
 *Invoking mergeSort function from utility.js.
 */
access.mergeSort(arr);
console.log("Result: ", arr);
