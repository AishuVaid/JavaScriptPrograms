
/*************************************************
    *Purpose :to deploy all the business logic
    *
    * @description
    * @file :utility.js
    * @overview : All the business logic is coded here.
    * @author : Aishwarya.R.M.
    * @version :1.0
    * @Since: 27-01-2019.
    * 
    ******************************************************/
var util = require('../Utility/Util')

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;

    }

    add(data) {
        var node
        node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.size++;
        }
        else {
            var temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    contain(data1) {
        var c = 0;
        if (this.head == null)
            console.log("List is empty")
        else {
            var temp = this.head
            while (temp.next) {
                if (temp.data == data1) {
                    return true;
                }
                else {
                    temp = temp.next;
                }
            }
            return false;
        }
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            var node = new Node(element);
            var curr, prev;
            curr = this.head;
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    indexOf(count) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data == data)
                return count;
            count++;
            current = current.next;
        }
    }
    print() {
        var str = "";
        var temp = this.head;
        while (temp) {
            str = str + " " + temp.data;
            temp = temp.next;
        }
        return str;
    }


    getSize() {
        return this.size;
    }


    addPos(arr, num) {
        console.log(num + " in addpos")
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[0] >= num)
                return 0;
            else if (arr[i] < num && arr[i + 1] > num) {
                return i + 1;
            }
        }
        return arr.length;
    }

    remove(data) {
        var temp = this.head;
        var t = null;
        while (temp != null) {
            if (temp.data == data) {
                if (t == null) {
                    this.head = temp.next
                }
                else {
                    t.next = temp.next;
                }
                this.size--;
                return temp.data
            }
            t = temp;
            temp = temp.next;
        }
        return -1;
    }

}


/***************************Stack implementation*******************
 * 
 */

class Stack {
    constructor() {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("stack overflow");
            return;

        }
        this.size++;
        this.item[++this.top] = data;
    }

    pop() {
        if (this.top == this.capacity - 1)
            console.log("Stack is empty");
        this.size--;
        return this.item.pop();
    }

    peek() {
        if (this.top = -1) {
            console.log("Stack is empty");
        }
        else {
            return this.item(top);
        }


    }
    print()
    {
        var str = "";
        for (let i = 0; i < this.size; i++) {
            str = str + " " + this.item[i];
           
        }
        return str;
    }
}

/***********************Queue implementation***************** */



class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data)
    }
    deEqueue() {
        if (this.isEmpty())

           return "UnderFlow";
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printList() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


class LinkedListQueue {
    constructor() {
      this.tail = null;
      this.head = null;
    }
    /**
     * To add an element into the rear of the queue.
     * @param {any} item
     */
    enQueue(item) {
      /**
       * Create a node by passing the item
       */
      let node = new Node(item);
      /**
       * If there are no head and tail, point the data to head and tail
       */
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        /**
         * We just move the tail pointer
         */
        this.tail.next = node;
        this.tail = node;
      }
    }
    /**
     * To remove an item from the queue.
     */
    deQueue() {
      if (!this.head) {
        return "No item";
      } else {
        let itemToPop = this.head;
        this.head = this.head.next;
        return itemToPop;
      }
    }
    /**
     *return true if the queue is empty.
     */
    isEmpty() {
      return this.size() < 1;
    }
    /**
     * Returns the size of the queue
     */
    size() {
      let current = this.head;
      let counter = 0;
      while (current) {
        counter++;
        current = current.next;
      }
      return counter;
    }
    printList() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
  }



/*********************Dequeue**************************** */

class Dequeue {
    constructor() {
        this.items = []
    }
    addFront(data) {
        /**
         * Adds the data to first element.
         */
        this.items.unshift(data)
    }
    addRear(data) {
        /**
         * Adds the data to last element.
         */
        this.items.push(data)
    }
    removeFront() {
        if (this.isEmpty())
            return "underFlow"
        /**
         * Removes the first element.
         */
        return this.items.shift()
    }
    removeRear() {
        /**
         * Removes the top element.
         */
        return this.items.pop()
    }
    isEmpty() {
        /**
         * 
         *return true if the queue is empty. 
         * 
         */
        return this.items.length == 0;
    }
    

}






class QueueLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
        this.front = null;
    }

    push(data) {

        if (this.isEmpty()) {

            var node = new Node(data)
            this.top = node;
            this.front = node;
            this.size++;
            return;
        }
        var node = new Node(data);
        this.top.next = node;
        this.top = node;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            console.log('no elemets found')
            return;
        }
        var dat = this.front.data
        this.front = this.front.next;
        return dat;
    }
    peek() {
        return this.top.data
    }
    print() {
        var t = this.front;
        while (t != null) {
            console.log(t.data);
            t = t.next;
        }
    }
    getData() {
        var temp = this.front;
        var str = "";
        while (temp) {
            str = str + temp.data;
            if (temp.next != null) {
                str = str + " ";
            }
            temp = temp.next;
        }
        
        return str;
    }

    isEmpty() {
        if (this.size === 0) {
            return true;
        }
        else
            return false
    }
    getSize() {
        return this.size;
    }
}




class StackLinkedList {

    constructor() {
        this.size = 0
        this.head = null;
    }
    size() {

        return this.size
    }
    isEmpty() {
        /**
         * Condition to check the size is zero.
         */
        return top == null;
    }
    push(data) {
        var n = new Node(data)
        if (this.head == null) {
            this.head = n
            this.size++
        }
        else {
            var temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }
    }
    pop() {
        if (this.head == null) {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) {
            this.head = null;
            return curr.data;
        }
        while (curr.next) {
            pre = curr;
            curr = curr.next;
        }
        var data = curr.data
        pre.next = null;
        this.size--;
        return data;
    }
    peek() {
        // check for empty stack 
        if (!isEmpty()) {
            return high.data;
        }
        else {
            console.log("Stack empty");
            return -1;
        }
    }
    print() {
        var st = ""
        var temp = this.head
        while (temp) {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
}

class Queue1
{
  constructor()
   {
    this.items=[];
   }

  enqueue(data)
   {
    this.items.push(data);
   }

  dequeue()
   {
    if(this.isEmpty())
     {
      return "Underflow";
      }
     return this.items.shift();
   }

  isEmpty()
   {
    return this.items.length==0;
   }

  printList()
   {
    var str="";
    for(var i=0;i<this.items.length;i++)
     {  
      str=str+this.items[i]+" ";
      return str;
     }
   }
}
	



module.exports = {
    Node,LinkedList, Stack, Queue, Dequeue,QueueLinkedList, LinkedListQueue, Queue1,


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


    getBinaryTree(num) {
        var fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    },


   /* @purpose : Print the different prime numbers of different
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



    isPrime(initial,final)
    {
        var flag=0;
        k=0;
        var prime=[];

        for(var index1=initial;index1<=final;index1++)
        {
            for(var index2=2;index2<index1;index2++)
            {
                if(index1%index2==0)
                {
                    flag=0;
                    break;
                }
                else
                {
                    flag=1;
                }
            }
            if(flag==1)
            {
                prime[k++]=index1;
            }
        }
        return prime;
    },






    findArray() {
        var arr = [];
        var arr2 = [];
        var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        for (let i = 2; i < 1000; i++) {
            if (util.isPrime(i)) {
                arr.push(i);

            }
        }
        var range = 100, k = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (util.CheckAnagram(arr[i], arr[j])) {
                    if (arr[i] <= range) {
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);

                            arr2.push(arr[i])
                            arr2.push(arr[j])
                            array[k].push(arr[j]);
                        }
                    } else {
                        range = range + 100;
                        k++;
                        if (arr[j] <= range) {
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    }
                }
            }
        }
        console.log("The Number which are prime and anagram ");
        var req=require('util')
        for (let i = 0; i < array.length; i++) {

            for (let j = 0; j < array[i].length; j++) {
                req.print(array[i][j]);
                if (j == 0) {
                    req.print(" => ");
                } else {
                    if (j != array[i].length - 1)
                        req.print(",")
                }
            }
            console.log();
        }
        return arr2
    },
}
	









