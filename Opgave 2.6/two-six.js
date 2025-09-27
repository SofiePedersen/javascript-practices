const heroes = [
  "Spider-Man",
  "Iron Man",
  "Thor",
  "Hulk",
  "Black Widow",
  "Doctor Strange",
  "Loki",
  "R2D2"
];

// Her bruger jeg filter()  på mit heroes array til at finde alle der ikke har mellemrum i navnet
const noSpaces = heroes.filter((hero) => {
  return !hero.includes(" "); // behold kun hvis der IKKE er mellemrum
});

// Filter efter alle som starter med bogstavet B
const startsWithB = heroes.filter((hero) => hero.startsWith("B"));

// Filter efter hvilke helte der slutter deres navn med man
const endsWithMan = heroes.filter((hero) => hero.endsWith("Man"));

// Filter efter hvilke helte der inkludere bogstavet K i deres navn
const includesK = heroes.filter((hero) => {
  return hero.includes("K") || hero.includes("k"); 
});

console.log(noSpaces);
console.log(startsWithB);
console.log(endsWithMan);
console.log(includesK);