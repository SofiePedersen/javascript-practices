function checkUserInput(username, password) {

  // Her opretter vi en regular expression (regex) til at tjekke emails
  const regexEmail = /\S+@\S+\.\S+/;

  // Starter med at tjekke om vores username eller password mangler
  if (!username || !password) {
    return "Indtast venligst et gyldigt brugernavn og kodeord.";
  }

  // Her bruger vi vores regex til at tjekke vores username - Er brugernavnet en gyldig email? 
  // hvis ikke sender den vores string ud i consollen. 
  if (!regexEmail.test(username)) {
    return "Brugernavnet skal være en gyldig email.";
  }

  // Her bruger jeg .length til at sørge for det brugerens password skal være længere end 8.
  if (password.length < 8) {
    return "Kodeordet skal være mindst 8 tegn langt.";
  }

  // ---------------------------------------------------------------------------------
  // Her har jeg fået ChatGPT til at hjælpe
  //
  // /[A-Z]/ tjekker efter mindst ét stort bogstav
  // /[a-z]/ tjekker efter mindst ét lille bogstav
  // /[0-9]/ tjekker efter mindst ét tal
  // /[^A-Za-z0-9]/ tjekker efter mindst ét specialtegn
  //
  // De tjekker efter værdierne og returnere enten True eller False (Boolean)
  // ---------------------------------------------------------------------------------

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    return "Kodeordet skal indeholde mindst: 1 stort bogstav, 1 lille bogstav, 1 tal og 1 specialtegn.";
  }

  return `Velkommen, ${username}.`;
}

console.log(checkUserInput("test@mail.com", "Password123!")); 
console.log(checkUserInput("ikkeemail", "Password123!")); 
console.log(checkUserInput("test@mail.com", "kode")); 
console.log(checkUserInput("test@mail.com", "password123"));