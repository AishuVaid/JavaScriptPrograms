var Access = require('../Utility/Util');
var readline = require('readline-sync');
/**
 * Asker user to input the string for which permutation has to be found
 */
var string = readline.question("Enter the string")
/*
 *Invoking stringPermutations function by passing string, from utility.js.
 */
console.log(Access.stringPermutations(string));