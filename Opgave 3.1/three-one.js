const canLiftMjolnir = [
  "Thor",
  "Ironman",
  "Hulk",
  "CaptainAmerica",
  "BlackWidow",
  "Hawkeye",
  "Superman",
  "WonderWoman",
  "Flash",
  "Aquaman",
  "GreenLantern",
  "Cyborg",
  "Spiderman",
  "DoctorStrange"
];

const parseNumbers = heroes => `${heroes.slice(0, 12).map(h => parseInt(h)).join('')} Batman! (Marc)`;

console.log(parseNumbers(canLiftMjolnir));