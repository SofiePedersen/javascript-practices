const canLiftMjolnir = [
  "Thor",
  "Iron Man",
  "Hulk",
  "Thor",   // gentagelse
  "Vision",
  "Iron Man" // gentagelse
];

console.log([...new Set(canLiftMjolnir)]);

// Den gamle kode så sådan her ud:

// --------------------------------------------------------------------------------------
// const canLiftMjolnirSet = new Set(canLiftMjolnir);
// const uniqueMjolnirHeroes = Array.from(canLiftMjolnirSet);
// console.log(uniqueMjolnirHeroes);
// --------------------------------------------------------------------------------------

// Ved at bruge vores spread operator (...) behøver vi faktisk ikke at lave 2 const.
// new Set vil automatisk lave et set af værdier hvor de ikke duplikere hinanden. 
// Ved hjælp af spread operatoren vil de udpakkede værdier nu samles til et nyt Array.