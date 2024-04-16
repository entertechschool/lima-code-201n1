// JS: Arrays:

let personas = []; // typo de dato = array.

personas[0] = "bruno"; // En el primer elemento, el dato es String y el valor es 'bruno'.

personas[1] = "diego";

personas[2] = 678;

console.log(personas);

// // Quiero reemplazar el 678, por renato.

personas[2] = "renato";

console.log(personas);

// Otra forma de hacer lo mismo en 1 linea:

let hermanos = ["bruno", "diego", ["grabiel", "thomas"], "mariana", null];
console.log(hermanos);

// Elementos de hermanos:
// 'bruno' -> String / index: 0
// 'diego' -> String / index: 1
// ['gabriel', 'thomas'] -> Array / index: 2
// 'mariana' -> String / index: 3
// null -> null / index: 4
