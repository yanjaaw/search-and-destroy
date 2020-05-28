'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let middle = Math.floor(array.length /2)
	console.log("array", array)
	console.log("middle idx", middle)
	console.log("middle value", array[middle])

	if (array.length === 1 && array[0] !== target){
		return false;
	}
	else if (array[middle] === target){
		return true;
	}
	else if (array[middle] < target){
		return binarySearch(array.slice(middle), target)
	}
	else {
		return binarySearch(array.slice(0, middle), target)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
