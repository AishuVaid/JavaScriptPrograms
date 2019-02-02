
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


/
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

/***********************Queue implementation***************** */



class Queue
{
    constructor()
    {
       this.items=[];
    }
    
    enqueue(data)
    {
        this.items.push(data)
    }
    deEqueue()
    {
        if(this.isEmpty())
        
            return "UnderFlow";
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
        str+=this.items[i]+" ";
        return str;      
      }
    }




    /*********************Dequeue**************************** */

    class Dequeue {
        constructor() {
            this.front = -1;
            this.rear = 0;
            this.size = 30;
            this.arr = new Array(30);
        }
        isFull(){
            if(this.front==0 && this.rear==this.size-1 || (this.rear+1==this.front)){
                return true;
            }
            return false;
        }
        isEmpty(){
            return this.front==-1;
        }
        addFront(item) {
            if(this.isFull()){
                console.log("Queue overflow");
                return;
            }
            if(this.front==-1){
                this.front=0;
                this.rear=0;
            }
            else if(this.front==0){
                this.front=this.arr.length-1;
            }
            else{
                this.front--;
            }
            this.arr[this.front]=item;
        }
        addRear(item){
            if(this.isFull()){
                console.log("Queue overflow");
                return;
                
            }
            if(this.front==-1){
                this.front=0;
                this.rear=0;
            }
            else if(this.front==this.arr.length-1){
                this.rear=0;
            }
            else{
                this.rear++;
            }
            this.arr[this.rear]=item;
        }
        removeFront() {
            if(this.isEmpty()){
                console.log("Queue underflow");
                return;
                
            }
            var item;
            if(this.front==this.rear){
                item=this.arr[this.front];
                this.front=-1;
                this.rear=-1;
            }
            else if(this.front==this.arr.length-1){
                item=this.arr[this.front];
                this.front--;
            }
            else{
                item=this.arr[this.front];
                this.front++;
            }
            return item;
        }
        removeRear() {
            if(this.isEmpty()){
                console.log("Queue underflow");
                return;
                
            }
            var item;
            if(this.arear==this.front){
                item=this.arr[this.rear];
                this.rear=-1;
                this.front=-1;
            }
            else if(this.rear==0){
                item=this.arr[this.rear];
                this.rear=this.rear--;
            }
            return item;
            }
            getFront(){
                if(this.isEmpty()){
                    return -1;
                }
                return this.arr[this.front];
            }
            getRear(){
                if(this.isEmpty()){
                    return -1;
                }
                return this.arr[this.rear];
            }
       palindromeChecker(str){
           for(let i=0;i<str.length;i++){
               this.addRear(str.charAt(i));
           }
           while(this.front!=this.rear && this.front<this.rear){
               if(this.getFront()!=this.getRear()){
                   return false;
               }
               this.front++;
               this.rear--;
           }
           return true;
       }
    }
    

    module.exports = {Node,LinkedList,Stack,Queue,Dequeue,



        /*******************Binary Tree***************************/


    getBinaryTree(num)
    {
        var fact=1;
        for(let i=1;i<=num;i++)
        {
            fact=fact*i;
        }
        return fact;
    },

    

    }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
