'use strict';

// Complete this algo
const minJumps = arr => {
  if (arr.length <= 2){
    return 1;
  }
  else {
    return minJumps()
  }
};

module.exports = minJumps
