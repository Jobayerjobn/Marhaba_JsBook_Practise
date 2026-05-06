const min = Math.min(59, 60, 120, 33, 50, -7);
console.log(min);//-7

const max = Math.max(34, 59, 60, 100, 500, 2000, 3000);
console.log(max);//3000

const max2 = Math.max(45, 21, 65, 99, 126, 5, -99);
console.log(max2); //126


const min2 = Math.min(45, 21, 65, 99, 126, 5, -9);
console.log(min2);//-9

console.log(Math.PI); //3.141592653589793

const abs = Math.abs(-6);
const abs2 = Math.abs(-7);
console.log(abs);//6
console.log(abs2);//7

const round = Math.round(5.5);
const round2 = Math.round(10.2);
const round3 = Math.round(20,4);
console.log(round);//6
console.log(round2);//10
console.log(round3);//20

const floor = Math.floor(4.1000);
const floor2 = Math.floor(4.5000);
console.log(floor);//4
console.log(floor2);//4

const ceil = Math.ceil(20.4);
const ceil2 = Math.ceil(20.200);
console.log(ceil);//21
console.log(ceil);//21

const ceil3 = Math.ceil(5.4);
const ceil4 = Math.ceil(5.20);
console.log(ceil3);//6
console.log(ceil4);//6

const random = Math.random();
const random2 = Math.random();
console.log(random);//0.2781226983129903
console.log(random2);//0.9500788595536918
console.log(Math.random() * 4);

const absolute = Math.abs(72);


// Math.floor

function createFloor(input){
    return input - (input % 1);

};
console.log(createFloor(4.5)); //4

function createRound(input){
    const number = input % 1;

    if(number >= 0.5){
        return input - number + 1; 

    }else{
       return input - number;


    }

}
console.log(createRound(5.4));


function createCeil(input){
    const number = input % 1;
    
    if(number){
        return input - number + 1;

    }
}
console.log(createCeil(10.9));
console.log(Math.ceil(10.9));

function createFloor(input){
    return input - (input % 1);

}
console.log(createFloor(10));

function createAbs(input){
    if(input < 0){
        return -input;

    }
    return input;

}
console.log(createAbs(-50));
console.log(Math.abs(-10));
console.log("hello");


function createMax(...input){ //rest parameters
    let max = input[0];
    for(let initial = 0; initial < input.length; initial++){
        if(input[initial] > max){
            max = input[initial];

        }
    }
    return max;


    
}
console.log(createMax(100, 10, 20, 30));

