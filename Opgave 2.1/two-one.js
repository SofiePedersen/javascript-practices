// i18n er synonym med intl. som er forkortelse for Internationalization

const items = [
  "æble",
  "banan",
  "pære",
  "appelsin",
  "melon",
  "druer",
  "jordbær",
  "blåbær",
  "banan",  // gentaget værdi
  "kiwi"
];

function formatList(locale, style = "long", type = "conjunction") {
  const formatter = new Intl.ListFormat(locale, { style, type });
  return formatter.format(items);
}

console.log(formatList("da-DK", "long", "conjunction"));
console.log(formatList("da-DK", "short", "conjunction"));
console.log(formatList("da-DK", "narrow", "disjunction")); 

console.log(formatList("en-US", "long", "conjunction"));
console.log(formatList("en-US", "short", "conjunction"));
console.log(formatList("en-US", "narrow", "conjunction"));

// Intl.ListFormat er smart fordi:
//
// Det sparer dig for at håndkode grammatiske regler.
// Det gør dit system fleksibelt og skalerbart til mange sprog.
// Det sikrer en bedre brugeroplevelse, fordi teksterne føles naturlige og ikke maskinoversatte.