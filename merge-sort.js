// Si la longitud de la lista es 0 ó 1, entonces ya está ordenada. En otro caso:
// Dividir la lista desordenada en dos sublistas de aproximadamente la mitad del tamaño.
// Ordenar cada sublista recursivamente aplicando el ordenamiento por mezcla.
// Mezclar las dos sublistas en una sola lista ordenada.
const mergeSort = (xs) => {
  if (!xs.length || xs.length === 1) return xs;

  const half = Math.floor(xs.length / 2);

  let leftHalf = xs.slice(0, half);
  let rightHalf = xs.slice(half);
  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);

  return merge(leftHalf, rightHalf);
};

const merge = (xs, ys) => {
  const merged = [];

  while (xs.length && ys.length) {
    xs[0] < ys[0] ? merged.push(xs.shift()) : merged.push(ys.shift());
  }

  // Al salir del while alguna de las dos listas va a quedarse sin elementos, en base a esto
  // puedo juntar los elementos de las tres listas y me queda la original ordenada
  return [...merged, ...xs, ...ys];
};

// Para testear la igualdad de las listas en base a los elementos
const arraysEqual = (xs, ys) => JSON.stringify(xs) === JSON.stringify(ys);

console.log(arraysEqual(mergeSort([5, 2, 7, 1, 10, 15, 2]), [1, 2, 2, 5, 7, 10, 15]));
console.log(arraysEqual(mergeSort([2, 1, 3]), [1, 2, 3]));
console.log(arraysEqual(mergeSort([3, 3, 5, 1]), [1, 3, 3, 5]));
console.log(arraysEqual(mergeSort([7, 1, 6, 1]), [1, 1, 6, 7]));
console.log(arraysEqual(mergeSort([]), []));
