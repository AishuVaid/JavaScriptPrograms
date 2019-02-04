
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

        print()
        {
            var str = "";
            for (let i = 0; i < this.size; i++) {
                str = str + " " + item[i];
                return str;
            }
        }


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
    /*palindromeChecker(str) 
    {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        while (this.front != this.rear && this.front < this.rear) {
            if (this.getFront() != this.getRear()) {
                console.log("not ..")
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
    **/

}






class QueueLinkedList
{
    constructor()
    {
        this.size=0;
        this.head=null;
    }
    enqueue(data)
    {
        var n=new Node(data);
        if(this.head==null)
        {
            this.head=n;
            this.size++;
        }
        else
        {
            var temp=this.head;
            while(temp.next)
            {
                temp=temp.next;
            }
            temp.next=n;
            this.size++;
        }
    }
    dequeue()
    {
        if(this.head==null)
        {
            console.log("Stack underflow");
            return null;
        }
        else
        {
            var temp=this.head;
            var data=temp.data;
            this.head=temp.next;
            this.size--;
            return data;
        }
    }
    getSize()
    {
        return this.size;

    }
    print()
        {
            var str="";
            var temp=this.head;
            while(temp)
            {
                console.log(temp.data);
                str=str+""+temp.data;
                temp=temp.next;
            }
            return str;

        }



    palindromeChecker(str) 
    {
        for (let i = 0; i < str.length; i++) {
            this.addRear(str.charAt(i));
        }
        while (this.front != this.rear && this.front < this.rear) {
            if (this.getFront() != this.getRear()) {
                return false;
            }
            this.front++;
            this.rear--;
        }
        return true;
    }
    
}



module.exports = {
    Node,LinkedList, Stack, Queue, Dequeue,QueueLinkedList,




    getBinaryTree(num) {
        var fact = 1;
        for (let i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;
    },


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
    }
}






