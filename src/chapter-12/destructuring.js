

//simple array destructuring
const a = [10, 20, 30, 40, 50]; //data structure..
let [d, b, c, ...rest] = a; // destructuring
console.log(d);
console.log(b);
console.log(c);
console.log(rest);

//simple object destructuring
/*
const obj = {
 name: "Jobayer",
 age: 19,
 email: "jobayerjoban0048@gmai.com"
}

const {nam, age, email} = obj; 
console.log(nam);
console.log(age);
console.log(email);
*/

const actor = {
    name: "ananata",
    age: 30,
    phone: '0188232232',
    money: 1231132313
}
const name = actor.name;
const age = actor.age;
const phone = actor.phone;
const money = actor.money;
console.log(name);
console.log(age);
console.log(phone);
console.log(money);
console.log("Hello how are you?");
//destructuring
const {name: nam, age: boyos, phone: mobile, money: taka} = actor;
console.log(nam);
console.log(age);
console.log(boyos);
console.log(taka);

const students = {
    name: "Jobayer",
    age: 19,
    email: "jobayerjoban0048@gmail.com",
    result: function(){
        console.log(students.name);

    },
    arr: [10, 20, 30, 40],
    people: {
        name: "Joban",
        age: 19,
        email: "jobayerjoban003@gmail.com"
    }

}
console.log(students.people["name"]); //bracket Notation 
const {arr:[x]} = students;
console.log(x);

const obj = {
    name: "Faul",
    age: 20,
    email: "faulKaul@gmail.com",
    man: {
        name: "Natok",
        age: 19,
        value: "Nai",
        fau: {
            name: 'Abul',
            age: 30, 
            email: 'abul0048@gmail.com'
        },

    }

};

const {man: { fau: { name: hello }}} = obj;
console.log(hello);
const {man: {name: wow} } = obj;
console.log(wow);
const {man: {age : hmm }, email, man: {fau: { age: why}}} = obj;
console.log(typeof hmm);
console.log(typeof why);
console.log(typeof email);


const book = {
    title : '1984',
    author: "George Orwell"
};
const{title : bookTitle, author: BookAuthor} = book;
console.log(bookTitle); //1984
console.log(BookAuthor);//George Orwell


const person = {name: "Anit", age: 25};
const {name: n, phone1 = "N/A"} = person;
console.log(n);
console.log(phone1);

function introduce({name: hello, age: how}){
    console.log(`Name: ${hello} , Age: ${how}`);

}
const user = {name : "Jobayer", age: 22, hobby: "Reading"};
introduce(user);


function sum([a, b]){
    return a + b;

}
console.log(sum([10, 30]));

function add([a = 10, b = 30]){
    return [a * b];

}
const [five ] = add([]);
console.log(five);


const numbers = [1, 2, 3, 4, 5];
const [, eight,  ,nine, ten] = numbers;
console.log(eight);
console.log(nine);
console.log(ten);


