//Problem-1
const book = {
    name: "Marhaba Js",
    writer: "Jhanker Mahbub",
    price:  570,

};
const entries = Object.entries(book);
console.log(entries);
/* 
[
  [ 'name', 'Marhaba Js' ],
  [ 'writer', 'Jhanker Mahbub' ],
  [ 'price', 570 ]
]

*/

for(let[key, value] of Object.entries(book)){
    console.log(key,":", value);
}
//output: 
/*
name : Marhaba Js
writer : Jhanker Mahbub
price : 570

*/
const keys = Object.keys(book);
for(let key of keys ){
    console.log(key, book[key]);
}
//output:
/*
name : Marhaba Js
writer : Jhanker Mahbub
price : 570
name Marhaba Js
writer Jhanker Mahbub
price 570
*/

function entriesf(book){
    const entries = []; //empty array
    for(let keys in book){
        if(book.hasOwnProperty(keys)){
            entries.push([keys, book[keys]]);

        }
    }
    return entries;

}
console.log(entriesf(book));
//output: 
/*
[
  [ 'name', 'Marhaba Js' ],
  [ 'writer', 'Jhanker Mahbub' ],
  [ 'price', 570 ]
]
*/

//Problem-2
const article = {
    title: "Learning js",
    category: "Programming",

}
if("author" in article){
    console.log("true");
}else{
    console.log("false");

}
//output:false

if(article.hasOwnProperty("author")){
    console.log("true");
}else{
    console.log("false");
}
//output:false

//Problem-3
const laptop = {
    brand:"Dell",
    model: "Inspiron",
    price: 45000
};
for(let key in laptop){
    console.log(key, laptop[key]);

}
//output: 
/*
brand Dell
model Inspiron
price 45000
*/
//Problem-4
const phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 85000
};
const entry = Object.keys(phone);
for(let key of entry){
    console.log(key, phone[key]);

}
//output: 
/*
brand Samsung
model Galaxy S21
price 85000
*/

//Problem-6
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Games of Thrones"
}
for(let allBooks in books){
    const value = books[allBooks];
    console.log(value);


}
//output: 
/*
Harry Potter
The Hobbit
Games of Thrones
*/

//Problem-5
const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
};
const findValue = Object.values(bike);
console.log(findValue);
//output: [ 'Hero', 120000, 'Splendor' ]

//Problem-7
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
let i = 0;
for(let sum in numbers){
    const value = numbers[sum];
    i += value;

}
console.log(i);
//output:100

//Problem-8
const player = {
    name: "Messi",
    team: "Argentina",
    goal: 91,

}
const allValues = Object.values(player);
console.log(allValues);
//output: [ 'Messi', 'Argentina', 91 ]

//Problem-9
const building = {
    floors: 10,
    address:{
        street: "Main Road",
        city: "Dhaka",

    },
    type: "commercial"
};

for(let sum in building){
    console.log(sum, building[sum]);
}
//output:
/*
floors 10
address { street: 'Main Road', city: 'Dhaka' }
type commercial
*/
