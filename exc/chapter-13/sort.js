//Problem-1
const numbers = [50, 12, 25, 8];
function sorting(numbers){
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length - 1 - i; j++){
            if(numbers[j] > numbers[j + 1]){
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;

            }
        }
    }
    return numbers;

}
console.log(sorting(numbers));
//output:[ 8, 12, 25, 50 ] 

/* Bubble sort cann't use  for ...of  loop

function sorting1(numbers){
    for(let items of numbers){
        for(let innerItems of numbers - 1 - items){
            if(innerItems > innerItems + 1){
                let temp = innerItems;
                innerItems = innerItems + 1;
                innerItems + 1 = temp;
            }
        }
    }
    return numbers;

}
console.log(sorting(numbers));
*/

const numbers2 = [50, 12, 25, 8, 15];
numbers.sort();
console.log(numbers);
//[ 12, 25, 50, 8 ] false value

const againNumbers = [50, 12, 25, 8, 15];
againNumbers.sort((a, b) => a - b);
console.log(againNumbers);
//output:[ 8, 12, 15, 25, 50 ]

//Problem-2
const arrayNumbers = [13,  2, 45,  9, 6];
function descendingOrder(arrayNumbers){
    for(let i = 0; i < arrayNumbers.length; i++){
        for( let j = 0; j < arrayNumbers.length - 1 - i; j++){
            if(arrayNumbers[j] > arrayNumbers[j + 1]){
                let temp = arrayNumbers[j];
                arrayNumbers[j] = arrayNumbers[j + 1];
                arrayNumbers[j + 1] = temp;

            }
        }
    }
    return arrayNumbers; //because sort method return existing value but modifier.
}

console.log(descendingOrder(arrayNumbers));
//output: [ 2, 6, 9, 13, 45 ]

const descendingOrder1 = [13, 2, 45, 9, 6];
descendingOrder1.sort((a, b) => a - b);
console.log(descendingOrder1);
//output:[ 2, 6, 9, 13, 45 ]

//Problem-3
const friends = [
    {name: 'Ali', age: 29},
    {name: 'Tariq', age: 22},
    {name: 'Sara', age: 35}
];
function sorting(friends){
    for(let i = 0; i < friends.length; i++){
        for( let j = 0; j < friends.length - 1 - i; j++){
            if(friends[j].name > friends[j + 1].name){
                let temp = friends[j].name;
                friends[j].name = friends[j + 1].name;
                friends[j + 1].name = temp;

            }
        }
    }
    return friends;

}
console.log(sorting(friends));
//output: [{ name: 'Ali', age: 29 }, { name: 'Sara', age: 22 },{ name: 'Tariq', age: 35 } ]

friends.sort((a, b) => a.age - b.age);
console.log(friends); 
//output: [ { name: 'Sara', age: 22 },{ name: 'Ali', age: 29 }, { name: 'Tariq', age: 35 } ]

friends.sort((a, b) => a.name.localeCompare(b.name));
console.log(friends);
//output:[ { name: 'Ali', age: 29 },{ name: 'Sara', age: 22 },{ name: 'Tariq', age: 35 }]

//Problem-4
const array = ['nabil', 'zubayer', 'sarwar', 'delwar'];
function sort(array){
    for(let i = 0; i <  array.length; i++){
        for(let j = 0; j < array.length - 1 - i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;

}
console.log(sort(array));
//output: [ 'delwar', 'nabil', 'sarwar', 'zubayer' ]

array.sort((a, b) => a - b);
console.log(array);
//output:[ 'delwar', 'nabil', 'sarwar', 'zubayer' ]