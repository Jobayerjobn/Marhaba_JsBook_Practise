const set = new Set([10, 20, 30, 40]);
console.log(set); //Set(4) { 10, 20, 30, 40 }

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueNumbers = new Set(number);
console.log(uniqueNumbers); //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

const againNumbers = new Set([1, 2, 2,3, 4, 5, 6]);
console.log(againNumbers);//Set(6) { 1, 2, 3, 4, 5, 6 }

const numbers = [1, 2, 2, 3, 4, 5, 6, 7];
const uniqueArray = [...new Set(numbers)];
console.log(uniqueArray);

const numbers2 = [1, 2, 3, 4, 5, 6, 6, 7];
const justFunc = [new Set(numbers2)];
console.log(justFunc)//[ Set(7) { 1, 2, 3, 4, 5, 6, 7 } ]

const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
console.log(mySet);//Set(3) { 10, 20, 30 }

console.log(mySet.has(10));//true

mySet.delete(30);
console.log(mySet);//Set(2) { 10, 20 }


const myMap = new Map();
myMap.set('Name', 'Rahim');
myMap.set('age', 19);
myMap.set('email', 'jobayerjoban0048@gmail.com');
myMap.set(19, 'hello');

console.log(myMap);
console.log(myMap.size);
console.log(myMap.get('age'));
console.log(myMap.get(19));

