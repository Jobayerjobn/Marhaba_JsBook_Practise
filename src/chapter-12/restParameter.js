//restParameter return pure array.
const[first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(second);
console.log(rest);

const obj = {
    name: "Jobayer", 
    age: 20,
    email: "jobayerjoban0048@gmail.com",
    address: "Dhaka, Bangladesh"
}
const{name, ...details} = obj;
console.log(name);
console.log(details);

function multiply(multiplayer, ...numbers){
    console.log(numbers);

};
multiply(2, 1, 2, 3);
multiply(30, 20, 30, 40);
function add(...numbers){
    console.log(numbers);

};
add(10, 20, 30, 40, 50, 60);


