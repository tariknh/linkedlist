#!/usr/bin/node

class LinkedList {
    constructor(){
        this.size = 0
        this.head = null
    }
    prepend(data) {
        this.head = new Node(data,this.head)
        this.size++
    }
    append(data) {
        let newNode = new Node(data)
        if(this.head === null){
            return this.head = newNode
        }
        let current = this.head
        this.size++
        while(current){
            if(current.next == null){
                return current.next = newNode
            }else{
                current = current.next
            }
        }
    }
    getSize(){
        this.size ? console.log("size is "+ this.size) : console.log("Empty")
    }
    getHead(){
        this.head ? console.log("head is "+ this.head.data) : console.log("Empty")
    }
    log(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    tail(){
        let tailData
        let current = this.head
        while(current){
            tailData = current.data
            current = current.next
        }
        console.log("tail is "+ tailData)
    }
    pop(){
        let current = this.head
        let previous
        let count = 0
        while(current.next){
            previous = current
            current = current.next
        }
        previous.next = null
    }
    at(index){
        let current = this.head
        let count = 0
        let at
        while(count<index){
            count++
            current = current.next
            at = current.data
        }
        console.log("the data at index "+ index + " is " + at)
    }
    contains(value){
        let current = this.head
        while(current){
            if (current.data == value){
                return console.log(value + " does exist in the list!")
            }else{
                current = current.next
            }
        }
        console.log(value + " does NOT exist in the list..")
    }
    find(value){
        let current = this.head
        let count = 0
        while(current){
            if (current.data == value){
                return console.log(value + " can be found at index " + count)
            }else{
                current = current.next
                count++
            }
        }
        console.log(value + " does NOT exist in the list..")
    }
    insertNode(data,index){
        let newNode = new Node(data)
        let current = this.head
        let previous
        let count = 0
        while (count < index){
            previous = current
            count++
            current = current.next
        }
        newNode.next = current
        previous.next = newNode
        this.size++
    }
    removeNode(index){
        let current = this.head
        let previous
        let count = 0
        let targetNode
        while(count < index){
            previous = current
            count++
            current = current.next
        }
        previous.next = current.next
        this.size--
    }
}
class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

//New Linkedlist
const test = new LinkedList()

//Appends + Prepends
test.append(100)
test.append(200)
test.append(300)
test.append(400)
test.append(500) // Removed by test.removeNode(5)
test.append(600)
test.append(700)
test.prepend(2000)
test.prepend(1000) // Removed by test.pop()

//Inserts
test.insertNode(50,3)
test.insertNode(72,6)

//Remove
test.removeNode(5)
test.pop()

//Logs
test.getSize()
test.tail()
test.at(2)
test.contains(72)
test.find(72)
test.log()