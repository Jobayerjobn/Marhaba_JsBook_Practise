//Problem-1
let numbers = 150;
for(let i = 150; i <= 170; i++){
    console.log(i);

}
//output:150, ... , 170

//Problem-2
let addList = 0;
for(let i = 31; i <= 58; i++){
    addList += i;

}
console.log(addList);
//output:1246

//Problem-3
let sum = 0;
for(let i = 25; i <= 75; i++){
    console.log(i, "+", sum, "=", i + sum);
    sum = sum + i;

}
console.log(sum);
//output: 2550


//Problem - 4
for(let i = 20; i <= 50; i++){
    if(i % 7 === 0){
        console.log(i);

    }
}
//output: 21 28 35 42 49

for(let i = 40; i <= 80; i++){
    if(i % 7 === 0 && i % 5 === 0){
        console.log(i);

    }
}
//output:70

//Problem-5
let value = 0;
for(let i = 1; i <= 40; i++){
    if(i % 13 == 0){
        value += i;

    }
}
console.log(value);
//output:78

//Problem-6
for(let i = 1; i <= 50; i += 3){
    console.log(i);
}

//output: 1 ... 49

//Problem-7
for(let i = 0; i <= 100; i++){
    if(i % 6 == 0 && i % 9 == 0){
        console.log(i);

    }
}
//output: 0 ... 90

//Problem-8
let numSum = 0;
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 4 == 0){
        numSum += i;

     
    }
}

console.log(numSum);
//output:120

