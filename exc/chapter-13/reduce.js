//Problem-1
const array = [5, 10, 15, 20, 25];
const useReduce = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    

}, 0);
console.log(useReduce);
//output: 75

//Problem-2
const myStore = [
    {name: 'Shampo', price: 100},
    {name: 'ToothPaste', price: 75}
];
const allProductValue = myStore.reduce((a, b) => {
    return a + b.price;

}, 0);
console.log(allProductValue);
//output:175

const allProductName = myStore.reduce((findName , name) =>{
    findName.push(name.name);
    return findName;

}, []);
console.log(allProductName);
//output:[ 'Shampo', 'ToothPaste' ]

//Problem-3
const products = [
    {name: 'Pen', price: 5},
    {name:'Book', price: 50},
    {name: 'Bag', price: 100}
];
const findAllPrice = products.reduce((all, price) =>{
    console.log(all);
    return all + price.price;
    

}, 0);
console.log(findAllPrice);
//output:155

//Problem-4
const numbers = [1, 2, 3, 4, 5];
const mulNumbers = numbers.reduce((accumulator, currentValue)=> accumulator * currentValue, 1);
console.log(mulNumbers);
//output:120

//Problem-5
const values = [10, 100, 300000000, 1000000];
let sum = 1;
const maxValues = values.reduce((a, b) => {
    /*
    console.log("hello");
    console.log(b);
    console.log(a);
    
    */
   if(a < b){
      a = b;
    }
   return a;
}, 0)
console.log(maxValues);
//output:300000000

const value = [10, 20, 50, 3000, 15];
const value1 = value.reduce((a, b) => Math.max(a, b), 0);
console.log(value1);
//output:3000

const value2 = [10, 20, 2000, 10999];
const value3 = value2.reduce((a, b)=> a > b ? a : b, 0);
console.log(value3);
//output:10999

//Problem-6
const arr = [100, 200, 300, 400];
const arr1 = arr.reduce((a, b) => a + b, 50) - 50;
console.log(arr1);
//output: 1000

