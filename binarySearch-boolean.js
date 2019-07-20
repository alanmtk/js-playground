// Make a binary search over an Array returning a boolean if the element exists
const binarySearch = (x, xs) => {
  if (xs.length === 0) return false;

  const cursor = Math.floor(xs.length / 2);
  const element = xs[cursor];

  if (element === x) return true;
  if (x < element) return binarySearch(x, xs.slice(0, cursor));
  if (x > element) return binarySearch(x, xs.slice(cursor + 1));
};

console.log(binarySearch(9, []) === false);
console.log(binarySearch(3, [1, 2, 3, 4]) === true);
console.log(binarySearch(1, [1, 2, 3, 4]) === true);
console.log(binarySearch(4, [1, 2, 3, 4]) === true);
console.log(binarySearch(9, [1, 2, 3, 4]) === false);
console.log(binarySearch(1, [2, 3, 4]) === false);
