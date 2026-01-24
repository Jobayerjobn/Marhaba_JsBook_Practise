# Chapter-13 | Array method

## map()
The map function internally runs a loop and every elements serve callback function,callback function do some works every elements.Then return new array.But map can n't change original array.

```js
example
const numbers = [4, 5, 2, 8, 10];
const results = numbers.map(num => num * 2);
console.log(results);//[ 8, 10, 4, 16, 20 ] return new array
console.log(numbers);//[ 4, 5, 2, 8, 10 ] does not change original array
```
## forEach()
The forEach function internally runs a loop, and work every elements.But does not return.

```js
example
const numbers2 = [1, 5, 6, 4, 15];
const result = numbers2.forEach(n => console.log(n)); // 1 5 6 4 15 just work
console.log(result); //undefined ..no return 
```

## filter()
filter works four ways.<br>
**firstly**  internally runs a loop.
**secondly** check every elements by conditions.
**thirdly**  push all true values in newArray
**fourthly** return new array

```js 
example
const players = [75, 65, 67, 71, 55, 59];
const selected = players.filter(p => p > 70);
console.log(selected);//[ 75, 71 ] true values are return
console.log(players);//[ 75, 65, 67, 71, 55, 59 ] original array
```
## find()
find works as a filter.but have some difference.find push first true value in loop. and return these value.

```js
example
const players = [75, 65, 67, 60, 71, 55, 59];
const selected = players.find(players => players > 70);
console.log(selected); //75 true first value in the array
console.log(players);// [75, 65, 67, 60, 71, 55,  59] does not change original array
```
## findIndex()
findIndex return matching value index first truth value,if condition is true.Otherwise return -1 

```js
example
const numbers = [10, 25, 22, 30, 50];
const index = numbers.findIndex(a => a > 27);
console.log(index); //3 
console.log(numbers); [ 10, 25, 22, 30, 50 ] //does not change original value
```
## some()
The some function as works as filter, find. but if one value or some values are true.return true.If no values are true then return false.

```js
example
const scores = [30, 45, 55, 80, 90];
const hasPassed  = scores.some(score =>  score >= 80);
console.log(hasPassed); //true 
console.log(scores); //[ 30, 45, 55, 80, 90 ] does not change original value
```
## every()
every methods checks are all items, if all values are true then return true.Otherwise return false.

```js
example
const scores = [60, 45, 55, 80, 90];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); //false
console.log(scores); //[ 60, 45, 55, 80, 90 ] does not change original array
```
## flat()
flat method is used to nested level array convert to single array. or flatten array.

```js
const nested = [1, 2, 3, [4, 5, 6,[5, 6]]];
const flattened = nested.flat(2);
console.log(flattened); //[1, 2, 3, 4, 5, 6, 5, 6]
console.log(nested); //[ 1, 2, 3, [ 4, 5, 6, [ 5, 6 ] ] ] does not change original array
```
## reduce()
reduce is very powerful array method because map/ filter are special use case of reduce, its used too multiple works.This method give are the parameter. reduce is accumulator method.

```js
const products = [
  {id: 1, name: 'lenevo'},
  {id: 2, name: 'dell'}, 
  {id: 4, name: 'mac'}
];
const names  = products.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
console.log(names); // 7
```
## sort()
sort method used to order alphabetically or numerically.This method change original array.and return value

```js
example
const friends = ['Zara', 'Bob', 'Anna', 'Chris'];
friends.sort();
console.log(friends);[ 'Anna', 'Bob', 'Chris', 'Zara' ] //change original array

```

## revers()
revers method used to reverse every elements.

```js
const numbers = [10, 20, 30, 40, 50];
numbers.reverse();
console.log(numbers); //[ 50, 40, 30, 20, 10 ] changed original array
```
## slice()
slice method use to slice elements.Its gives to parameter starting index, and end index.But does not change main array

```js
example
const pizzaSlice = ['Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet'];
const selectedSlice = pizzaSlice.slice(1, 4);
console.log(selectedSlice); //[ 'Cheese', 'Veggie', 'BBQ' ]
console.log(pizzaSlice); // [ 'Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet' ]  does not change original array
```
## splice()
splice used to multiple works,we are find out target elements.it use to remove , add elements, gives two parameter first starting index and how  much values with works.and get value modify values change main arrays.

```js
example
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const deleted = numbers.splice(3, 3, 44, 599, 599);
console.log(deleted);//[ 4, 5, 6 ]
console.log(numbers);//[1, 2, 3, 44, 599,599, 7, 8,  9,  10]

const number = [1, 2, 3, 4];
number.splice(2, 1);
console.log(number); //[ 1, 2, 4 ] changed main array
```
