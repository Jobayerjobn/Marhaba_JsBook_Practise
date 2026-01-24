
//Problem-1
const numbers = [10, 20, 30, 50, 60,  70, 1001];
const numbers1 = numbers.some(n => n > 100);
console.log(numbers1);
//output:false
const numbers2 = [10, 30, 50, 60, 70, 1001];
const number2 = numbers2.some(n => n > 100);
console.log(number2);
//output:true

//Problem-2
const  divArray = [10, 50, 75, 65, 55, 100];
const everyArray = divArray.every(n => n / 5);
console.log(everyArray);
//output:true;

//Problem-3
const words = ["Hello", "find", "findIndex", "some", "every", "forEach"];
const checkWords = words.some(n => n === "hello");
console.log(checkWords);
//output:false

//Problem-4
const age = [20, 19, 21, 22, 30, 59, 75, ];
const checkAge = age.every(n => n > 18);
console.log(checkAge);
//output:true

//Flat method

function myFlat(arr, depth = 1){ //depth default value;

    let newArray = [];
    for(const i of arr){
        if(Array.isArray(i) && depth > 0){
            newArray.push(...myFlat(i, depth - 1));
        }else{
            newArray.push(i);

        }
    }
    return newArray;

}
const arr = [100, [10, 20, [30, 30, [3, 4]]]];
console.log(myFlat(arr, 3));
