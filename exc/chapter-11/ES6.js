//Problem-1
function add(num1 = 0, num2 = 0, num3 = 0){ //parameter default value;

    const  result = num1 + num2 + num3;
    console.log(result);

}
add(10, 20, 30);
//output: 30

//Problem-2
function reserve(money = 50){ //default value of parameter.
    console.log(money);

}
reserve();
//output:50

//Problem-3
function monthlyReport(name = "anonymous", income = 0){
    console.log(name);
    return income;

}
console.log(monthlyReport("Jobayer", 0));
//output:Jobayer 0

//Problem-4
function square(num = 1){
    const result = num * num;
    return result;

}
console.log(square(4));
//output: 16

//Problem-5
function store(product = "Unknown Product", price = 1){
    console.log(product);
    console.log(price);
}
store("Dove", 4);
//Dove 4

//Problem-6

function favBook(book = "JS book"){
    console.log(book);

}
favBook("Discrete mathematics");
//output: Discrete mathematics

//Problem-7
function something(obj = {price: 10, quantity:1}){
    const totalPrice = obj.price + obj.quantity;
    return totalPrice;

}
console.log(something());
//output:11

//Problem-8
function calculation(arr = [5,  10, 15]){
    let newArr = [];
    for(let i of arr){
        i *= 2;

        newArr.push(i);
    }
   
    return newArr;

}
console.log(calculation());
//output:[ 10, 20, 30 ]

function cal(arr){
    let temp;
    for(let i = 0; i < arr.length; i++){
       arr[i] *=  2
       
    }
    console.log(arr);

}
cal([20, 30, 40]);
//output:[ 40, 60, 80 ]

//Problem-9
function calculation2(obj = {principal:1000, rate:5}){
    const simpleInterest = ((obj.principal * obj.rate) / 100);
    return simpleInterest;

}
console.log(calculation2());
//output:50


//Problem-10
function calculation3(obj = {salary: 50000, tax: 10}){
    const findTax = (obj.salary *  obj.tax) / 100;
    const result = obj.salary - findTax;

    return result;

}

console.log("Salary",calculation3());
//output:Salary 45000

//Another way 

function anotherWay(obj = {salary: 50000, tax: 10}){
    const findTax = (obj.salary * obj.tax) / 100;
    const result = obj.salary - findTax;
    return [findTax, result];

}
console.log(typeof anotherWay());
//output:object 

function  anotherWay3(obj =  {salary: 50000, tax: 10}){
    const findTax = (obj.salary * obj.tax) / 100;
    return {
        findTax: findTax,
        salary: obj.salary - findTax

    }
}
console.log(anotherWay3());
//output:{ findTax: 5000, salary: 45000 }

//Problem-1
const a = 100;
const b = 20;
const result = `The difference between ${a} and ${b} is ${a - b}`;
console.log(result);
//output:The difference between 100 and 20 is 80

function subtraction(a, b){
    return `The difference between ${a} and ${b} is ${a - b}`;

}
console.log(subtraction(100, 20))
//output:The difference between 100 and 20 is 80

//Problem-2
function employee(obj){
    return `Employee name:${obj.name},age ${obj.age},salary ${obj.salary}`;

}
console.log(employee({name: "Jobayer", age: 20, salary: 100000}));
//output:Employee name:Jobayer,age 20,salary 100000

function employee2(obj){

    return { // return value as a object;
        name:`${obj.name}`,
        age: `${obj.age}`,
        salary:`${obj.salary}`
    }
};
console.log(employee2({name: "Joban", age: 19, salary: 100000}));
//{ name: 'Joban', age: '19', salary: '100000' }

//Problem-3
const fruits = ["Apple", "Orange", "Banana"];
const list = `My favorite fruits are ${fruits[0]}`;
console.log(list);
//output:My favorite fruits are Apple

//Problem-4
const c = 50;
const d = 10;
const value = `The division of ${c} and ${d} is ${c / d}`;
console.log(value);
//output: The division of 50 and 10 is 5

//Problem-5
const person = {
    name: "Amit",
    lastName: "kumer"
};
const show = `Full Name: ${person.name} ${person.lastName}`;
console.log(show);
//output: Full Name: Amit kumer

//Problem-6 
const animals = ["Cat", "Dog", "Elephant"];
const msg = `My favorite animals are ${animals.join(", ")}`;
console.log(msg);
//output:My favorite animals are Cat, Dog, Elephant

//Problem-7
const students = {
    name: "karim",
    age: 19,
    results:[90, 80, 85]

};
const Details = `Students name: ${students.name} and average mark is ${(students.results[0] + students.results[1] + students.results[2])/ 3}`;
console.log(Details);
//output:Students name: karim and average mark is 85