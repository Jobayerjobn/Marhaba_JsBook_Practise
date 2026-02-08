const country = 'Bangladesh';
const division  = "Noyakhali";
console.log(country);
console.log(typeof division);
const numbers = [54, 98, 78, 21, 65];
console.log(numbers);
console.log(typeof numbers);
console.log(Array.isArray(numbers));


const capital = 'Dhaka';
const length = capital.length;
console.log(length);

const againCapital = 'Dha ka';
const length1 = againCapital.length;
console.log(length1); //increase length 1 because gap  between Dhaka.

const alsoCapital = "Dhaka";
console.log(alsoCapital[0]);
alsoCapital[0] = "d";
console.log(alsoCapital);
const number = [10, 20, 30, 40];
number[0] = 50;
console.log(number);

const name = 'Abid';
console.log(name.includes('d'));//true;

const language =  'javascript';
console.log(language.indexOf("rip"));
console.log(language.indexOf('j'));
console.log(language.indexOf("s"));




