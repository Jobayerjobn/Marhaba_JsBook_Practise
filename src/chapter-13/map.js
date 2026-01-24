const numbers = [4, 5, 2, 8, 10];
function doubleAll(numbers){
    let newArray = [];
    for(let i of numbers){
        let sum = i * 2;
        newArray.push(sum);

    };
    return newArray;

}
console.log(doubleAll(numbers));

const number = [4, 5, 2, 8, 10];
const result = number.map((n) => n * 2);
console.log(result);

const num = [12, 10, 8, 15, 7];
const result2 = num.map((n) => n + 5);

console.log(num);

console.log(result2); // return new array
num.map(function (value, index, array){
    console.log("Value:", value, "Index:", index, "Array:", array);

})

function args(){
   let value = Array.from(arguments, a => a * 2);
   console.log([...arguments]);
   console.log(value);


}
args(1, 2, 3, 4, 5);


const numbers4 = [12, 10, 8, 15, 7];
const fiveBonus = numbers4.map(n =>  n / 2);
console.log(fiveBonus);

const friends = ["Tom", "Jhon", "Micheal", "Oliver"];
const length = friends.map(n => n.length);
console.log(length);
const firstLetter = friends.map(fnd => fnd[0]);
console.log(firstLetter);


const value = [10, 20, 30, 40, 50, 60, 70, 80];
const resultValue = value.forEach(n => console.log(n));
console.log(resultValue); //return undefined

const arr = [20, 30, 50, 60];
let sum = 0;
arr.forEach(function(arr){
    
    sum += arr;
    return sum;


})
console.log(sum);

//Use forEach

function analyzeNumbers(arr){
    const value = {
        even:[],
        odd: [],
        sum:0
    }
    
    arr.forEach(n => {
        value.sum += n;

        if(n % 2 === 0){
            value.even.push(n);

        }else{
            value.odd.push(n);
        }
        
    });
    return value;

}
console.log(analyzeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

const players = [75, 65, 67, 71, 55, 59];
const selected = players.filter(p => p > 70);
console.log(selected);
console.log(players);


const arrayFilter = [75, 65, 67, 71, 55, 59];
let newArray = [];
for(let sum of arrayFilter){
    if(sum > 70){
        
        newArray.push(sum);
        
    }

}
console.log(newArray);

const againFriend = ["Tom", "Joh", "micheal", "oliver", "tim", "joshna"];
const oldFriends = againFriend.filter(n => n.length > 4)
console.log(oldFriends);

const arr6 = [10, 89, 100];
const arr6Filter = arr6.filter(n => n > 100)
console.log(arr6Filter); // return blank array / []

const findArray = (arr) => {
    for(let sum of arr){
        if(sum > 100 ){
            return sum;

        }
    }
}
console.log(findArray([10, 200, 30, 40, 50, 55, 66, 77, 88, 111]));

const findArray2 = [111, 22, 33, 44, 55, 66, 77, 88, 99];
const findArray3 = findArray2.find(n => n > 100);
console.log(findArray3);//111

function findIndex(arr){
    let count  = 0;
    for(let sum of arr){
        if(sum > 100){
            
            return count;
        }
        count++;
        
    }
    return -1;
    
}
console.log(findIndex([1, 2, 33, 44, 55, 66, 77, 999]));

const students = [
    {name: "John", age: 20},
    {name: "Adam", age: 22},
    {name: "Tom", age: 19},
    {name: "Lucy", age: 21}
];
const studentInfo = students.map((students, index, array) => {
    return `${students.name}, ${index + 1} of ${array.length} students`;

})
console.log(studentInfo);




