/***********************************************************

*
*Execution : Default node cmd>node PrimeFactors.js
*Purpose : Print the prime factors of number N.
*@description :
*
*
*
*@ file : PrimeFactors.js
*@overview : computes the prime factorization of N using brute force.
*Traverse till i*i<=N instead of i<=N for efficiency.
*@author : Aishwarya RM <aishu.vaid@gmail.com>
@version :1.0
@since :28-01-2019
*
*********************************************************
*/

var read=require('../Utility/Util');
/**
 * For accessing data from utility file
 */
var name=require('readline-sync');
/**
 * For User Input
 */
var prime=name.question("Enter the number to find prime factors");
/**
 * enter the number until whivh we require the prime factors.
 */
read.getPrimeFactors(prime);
/**
 * accessing PrimeFactors functionality from utility.js
 */