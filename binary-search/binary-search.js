'use strict';

// 1st version
// const binarySearch = (array, target) => {
// 	let middle = Math.floor(array.length /2)
// 	console.log("array", array)
// 	console.log("middle idx", middle)
// 	console.log("middle value", array[middle])

// 	if (array.length === 1 && array[0] !== target){
// 		return false;
// 	}
// 	else if (array[middle] === target){
// 		return true;
// 	}
// 	else if (array[middle] < target){
// 		return binarySearch(array.slice(middle), target)
// 	}
// 	else {
// 		return binarySearch(array.slice(0, middle), target)
// 	}
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

// const binarySearch = (array, target) => {
// 	let left = 0;
// 	let right = array.length - 1;
// 	let middle = Math.floor((left + right)/ 2);
// 	//  const test1 = [1,3,4,5,10,15,20,22,23,98,1000];
// 	//  target = 10
// 		while (right >= left) {
		
// 		if (array[middle] === target) {
// 			return true;
// 		}
// 		if (array[middle] > target) {
// 			right = middle - 1;
// 			middle = Math.floor((left + right)/ 2)
// 		} else {
// 			left = middle + 1;
// 			middle = Math.floor((left + right)/ 2)
// 			console.log('left is', array[left])
// 			console.log('middle is', array[middle])
// 			console.log('right is', array[right])
// 		}
// 	}
// 	return false;
// }

const binarySearch = (array, target, left = 0, right = array.length) => {
	if (right < left) {
		return false
	}
	let middle = Math.floor((left + right)/ 2);
	if (array[middle] === target) {
		return true
	} else if (array[middle] > target) {
		right = middle - 1;
		return binarySearch(array, target, left, right)
	} else {
		left = middle + 1;
		return binarySearch(array, target, left, right)
	}
	// keep re-assigning left and right,
	// call it recursively.
	// no loops
}

module.exports = binarySearch
