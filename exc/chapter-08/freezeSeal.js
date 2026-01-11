//Problem-1
const headPhone = {
    brand: "Sony",
    price: 3000,
    color: "red",

}
Object.freeze(headPhone);
delete headPhone.brand;
headPhone.brand = "Apple";
headPhone.color = "blue";
headPhone.price  = 4000;
console.log(headPhone);
//output:{ brand: 'Sony', price: 3000, color: 'red' } 

//Problem-2
const player = {
    name: "Messi",
    goals: 80,
    club: "Inter Miami",

};
Object.freeze(player);
player.name = "Leonel";
player.club = "Barselona";
console.log(player);
//output:{ name: 'Messi', goals: 80, club: 'Inter Miami' }

//Problem-3
const book = {
    title: "Harry Potter",
    author: "Jk Rowling",
    pages: 5000
};
Object.seal(book);
delete book.author;
book.value = "newValue";
book.author = "ke partner";
console.log(book);
//output:{ title: 'Harry Potter', author: 'ke partner', pages: 5000 } 

//Problem-4
const gadget = {
    name: 'iphone',
    price: 120000,
    color: 'Black'
}
delete gadget.price;
console.log(gadget);
//output: { name: 'iphone', color: 'Black' }

//Problem-5
const animal = {
    name:"tiger",
    location: "sundarban",

}
Object.freeze(animal);
animal.location = "Dhaka";
animal.name = "lion";
console.log(animal);
//output:{ name: 'tiger', location: 'sundarban' }

//Problem-5
const food = {
    name: "Pizza",
    price: 500,
    size: "large"
};
Object.seal(food);
food.price = "1000";
console.log(food);
//output: { name: 'Pizza', price: '1000', size: 'large' }