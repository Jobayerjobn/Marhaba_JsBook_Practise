const numbers = [10, 25, 26, 31, 42, 84, 38, 12, 1];
console.log(numbers[0]);
console.log(numbers[2]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[3]);
console.log(numbers[7]);
console.log(numbers[6]);
console.log(numbers[9]);
console.log(numbers[10]);
console.log(numbers[8]);

const arrayNumbers = [10, 25, 31, 42, 84, 38, 12, 1];
const fourth = arrayNumbers[4]; // index assign variable 
console.log(fourth);

const anotherNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
const targetNumbers = anotherNumbers[18]; //this index isn't find the array.
console.log(targetNumbers); //undefine

const array = [5, 20, 40, 50];
const updateArray = array[3] = 4;
console.log(array);
const arrayOf =  [16, 15, 12, 13, 14];
const changeArray = arrayOf[0] = 100;
console.log(arrayOf);

const valueOfArray = [8, 10, 40, 50 , 100.0];
const exchangeValueOfArray = valueOfArray[4] = 10;
console.log(valueOfArray);

const arry = [20, 40, 100, 72, 86, 90];
const findIndexOfArray = arry[0, 1000];
console.log(findIndexOfArray); //error

