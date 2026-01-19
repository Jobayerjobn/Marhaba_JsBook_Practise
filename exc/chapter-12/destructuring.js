//Problem-1
const user = {
    id: 101,
    profile: {
        name: "Jobayer",
        social: {
            github: "jobayerdev"
            
        },
    },
};

const {id, profile: {name}, profile: {social: {github}}, twitter = "No value"} = user;
console.log(id); //101
console.log(name);//Jobayer
console.log(github);//jobayerdev
console.log(twitter); //No Value

const order = {
  orderId: 5001,
  customer: {
    name: "Rahim",
    address: {
      city: "Dhaka",
      zip: 1207
    }
  },
  items: 3,
  price: 1500
};


//Problem-2
const destructure = ({customer: {name}, customer: {address: {city}}, price: totalPrice }) => {
    console.log(name);
    console.log(city);
    console.log(totalPrice);

}
destructure(order);

//Array destructuring

const  numbers = [45, 99];
const [a, b] = numbers;
console.log(a);
console.log(b);

//function return destructuring

function doubleThem(a, b){
    return [a * 2, b * 2];

}
const [first, second] = doubleThem(10, 20);
console.log(first, second);

function tripleThem(a, b, c){
    return [a * 2, b * 2, c * 2];

};
const [prothom, ditiyo, third]= tripleThem(10, 20, 30);
console.log(prothom, ditiyo, third);

const ar= [20, 30, 40,[10, 20 , [10, 20]]];
const [faul, daul, kaul,[maul, chaul, [jaul, youl]] ] = ar;
console.log("hello how are you?");
console.log(faul);
console.log(daul);
console.log(kaul);
console.log(maul);
console.log(chaul);
console.log(jaul);
console.log(youl);

const obj = {name: "Anit", age:25};
const {name: nam , phone = "N/A"} = obj;
console.log(nam, phone);

const number = [10, 20, 30, 40];
const[i, k, c, d, f = 30] = number;
console.log(i);
console.log(k);
console.log(c);
console.log(d);
console.log(f);

//Problem-1
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};
const{brand} = product;
console.log(brand);
//output: Dell

//Problem-2
const item = {
    name: "Mobile",
    price: 20000,
    phone: "Samsung"
};
const{price , phone: mobile} = item;
console.log(price); //output:20000 
console.log(mobile);//Samsung

//Problem-3
const color = ["red", "blue", "green", "yellow"];
const[red, blue] = color;
console.log(red);//red
console.log(blue);//blue

//Problem-4
const three = [1, 3, 4];
const[,two] = three;
console.log(two);

//Problem-5
const digits = [2, 4, 6, 8];
const[two1, , ,eight] = digits;
console.log(two1, eight);
//output:2 8

//Problem-6
function multiply(a, b){
    return [ a * 3 , b * 3]; //return destructuring...

}
const [value1, value2] = multiply(4, 5);
console.log(value1, value2);

//Problem-7
const person = {
    name: "Rahim",
    city: "Dhaka"
};
const {city: shohor, phone1 = "N/A"} = person;
console.log(shohor); //output: Dhaka
console.log(phone1);//N/A

//Problem-8
const teacher = {
    name: "Maria",
    profession: "Teacher"
};
const{name: nameAgain, profession: job} = teacher;
console.log(nameAgain, job);//Maria Teacher





