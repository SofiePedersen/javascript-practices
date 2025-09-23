function convertCurrency(amountUSD, decimals = 2) {
  const rate = 7.5;
  const amountDKK = amountUSD * rate;

  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amountDKK);
}

console.log(convertCurrency(100));
console.log(convertCurrency(250));

// Det andet argument som medsendes her, vil erstatte 2 tallet i vores function, 
// altså vil det kunne ændre hvor mange decimaler vi får med ud i consollen.
console.log(convertCurrency(250, 4));
console.log(convertCurrency(250, 6));