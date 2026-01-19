//Problem-1
const product = {
    name: "Laptop",
    price: 500000,
    brand: "Dell"
};

const{name, ...details} = product;
console.log(name);
console.log(details); 
//output:Laptop
//output:{ price: 500000, brand: 'Dell' }

//Problem-2
const project = {
    id: 101,
    title: "App development",
    budget: 3000,
    client: "Tech corp",
};
const{title, ...args} = project;
console.log(args);
//output:{ id: 101, budget: 3000, client: 'Tech corp' }


//Problem-3
const programmer = {
    name: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Fronted",
    tools: "Reat"
};
const{specialty, language, ...others} = programmer;
console.log(others);
//output:{ name: 'Sophia', experience: 5, tools: 'Reat' }

//Problem-4
;
const[, , ...all] = [10, 20, 3, 30, 300, 3000];
console.log(all);
//output:[ 3, 30, 300, 3000 ]

//Problem-5
function add(num1, num2, ...numbers){ // we know rest parameter return pure array.
    let sum = 0;
    for(let i of numbers){
        sum += i;

    }
    return sum;

    

}
console.log(add(10, 30, 10, 20, 100, 4, 5));
//output:139

//Problem-6
const fun = (...numbers) => {
    let sum = [];
    let count = 0;
    for(let i of numbers){
        sum.push(i);

    }
    for(let value of sum){
        count += value;
    }
    const average = count / sum.length;
    return average;


}
const result = fun(20, 30, 40);
console.log(result);
//output:30

