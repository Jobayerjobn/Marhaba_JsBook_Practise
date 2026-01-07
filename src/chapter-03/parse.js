const fatherAge = '50';
const sonAge = '20';
const totalAge = fatherAge + sonAge;
console.log(totalAge);
//output:5020

const suger = parseInt('20');
console.log(suger);
//output:20

const thenFatherAge = '50';
console.log(parseInt(thenFatherAge));
//output: 50

const myFatherAge = '60';
const fatherAgeNumber = parseInt(myFatherAge);
console.log(fatherAgeNumber);
//output:60

const input = 'x20';
const number = parseInt(input);
console.log(number);
//output: NaN 

//const age = parsInt('adddgeeg');
//const  weight = parseInt('twenty');
//console.log(age, weight);
//output: NaN NaN 

const age = parseInt('50f');
const weight = parseInt('9twenty');
const address = parseInt('tom60');
console.log(age, weight, address);

const suger1 = parseInt('1.222222');
console.log(suger1);
//output:1

const suger2 = parseFloat('1.22222');
console.log(suger2);
//output: 1.22222


const str = '200';
const num = Number(str);
console.log(num);
//output: 200

//toFixed method
const first = 12.13568;
const second = 31.22564;
const total = first + second;
console.log(total);
console.log(total.toFixed(2));
console.log(typeof total);
//output:'43.36'

const first1 = 12.13568;
const second2 = 31.22564;
const  total1 = first1 + second2;
const totalNumber = parseFloat(total.toFixed(2));
console.log(totalNumber);
//output: 43.36

//Wrong way use toFixed.
const price = 99.99;
const delivery = 10.99;
const totalPrice = price + delivery;
const finalPrice = totalPrice.toFixed(2);
console.log(finalPrice);
console.log(typeof finalPrice);
//output: 10.98
// if add vat or  extra charge 

const vat = 5;
const grandTotal = finalPrice + vat;
console.log(grandTotal);
//output: 110.985 // wrong answer. just add 5.

//Right way 
const value = 99.99;
const deliveryCharge = 10.99;
const totalValue = value + deliveryCharge;
const numCul = Number(totalValue.toFixed(2));
console.log(numCul);
// if add vat or extra charge..

const extraCharge = 5;
const grandValue = numCul + extraCharge;
console.log(grandValue);
//output: 115 //This  right answer.

// toFixed = just show or UX , invoice 
// Number = calculation;









