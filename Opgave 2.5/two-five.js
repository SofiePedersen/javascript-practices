const fruits = ["æble", "banan", "pære", "banan", "kiwi", "banan"];

const searchValue = "banan";

// Opretter en variable hvor map-metoden opretter et nyt array udfra hvad min if-else statement returnere.
// Map() - Value (Required), Index (Optional), Array(Optional) <- Dette er de parameter som map() forventer & understøtter.
const indices = fruits.map((fruit, i) => {
    if (fruit === searchValue) {
      return i;
    }

    else {
      return -1;
    }
  })

  // Filter funktionen fjerner de -1 som vi får map-funktionen til at spytte ud i konsollen.
  .filter((i) => {
    return i !== -1;
  });

console.log(indices);