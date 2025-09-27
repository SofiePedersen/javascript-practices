const canLiftMjolnir = [
  "Thor",
  "Iron Man",
  "Hulk",
  "Doctor Strange",
  "Deadpool",
  "Daredevil",
  "Spider-Man",
  "Black Widow",
  "Vision",
  "Doctor Doom"
];

let mjolnirHeroesD = canLiftMjolnir.filter(
  hero => hero[0].toLowerCase() === 'd'
);

console.log(mjolnirHeroesD);