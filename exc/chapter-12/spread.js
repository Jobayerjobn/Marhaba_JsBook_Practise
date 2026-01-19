//Problem-1
const technologies = ["Condition", "array", "loop"];
const array = ["Variable", ...technologies];
console.log(array);
//output:[ 'Variable', 'Condition', 'array', 'loop' ]

//Problem-2
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits];
console.log(myFruits);
//output:[ 'Apple', 'Banana', 'Mango' ]

//Problem-3
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const dataBase = ["MongoDB"];
const attached = [...frontEnd, ...backEnd, ...dataBase];
console.log(attached);
//output:[ 'JavaScript', 'Node.js', 'MongoDB' ]

//Problem-4
const webSite = {
    name: "Mysite",
    type: "e-commerce",
    status: "active"
};
const webSite2 = {...webSite, theme: "dark"};
const webSite3 = webSite;
webSite3.theme = "dark";
console.log(webSite2);
console.log(webSite);
//output:{ name: 'Mysite', type: 'e-commerce', status: 'active', theme: 'dark' }
//output:{ name: 'Mysite', type: 'e-commerce', status: 'active', theme: 'dark' }

//Problem-5
const young = {
    name: "Arif",
    age: 30,
    country: "B Baria",

};
const copyYoung = {...young};
const{country, ...rest} = copyYoung;
console.log(rest);
//output:{ name: 'Arif', age: 30 }

//Problem-6
const car = {
    make: "Tokota",
    model: "Corolla",
    year: 2020
};

const copyCar = {...car};
copyCar.year = 2032;
console.log(copyCar);
console.log(car);
//output:{ make: 'Tokota', model: 'Corolla', year: 2032 }
//output:{ make: 'Tokota', model: 'Corolla', year: 2020 }
const car2 = {
    model: "Toyota",
    model:"Corolla",
    year: 2020
};
const copyCar2 = car2;
copyCar2.year = 2032;
console.log(car2);
//output:{ model: 'Corolla', year: 2032 }
