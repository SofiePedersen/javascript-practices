// Falsy værdier = undefined, null, 0, NaN, false og tomme string " ";
// Short-circuit operator &&(betyder og) ||(betyder eller) 

function checkUserInput(username, password) {
  if (!username || !password) {
    return "Indtast venligst et gyldigt brugernavn og kodeord.";
  }
  else {
    return `Velkommen, ${username}.`;
  }
};

console.log(checkUserInput('Julemand', 'password123')); 
console.log(checkUserInput('', 'password123')); 
console.log(checkUserInput('Julemand', '')); 
