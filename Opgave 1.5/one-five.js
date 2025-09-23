function generateRandomNumber(min = 66, max = 500) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Execute Order ${generateRandomNumber()}`);       
console.log(`Execute Order ${generateRandomNumber(100, 200)}`); 
console.log(`Execute Order ${generateRandomNumber(1, 10)}`);    