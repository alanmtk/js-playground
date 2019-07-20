// Make a binary search over an Array returning the index if the element exists or -1 if it does not.
const binarySearch = (x, xs) => {
  if (xs.length === 0) return -1;

  let start = 0; let
    end = xs.length;

  while (xs.slice(start, end).length > 0) {
    const arr = xs.slice(start, end);
    const cursor = Math.floor(arr.length / 2);
    const element = arr[cursor];

    if (element === x) return start + cursor;
    if (x < element) end = start + cursor;
    if (x > element) start = start + cursor + 1;
  }

  return -1;
};

console.log(binarySearch(9, []) === -1);
console.log(binarySearch(3, [1, 2, 3, 4]) === 2);
console.log(binarySearch(1, [1, 2, 3, 4]) === 0);
console.log(binarySearch(4, [1, 2, 3, 4]) === 3);
console.log(binarySearch(9, [1, 2, 3, 4]) === -1);
console.log(binarySearch(1, [2, 3, 4]) === -1);
