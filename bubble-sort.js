const bubbleSort = (xs) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < xs.length; i++) {
      if (xs[i + 1] < xs[i]) {
        const tmp = xs[i];
        xs[i] = xs[i + 1];
        xs[i + 1] = tmp;
        swapped = true;
      }
    }
  }

  return xs;
};

// Para testear la igualdad de las listas en base a los elementos
const arraysEqual = (xs, ys) => JSON.stringify(xs) === JSON.stringify(ys);

console.log(arraysEqual(bubbleSort([2, 3, 1]), [1, 2, 3]));
console.log(arraysEqual(bubbleSort([1]), [1]));
console.log(arraysEqual(bubbleSort([22, 1, 3, 1]), [1, 1, 3, 22]));
console.log(arraysEqual(bubbleSort([251, 10, 1, 1]), [1, 1, 10, 251]));
console.log(arraysEqual(bubbleSort([]), []));
