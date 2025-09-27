const canLiftMjolnir = [
  {
    heroName: "Thor", alterEgo: "Thor Odinson", age: 1000, sex: "male",
    powers: ['Superhuman strength', 'Weather manipulation', 'Flight', 'Longevity'],
    description: "Thor is a founding member of the Avengers and is known for his hammer Mjolnir."
  },
  {
    heroName: "Iron Man", alterEgo: "Tony Stark", age: 45, sex: "male",
    powers: ['Powered armor suit', 'Genius intellect', 'Flight', 'Energy blasts'],
    description: "A genius billionaire who built the Iron Man suit."
  },
  {
    heroName: "Hulk", alterEgo: "Bruce Banner", age: 40, sex: "male",
    powers: ['Superhuman strength', 'Regeneration', 'Durability'],
    description: "Transforms into the Hulk when angry."
  },
  {
    heroName: "Captain America", alterEgo: "Steve Rogers", age: 100, sex: "male",
    powers: ['Enhanced strength', 'Agility', 'Indomitable will'],
    description: "The first Avenger with a vibranium shield."
  },
  {
    heroName: "Black Widow", alterEgo: "Natasha Romanoff", age: 35, sex: "female",
    powers: ['Martial arts', 'Espionage', 'Peak human condition'],
    description: "Master spy and assassin, member of the Avengers."
  },
  {
    heroName: "Hawkeye", alterEgo: "Clint Barton", age: 38, sex: "male",
    powers: ['Archery', 'Marksmanship', 'Agility'],
    description: "The sharpshooter of the Avengers."
  },
  {
    heroName: "Wonder Woman", alterEgo: "Diana Prince", age: 5000, sex: "female",
    powers: ['Superhuman strength', 'Flight', 'Combat skills'],
    description: "Amazonian warrior princess."
  },
  {
    heroName: "Superman", alterEgo: "Clark Kent", age: 35, sex: "male",
    powers: ['Super strength', 'X-ray vision', 'Flight'],
    description: "The Man of Steel from Krypton."
  },
  {
    heroName: "Flash", alterEgo: "Barry Allen", age: 28, sex: "male",
    powers: ['Super speed', 'Time travel', 'Accelerated healing'],
    description: "Fastest man alive."
  },
  {
    heroName: "Spider-Man", alterEgo: "Peter Parker", age: 21, sex: "male",
    powers: ['Wall-crawling', 'Spider-sense', 'Super strength'],
    description: "Friendly neighborhood Spider-Man."
  }
];

const heroList = document.getElementById("hero-list");

function renderHeroes() {
  heroList.innerHTML = canLiftMjolnir.map(hero => `
    <div class="hero">
      <h2>${hero.heroName}</h2>
      <p><strong>Alter Ego:</strong> ${hero.alterEgo}</p>
      <p><strong>Age:</strong> ${hero.age}</p>
      <p><strong>Sex:</strong> ${hero.sex}</p>
      <p><strong>Powers:</strong></p>
      <ul class="powers">${hero.powers.map(p => `<li>${p}</li>`).join('')}</ul>
      <p>${hero.description}</p>
    </div>
  `).join('');
}

renderHeroes();

// Form handler
document.getElementById("hero-form").addEventListener("submit", e => {
  e.preventDefault();
  const newHero = {
    heroName: document.getElementById("heroName").value,
    alterEgo: document.getElementById("alterEgo").value,
    age: parseInt(document.getElementById("age").value),
    sex: document.getElementById("sex").value,
    powers: document.getElementById("powers").value.split(",").map(p => p.trim()),
    description: document.getElementById("description").value
  };

  canLiftMjolnir.push(newHero);

  renderHeroes();
  
  e.target.reset(); // clear form
});