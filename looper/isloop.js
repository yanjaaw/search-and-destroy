'use strict';

//Complete this algo
//  wouldn't work for non-unique values?
const isLoop = (linkedlist) => {
    let current = linkedlist.head;
    // let second = current.next;
    let checkedList = [];
    while (current.next !== null) {
        if (checkedList.includes(current.next.value)) {
            return true
        } else {
            checkedList.push(current.next.value);
            current = current.next;
            // return isLoop()
        }
    }
    return false;
    // getNthNode(n){
    //     let counter = 1;
    //     let curr = this.head;
    //     while(counter < n){
    //       curr = curr.next
    //       counter++
    //     }
    //     return curr
    //   }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop