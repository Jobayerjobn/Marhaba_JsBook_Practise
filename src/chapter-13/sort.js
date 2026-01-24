function str(strArray){
    
    for(let i = 0; i < strArray.length; i++){

        for(let j = 0; j < strArray.length - 1 - i; j++){

            if(strArray[j] > strArray[j + 1]){

                let temp = strArray[j];
                strArray[j] = strArray[j + 1];
                strArray[j + 1] = temp;
            }

        };
    };
    return strArray;
}
const strArray = ['A', 'D', 'C', 'G', 'F', 'I'];
console.log(str(strArray));
 
const friends = ["Zara", "Bob", "Anna", "Chris"];
friends.sort();
console.log(friends);

const numbers = [3, 5, 4, 2, 7, 1, 6, 9];
numbers.sort();
console.log(numbers);

const numbers2 = [30, 5, 100, 12];
numbers.sort();
console.log(numbers2);

const num = [30, 5, 100, 12];
num.sort((a, b) => a - b);
console.log(num);

const value = [10, 30,  3, 5, 4, 5];
value.sort((a, b) => b - a);
console.log(value);

// Object advance sort

const friend = [
    {name: 'Zara', age: 25},
    {name: 'Bob', age: 20},
    {name: 'Anna', age: 30}
];

friend.sort((a, b) => a.age - b.age);
console.log(friend);

const objArray = [
    {name: 'Jobayer', age: 21},
    {name: 'aoban', age: 19}, 
    {name: 'Joba', age: 20}
];
objArray.sort((a, b) => a.name.localeCompare(b.name));
console.log(objArray);