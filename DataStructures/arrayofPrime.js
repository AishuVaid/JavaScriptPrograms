/****************************Array Of Prime.******************
 * 11.Array of prime.
 * Execution : default node : cmd>node orderedlist.js
 * @purpose : Print the different prime numbers of different
 * ranges in different arrays.
 * 
 * 
 * @description
 * @file : arrayofPrime.js
 * @overview : Take a range of 0 - 1000 Numbers and find the Prime numbers 
 * in that range. Store the prime numbers in a 2D Array, the first 
 * dimension represents the range 0-100, 100-200, and so on. 
 * @param : the second dimension represents the prime numbers in that range.
 */

var util=require('../Utility/DSUtility');
function primes()
{
    var primes=[];
    var initial=0;
    var final=100;

for(let i=0;i<10;i++)
{
    primes[i]=util.isPrime(initial,final)
    console.log(initial+" "+final+":"+"["+primes[i]+"]");
    initial=initial+100;
    final=final+100;    
}
}
primes();