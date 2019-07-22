// Buscar el mínimo elemento de la lista
// Intercambiarlo con el primero
// Buscar el siguiente mínimo en el resto de la lista
// Intercambiarlo con el segundo
const selectionSort = (xs) => {
  for (let i = 0; i < xs.length; i++) {
    for (let j = i + 1; j < xs.length; j++) {
      console.log(xs[i], xs[j]);
      if (xs[j] < xs[i]) {
        const tmp = xs[i];
        xs[i] = xs[j];
        xs[j] = tmp;
        break;
      }
    }
  }
  return xs;
};

// Para testear la igualdad de las listas en base a los elementos
const arraysEqual = (xs, ys) => JSON.stringify(xs) === JSON.stringify(ys);

console.log(arraysEqual(selectionSort([2, 3, 1]), [1, 2, 3]));
console.log(arraysEqual(selectionSort([1]), [1]));
console.log(arraysEqual(selectionSort([22, 1, 3, 1]), [1, 1, 3, 22]));
console.log(arraysEqual(selectionSort([251, 10, 1, 1]), [1, 1, 10, 251]));
console.log(arraysEqual(selectionSort([]), []));
