'use strict';

//Complete this algo
const isLoop = linkedlist => {
  console.log(linkedlist);
  console.log('tail.next', linkedlist.tail.next);
  if (linkedlist.tail.next) {
    console.log('???', linkedlist.tail.next);
    return true;
  } else return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
