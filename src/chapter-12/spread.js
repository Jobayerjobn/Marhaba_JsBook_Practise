const max = Math.max(5, 23, 45, 1, 89, 34);
console.log(max);

const fun =( arr = [10, 20, 30, 100, 60, 70]) => {
    let bigNumber = 10;

    for(let i of arr){
        if(bigNumber < i){
            bigNumber = i;

        }

    }
    return bigNumber;

}
console.log(fun());

const func = (arr = [40, 34, 10, 4, 1, 5, 100, 300, 5000])  => {
    let smallNumber = 1;
    for(let i of arr){
        if(smallNumber >= i){
            smallNumber = i;

        }
    }
    return smallNumber;

}
console.log(func());

const  numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(numbers);
console.log(arrayMax);
//NaN

console.log(Number([5]));
console.log(Number([]));
console.log(Number(["4", "10"]));
console.log(Number([10, 30, 40]));

const friends = [4, 5, 87, 9];
const bondu = friends;
bondu.push(12);
console.log(bondu);
console.log(friends); //because non primitive data type


let a = 10;
let  b = a;
b = 30;
console.log(a); //10 because primitive data type 
console.log(b);// 30 // primitive data type

const friends2 = [4, 5, 87, 9];
const dosto = [...friends2];
console.log(dosto);
friends2.push(100);
console.log(dosto);
console.log(friends2);


const friends3 = [4, 5, 87, 9];
const sonkha = [...friends3, 100, 500, 1000];
console.log(sonkha);

const friends4 = [11, 23, 25, 43, 49, 53];
const sonkha2 = [...friends, 1001, 20001, 3001, 4001];
console.log(sonkha2);

const obj = {
    name: "Jobayer",
    age: 19,
    email: "jobayerjoban0048@gmail.com",
    address: "Dhaka, Bangladesh"
}
const obj2 = obj;
obj2.name = "Joban";
console.log(obj);

const people = {
    name: "fau", 
    age: 19,
    email: "faumau00@gmail.com"
}
const people1 = {...people, address: "Nai", phone: "N?A"};
console.log(people1);
people.name = "Havium";
console.log(people);
console.log(people1);

const array = [20, 30];
const array2 = [3, 4];
const concatenate = [...array, ...array2];
console.log(concatenate);

const person = {
    name: "Amit",
    age: 30

}
const clonedPerson = person;

const person2 = {
    name: "Jobayer",
    age: 19,
    result:{
        bangla: 40,
        english: 50,
        math: 60,
        number:{
            biology: 12,
            physics: 13,
            Higher: 30
        }
    }
};
const clonedPerson2 = {...person2};
clonedPerson2.result.number.biology = 50;
console.log(clonedPerson2);
console.log(person2.result.number.biology);
console.log(person2);







