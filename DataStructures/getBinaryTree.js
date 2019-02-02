/*******************Number of Binary Search Tree******************
 * 4.Number of Binary Tree.
 * Execution : default node : cmd>node cashCounter.js
 * @purpose : Find the number of search trees in a binary tree.
 *
 * @description
 * @file : getBinaryTree.js
 * @overview : First line will contain an integer, T, number of test cases. 
 * Then T lines follow, where each line represent a test case.
 *  Each test case consists a single integer, N, where N is the number
 *  of nodes in the binary search tree. 

 * @param :For each test case, find the number of different binary 
 search trees that can be created using these nodes.
  Print the answer modulo (108+7).
 */
var access=require('../Utility/DSUtility');
var input=require('../Utility/Util');
var read=require('readline-sync');
var number=read.questionFloat("enter the number :");
var factorial=access.getBinaryTree(number);
var factorial1=access.getBinaryTree(number*2);
var factorial2=access.getBinaryTree(number+1);
var result=(factorial1)/(factorial2*factorial);
console.log(result);