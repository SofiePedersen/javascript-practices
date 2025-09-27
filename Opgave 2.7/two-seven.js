const people = [
  { name: "Peter", age: 25 },
  { name: "Tony", age: 48 },
  { name: "Shuri", age: 16 }
];

// sort(compareFunction) giver dig to elementer ad gangen: a og b.
//
// Hvis funktionen returnerer et negativt tal, kommer a før b.
// Hvis funktionen returnerer et positivt tal, kommer b før a.
// Hvis funktionen returnerer 0, lader den dem stå som de er.
//
// Eksempel:
// 2 - 100 = -98 → negativt → 2 før 100.
// 50 - 2 = 48 → positivt → 50 efter 2.

people.sort((a, b) => a.age - b.age);

console.log(people);

const names = ["Åse", "Anne", "Ægir", "Bent"];

names.sort((a, b) => a.localeCompare(b, "da"));

// localeCompare sammenligner to tekster a og b ift. alfabetet:
// < 0 → a før b
// > 0 → a efter b
// 0   → a og b er ens

// console.log("Anne".localeCompare("Åse", "da")); 
// // → negativt tal (Anne skal stå før Åse i dansk alfabet)

// console.log("Åse".localeCompare("Anne", "da")); 
// // → positivt tal (Åse skal stå efter Anne)

// console.log("Anne".localeCompare("Anne", "da")); 
// // → 0 (de er ens)

console.log(names);