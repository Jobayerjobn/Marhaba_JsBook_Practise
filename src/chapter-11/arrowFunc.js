//normal function 
function add(a, b){
    const result = a + b;
    return result;


}
const sum = add(5,  90);
console.log(sum);

const normalFunc = (function (a, b){
    const result = a + b;
    return result;

}(30, 90))

console.log(normalFunc);

function add(a, b){
    return a + b;

}
console.log(add(20, 30));

const add2 = (function(a, b){
    return a + b;

} (20, 90))
console.log(add2);

const func = () => {
  console.log(arguments);
}
func(1, 2, 3);;// arrow function do not have their own arguments;

//Arrow function 
const arrow = (a, b) =>{
    return a + b;

};
console.log(arrow(10, 20));

const arrow1 = (a, b) => { return a + b};
console.log(arrow1(40,  50));


const  add4 = (num1, num2, num3, num4) => num1 +  num2 + num3 + num4;
console.log(add4(3, 10, 15, 20));

const students = {
    name: "ananta",
    age: 23
}
const getName = person => person.name;//arrow function 
const getAge = person => person.age; // arrow function 
const age = getName(students); 
console.log(age);

const people = {
    name: "Jobayer",
    age : 19, 
    email: "jobayerjoban0048@gmail.com"
};
const all =  name => name.name;
const value = all(people);
console.log(value);
const findAge = name => name.age;
const value2 = findAge(people);
console.log(value2);

const findEmail = name =>  {return name.email};
const value3 = findEmail(people);
console.log(value3);

const getThird = numbers => numbers[3];
const findValue = getThird([10, 20, 30, 50]);
console.log(findValue);
console.log(getThird([10, 20, 30, 40, 50]));
const getFour = number => console.log(number[0]);
getFour([10, 40, 50]);


const getPi = () => Math.PI;
console.log(getPi());

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x *  y * z;
    const result = sum + mult;
    return result;

}

const result = doMath(3, 5, 8);
console.log(result);

const greet = (name = "Guest") => `Hello, ${name}`;
console.log(greet());

const greet1 = (name = "Guest") => `How are you ${name}`;
console.log(greet1());

const handle = (obj= {name: "jobayer", age: 19}) => ({
    key: obj.name,
    name: obj.age
});

const joma = handle();

for(let i in joma){
    console.log(i, ":", joma[i]);
    
}