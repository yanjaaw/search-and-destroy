'use strict';

// recursive version
const minJumps = (arr, left = 0, right = arr.length-1) => {
  // our base case
  if (left === right) {
    return 0;
  }
  // when nothing is reachable, return 0
  if (arr[left] === 0) {
    return 0;
  }
  // recursive travelsal through all reachable spaces dependent on our starting point (left).
  let min = Infinity;
  for (let i = left + 1; i <= right && i <= left + arr[left]; i++) {
    const jumps = minJumps(arr, i, right);
    if (jumps !== Infinity && jumps + 1 < min) {
      min = jumps + 1;
    }
  }

  return min;
}

// // iterative version
// const minJumps = (arr, n = arr.length) => {
//   const jumps = new Array(n);
//   if (n === 0 || arr[0] === 0) {
//     return Infinity;
//   }

//   jumps[0] = 0;

//   for (let i = 1; i < n; i++) {
//     jumps[i] = Infinity;
//     for (let j = 0; j < i; j++) {
//       if (i <= j + arr[j] && jumps[j] !== Infinity) {
//         jumps[i] = Math.min(jumps[i], jumps[j] + 1);
//         break;
//       }
//     }
//   }

//   return jumps[n - 1];
// }


// while loop version??
// const minJumps = (arr) => {

// }


module.exports = minJumps
