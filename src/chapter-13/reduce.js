

const numbers = [4, 5, 7, 1, 2, 66];
let sum = 0;
for(const num of numbers){
    sum = sum + num;

}
console.log(sum);

const number = [4, 5, 7, 1, 2, 66];
const total = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);

const numbers2 = [32, 34, 73, 13, 22, 5];
const total2 = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total2);


const products = [
    {id: 1, name: "lenevo", price: 65000},
    {id: 2, name: "dell", price: 45000},
    {id: 3, name: "hp", price: 40000},
    {id: 4, name: 'mac', price: 165000}

];

const names = products.map(p => p.name);
console.log(names);
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);

const affordable = products.find(p => p.price < 50000);
console.log(affordable);
const priyoReduce = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
console.log(priyoReduce); //315000

const havium = [
    {id: 1, name: "Laptop", money: 50000},
    {id: 2, name: "Iphone", money: 100000},
    {id: 3, name: "Car", money: 300000000000}
];

const findName = havium.reduce((a, b) => {
    a.push(b.name);
    return a;

}, []);
console.log(findName);
//output:[ 'Laptop', 'Iphone', 'Car' ]

