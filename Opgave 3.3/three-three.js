// Den oprindelige funktion (callback-baseret)
function findMultiverseNumber(number, successCallback, failureCallback) {
  if (number < 0) {
    failureCallback(new Error("All universes in the multiverse give only integers."));
  } else if (number !== Math.trunc(number)) {
    failureCallback(new Error("All universes in the multiverse give only integers."));
  } else {
    setTimeout(() => {
      if (number === 0 || number === 1) {
        successCallback(1);
      } else {
        let factorialResult = number;
        while (number > 1) {
          number -= 1;
          factorialResult *= number;
        }
        successCallback(factorialResult);
      }
    }, 2000); // 2 sekunders ventetid
  }
}

// Spørg brugeren efter et tal
const userInput = prompt("Indtast et heltal til multiverset:");
const userNumber = parseInt(userInput);

// Opretter en wrapper hvor vi laver et promise med 2 parameter (resolve, reject)
function findMultiverseNumberAsync(number) {
  return new Promise((resolve, reject) => {
    findMultiverseNumber(number, resolve, reject);
  });
}


// Find HTML-elementet hvor vi skal vise resultatet
const messageElement = document.getElementById("message");
if (!messageElement) {
  throw new Error("Elementet med id='message' mangler i HTML!");
}

// Brug Promise med then, catch og finally
findMultiverseNumberAsync(userNumber)
  .then(result => {
    messageElement.innerHTML = `The number you provided is sending you to Earth #${result}`;
    console.log(`This is your result: ${result}`);
  })
  .catch(error => {
    messageElement.innerHTML = `There was an error with your sling-ring: ${error.message} and you remain where you are.`;
    console.error(`Error: ${error.message}`);
  })
  .finally(() => {
    console.log("Multiverse calculation finished.");
  });
