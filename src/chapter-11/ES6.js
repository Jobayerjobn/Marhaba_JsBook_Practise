var nam = "Jobayer";
console.log(nam);

let num = 17;
num = 87;
console.log(num);

const people = "Jobayer";
//people = "hello";

console.log(people);


const money = 25;
const rich = money + 25;
console.log(rich);

//if your need then you will be declare as a variable let ;
let count = 0;
count  = count + 10;
console.log(count);

const numbers = [23, 4, 23, 12, 57, [10, 20, [40]], 30];
numbers[1] = 0;
numbers[1] = 1;
numbers[1] = 3;
numbers[5][2][0] = 0;
console.log(numbers);

const obj = {
    name: "Jobaeyer",
    age: 21,
    email: "jobayerjoban0048@gmail.com"

}
obj.name = "Joban";
obj.name = "hello";
obj.age = 20;
obj.email = "jobayerjoban03@gmail.com";
console.log(obj);

const number = [23, 4, 23, 12, 12, 56];
number[1] = 0;
number.push(2, 8, 9, 5);
console.log(number);

/*
const address = {
    name: "Jobayer",
    age: 20,
    email: "jobayerjoban0048@gmail.com"
}
address.push({"Country": "Bangladesh"});
console.log(address);
*/

/*
const students = {
    name:'Moyna Pakhi',
    class: 12,

} // all object value will not be change.
students = {
    name:"Tiya Pakhi"
}
students.name = "Tiya pakhi";
//Assignment to constant variable
console.log(students);
*/

const student =  {
    name: 'moyna pakhi',
    class: 12
}
student.name = 'moyer konthi';
console.log(student);
// We are most of time use const. sometimes use let to need..but never use variable var

/*
function add(num1, num2){
    const result = num1 + num2;
    return result;

}
const sum = add(5, 7);
console.log(sum);
*/


function add(num1,  num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}
const allSum = add(5);
console.log(allSum);

function value(num1, num2){
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum;
}

const allValue =  value();
console.log(allValue);

function number5(num1 = 10, num2 = 10){
    const result = num1 + num2;
    console.log("This result:", result);

}
number5(5, 4);

function optionalFunc(num1 = 5, num2 = 10){
    const result =  num1 +  num2;
    console.log(result);

}
optionalFunc();

function add1(num1, num2 = 3){
    const result = num1 * num2;
    console.log(result);

}
add1(10);
add4(10);

function add4(num1, num2 = 0){
    const result = num1 + num2;
    console.log("hello" ,num1, num2, result);
     
}
console.log("result");
function add3(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}
console.log(add3());
const total = add3(17, 19);
console.log(total);

function addUser(arr=[34, 20, 30, 50]){
    console.log(arr);

}
addUser();
function createUser(name = "", education = {}, age = 0, hobbies = []){
    console.log(name, education, age, hobbies);

}
createUser("Jobayer",{name: "Jobayer", age: 19, email:"jobayerjoban0048@gmail.com"}, [4, 5, 7, 9, 11, 22, 24]);


function number5(arr = [20, 10, 30, 50, 60], obj ={name: "jobayer", age: 19, email: "jobayerjoban0048@gmai.com"}){
    console.log(arr, obj);

}
number5();

const first = 'jan';
const second = 'pakhi';
const name = first + " " + second + ' ' + 'potash potash';
console.log(name);


const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' +  b + ' is ' + (a + b);

console.log(result);

const p = "Rafiq";
const age = 30;
console.log("Name" + p + "Age:" + p);
console.log(`Name is ${p}, Age: ${age}`);

const c = 10;
const d = 20;

const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math);

const john = `The toper og the 
game of wwe John cena`;
console.log(john);

const john1 = "The top player in wwe\njohn cena";
console.log(john1);

function getName(name){
    return name;
    
}
const message = `Na bolle Sadia, ase amer ${getName("Nadiya")}!`;
console.log(message);
function getName1(name){
    return name;

}
const message1 = "The name" + getName1(" Esha") + " And Sadia";
console.log(message1);

const age1 = 18;
const status = `You are ${age >= 18 ? "Adult" : "Minor"}`;
console.log(status);
const age2 = 80;
const status1 = `You are ${age2 >= 50 ? "Very Adult": "Adult"} `;
console.log(status1);

const value5 = `This is correct value: ${(function(num1, num2){
    return num1 * num2;

})(2, 2)}`
console.log(value5);
const value6 = `This is correct value: ${(function(num1, num2){
    return num1 * num2;

})(4, 4)}`;
console.log(value6);

const user = {name: "Tariq", age: 25};
const info =`Name: ${user.name}, Age: ${user.age}`;
console.log(info);
//Work with array

const array = [10, 20, 30, 40, 50, 60];
const third = `This number is:${array[1]}`;
console.log(third);
const array2 = [100, 200, 300, 400, 500, 600];
const four = `This number is: ${array2[0]}`;
console.log(four);

const list = `My favorite fruits are: ${array.join(" ")}`
console.log(list);
const list2 = `My favorite fruits are: ${array.join("!")}`
console.log(list2);
const arr = ["Mango", "Banana", "Apple"];
const hello = `My fruits are: ${arr}`;
console.log(hello);

//HTML Temple
const title = "Welcome";
const body = "This is a dynamic templates";
const html = `<div>
    <h1>${title}</h1>
    <p>${body}</p>
</div>`;
console.log(html);

const title1 = "Wel come";
const body1 = "This is a body";
const html1 = `<div>
  <h1>${title1}</h1>
  <p>${body1}</p>

</div>`;
console.log(html1);

const heading =`<div>
  <h1>hello how are you?</h1>
  <p>lorem if sum 100 word</p>
  <article>This is a article section</article>
  </div>`;
console.log(heading);


const radius = 5;
const area = `Circle area is ${Math.PI * radius ** 2}`;
console.log(area);

const radius1  = 10;
const area1 = `Circle area is ${(Math.PI * radius ** 2).toFixed(3)}`;
console.log(area1);