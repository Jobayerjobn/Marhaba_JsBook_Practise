function tenTimes(number){
    const result = number * 10;
    return result;

}
const output = tenTimes(5);
console.log(output);//50

function add(price1, price2){
    const total = price1 + price2;
    return total;

}
const bill = add(5, 80);
console.log(bill); //85

function add(price1, price2){
    return price1 + price2;

}
console.log(add(4, 5));
const potato = 35;
const onion = 62;
const shirt = 500;
const pant = 1250;
function add1(price1, price2){
    return price1 + price2;

}
const bill1 = add1(potato , onion);
const bill2 = add1(shirt, pant);
const final = add1(bill1 ,bill2);
console.log(final);

function doMath(num1 , num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;

}
const result = doMath(10, 5);
console.log(result);

function isEven(num){
    if(num % 2 === 0){
        return true;

    }else{
        return false;

    }
}
console.log(isEven(5));//false
console.log(isEven(110));//true

function isOdd(num){
    if(num % 2 === 1){
        return true;

    }else{
        return false;

    }
}
console.log(isOdd(10));//false
console.log(isOdd(7));//true

function findEven(str){
    if(str.length % 2 === 0){
        return "even number";

    }else{
        return "odd number";
        
    }
}

console.log(findEven("Joba"));

//step1
function evenSizeString(str){
    
    console.log(str);

    
}
evenSizeString("Dhaka");


//step2
/*
function evenSizeString(str){
    const size = str.length;
    if(size % 2 === 0){
        console.log("Even Size");

    }else{
        console.log("odd Size");

    }
}
evenSizeString("Dhaka");

function evenSizeString1(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
        
    }else{
        return false;

    }
}
const isEven = evenSizeString1("Human");
console.log(isEven);
*/


function result1(number, bool){
    if(bool){
        return number * 2; 
    }else{
        return number *  3;

    }
}
const end  = result1(5, true);
console.log(end);

function doubleOrTriple(number, bool){
    if(number === true){
        return number * 2;

    }else{
        return number * 3;

    }
}
console.log(doubleOrTriple(5, false));

function isArray(arr){
    const store = [];
   store.push(arr.length);
    return store;

}
const grandValue = isArray([12, 23, 34, 28, 29, 30]);
console.log(grandValue);

