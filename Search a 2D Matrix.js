const binarySearch = (innerArray, target) => {
  let left = 0;
  let right = innerArray.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (innerArray[mid] === target) return true;
    if (innerArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

var searchMatrix = function(matrix, target) {
     let left = 0;
  let right = matrix.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let innerArray = matrix[mid];

    if (
      innerArray[0] <= target &&
      innerArray[innerArray.length - 1] >= target
    ) {
      return binarySearch(innerArray, target);
    }

    if (innerArray[innerArray.length - 1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
