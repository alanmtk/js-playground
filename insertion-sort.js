// Agarro todos los elementos menos uno, los ordeno recursivamente 
// e inserto el que me quedo donde corresponde
const insertionSort = (xs) => {
  if (xs.length < 2) return xs;

  const init = xs.slice(0, -1);
  const last = xs.pop();

  return insert(last, insertionSort(init));
};

const insert = (x, xs) => {
  for (let i = 0; i <= xs.length; i++) {
    if (x < xs[i]) {
      return [...xs.slice(0, i), x, ...xs.slice(i)];
    }
  }

  return [...xs, x];
};

// Para testear la igualdad de las listas en base a los elementos
const arraysEqual = (xs, ys) => JSON.stringify(xs) === JSON.stringify(ys);

console.log(arraysEqual(insertionSort([2, 3, 1]), [1, 2, 3]));
console.log(arraysEqual(insertionSort([1]), [1]));
console.log(arraysEqual(insertionSort([22, 1, 3, 1]), [1, 1, 3, 22]));
console.log(arraysEqual(insertionSort([251, 10, 1, 1]), [1, 1, 10, 251]));
console.log(arraysEqual(insertionSort([]), []));
