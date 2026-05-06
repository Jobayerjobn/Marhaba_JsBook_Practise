const strNum = '42';
const num = Number(strNum);
console.log(num);//42
console.log(typeof num); //number

const str = "hello";
const num2 = Number(str);
console.log(num2); //NaN , because whole string must be numeric  otherwise NaN
console.log(typeof num2); //number

const str1 = '591';
const number = + str1;
console.log(typeof number); //number


const realNumber = 12;
const typeString = String(num);
console.log(typeString);//string


const realValue = 12;
const real = realValue.toString();
console.log(typeof real); //string

const num3 = 931;
const str3 = num + '';
console.log(typeof str3); //string


//Boolean constructor
const isTruthy = Boolean([]);
console.log(isTruthy); //true

const isFalse = Boolean({});
console.log(isFalse); //true

const date = Date();
console.log(date); //Mon Feb 09 2026 10:23:31 GMT+0600 (Bangladesh Standard Time)

//function Constructor
const add = new Function("a, b", "return a + b");
console.log(add(4, 5));

/*function outer(){
    let x = 5;
    let y = 5;
    const add = new Function('return x;');
    add();
}
outer();
*/


const div = new Function("a, b", "return a / b");
console.log(div(10, 30));

const mul = new Function('a', 'b' , 'let value  = a * b; return value', )
console.log(mul(10, 30));
//find even number

const even = new Function(
    'a',
    'b', 
    'if(a % b === 0) { console.log("even")}else{console.log("odd")}');
even(10, 2); //even 

//object constructor 
const person = new Object();
person.name = "john";
person.age =  19;
console.log(person); //{ name: 'john', age: 19 }

const obj = {};
const person2 = obj;

person2.name = "Jobayer";
person2.age = 29;

console.log(obj);

const arr = new Array(); //build array
arr[0] = 5;
arr[1] = 10;
console.log(arr);
