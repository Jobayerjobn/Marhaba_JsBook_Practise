//Problem-1
const mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(mySet);
//output:Set(5) { 1, 2, 3, 4, 5 }

//Problem-2
const newSet = new Set([10, 20, 10, 30]);
console.log(newSet);//Set(3) { 10, 20, 30 }

const set2 = new Set();
set2.add(10);
set2.add(20);
set2.add(10);
set2.add(30);
console.log(set2);
//output:Set(3) { 10, 20, 30 }

//Problem-3
const array = [1, 2, 3, 4, 2, 1, 5, 5];
const arraySet = [...new Set(array)]; //destructuring by the spread operator
console.log(arraySet);
//output:[ 1, 2, 3, 4, 5 ]

const arr = [1, 2, 3, 4, 5, 6, 5, 5];
const arrSet = [new Set(arr)];
console.log(arrSet);
//output:[ Set(6) { 1, 2, 3, 4, 5, 6 } ]