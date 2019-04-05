'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1) {
    if (array[0] === target) return true;
    return false;
  }
  const mid = Math.floor(array.length / 2);
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    let halfArray = array.slice(0, mid);
    return binarySearch(halfArray, target);
  } else {
    let halfArray = array.slice(mid, array.length);
    return binarySearch(halfArray, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
