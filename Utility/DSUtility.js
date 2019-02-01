
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
        var node = new Node(data);
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




    indexOf(count) 
    {
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
        console.log(str);
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



class Queue
{
    constructor()
    {
        this.top=null;
        this.size=0;
        this.front=null;
    }
    push(data)
    {
        if(this.isEmpty())
        {
            var Node=new Node(data);
            this.top.next=node;
            this.top=node;
            this.size++;
        }

        pop()
    {
        if(this.isEmpty())
        {
            console.log("No elements found!");
            return;
        }
        var 
    }
    }

}

module.exports = { Node, LinkedList, Stack }




