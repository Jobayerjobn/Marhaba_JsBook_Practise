//Problem-1

const player = {
    name: "Natok Team",
    years: 20,
    sports: "Cricket",
    country: "Bangladesh",
    actor: true

}
console.log(player.name);
//output: Natok Team

//Problem-2
const laptop = {
    brand: "Apple",
    price: 1800000,
    hardDisc: true,
    ram: 20,
    screenSize: 16,

}
console.log(laptop.screenSize);
//output: 16

//Problem-3
const favPlace = {
    name: "Coxs Bazer",
    distance: "400km",
    popularity: "high"

}
console.log(favPlace["popularity"]);
//output:high 

//Problem-4
const phone = {
    name:  "nokia",
    color: "Black", 
    price: 5000
}
console.log(phone["price"]);
//output: 5000

//Problem-5
const library = {
    name: "public library",
    location: "Dhaka",
    books: 5000,

}
console.log(library.location);
//output:Dhaka

//Problem-6
const movie = {
    title: "Inception",
    director: "Notan",
    rating: 9
}
console.log(movie.rating);
//output:9

//Problem-7
const college = {
    name: "ndc",
    established: 1949,
    groups:['Science', 'Arts', 'Commerce'],

}
console.log(college["groups"][1]);
console.log(college.groups[1]);
//output: Arts
//output: Arts

//Problem-8
const family = {
    father: {
        name: "Mostem  uddin", 
        age: 60,
        profession: "teacher",

    },
    mother: {
        name: "Aysha khatun",
        age: 54,
        profession: "House wife",


    },

}

console.log(family.father.age);
const motherInformation = "mother"; //bracketNotation 
console.log(motherInformation);
if(family.father.age + family.mother.age < 200){
    let sumAdd = family.father.age + family.mother.age;
    console.log(sumAdd);
}else{
    console.log("Welcome");
}
//output: 114

