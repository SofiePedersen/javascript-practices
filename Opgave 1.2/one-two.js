// Hvis man kalder en Const for Name kan det ende i at sige din const er null eller deprecated.
const puppyName = "Enzo";
const age = 2.5;
const isAlive = false;
const cuteness = 999999999999999999999999n;

const puppy = {
    puppyName,
    age,
    isAlive,
    cuteness,
    goodBoy
};

function goodBoy() {
    console.log('You are a good boy, ' + puppy.puppyName);
}

let address;
let horse = null;

console.log(puppy);
puppy.goodBoy();

const backstory = 'Enzo was a good boy, who turned ' + age + ' years, before his untimely end :(';
console.log(backstory);

// multiplicere man med boolean værdier, vil det enten komme ud som 0 (fordi alt man ganger med 0 giver 0, og false er 0)
// eller som som det tal man ganger med. Da true er 1, vil regne stykket så hedde - age(2.5) * 1 = 2.5 
const multiplication = age * isAlive;
console.log(multiplication);

// Tester om det er samme værdi
const compareEquality = address == horse;

// Tester om det er samme datatype
const compareIdentity = address === horse;

console.log(compareEquality, compareIdentity);
