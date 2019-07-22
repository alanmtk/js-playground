// Elegir un elemento del arreglo de elementos a ordenar, al que llamaremos pivote.
// Resituar los demás elementos de la lista a cada lado del pivote, de manera que a un lado queden todos los menores que él, y al otro los mayores. Los elementos iguales al pivote pueden ser colocados tanto a su derecha como a su izquierda, dependiendo de la implementación deseada. En este momento, el pivote ocupa exactamente el lugar que le corresponderá en la lista ordenada.
// La lista queda separada en dos sublistas, una formada por los elementos a la izquierda del pivote, y otra por los elementos a su derecha.
// Repetir este proceso de forma recursiva para cada sublista mientras éstas contengan más de un elemento. Una vez terminado este proceso todos los elementos estarán ordenados.
const quickSort = (xs) => {
  if (xs.length < 2) return xs;

  const pivot = xs[0];
  
  let lower = [];
  let higher = [];
  
  for (let i = 1; i < xs.length; i++) {
    xs[i] < pivot ? lower.push(xs[i]) : higher.push(xs[i]);
  }
  
  lower = quickSort(lower);
  higher = quickSort(higher);
  
  return [...lower, pivot, ...higher];
};

// Para testear la igualdad de las listas en base a los elementos
const arraysEqual = (xs, ys) => JSON.stringify(xs) === JSON.stringify(ys);

console.log(arraysEqual(quickSort([2,3,1]), [1,2,3]));
console.log(arraysEqual(quickSort([1]), [1]));
console.log(arraysEqual(quickSort([22,1,3,1]), [1,1,3,22]));
console.log(arraysEqual(quickSort([251,10,1,1]), [1,1,10,251]));
console.log(arraysEqual(quickSort([]), []));