// Spread (...) “pakker ud” indholdet af et array, objekt eller iterable.
//
// I arrays: spreder elementer ud som individuelle værdier.
// I objekter: spreder key-value-par ud i et nyt objekt.
// I funktioner: spreder arrayets elementer ud som argumenter.

const numbers = [5, 9, 2, 17, 3];
const maxNumber = Math.max(...numbers);

console.log(maxNumber);

const original = [1, 2, 3];
const clone = [...original, 4, 5];

console.log(clone);

const person = { name: "Maja", age: 28 };
const updated = { ...person, age: 29, city: "Aarhus" };

console.log(updated);