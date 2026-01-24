//Problems-1
const names = ['Zara', 'Tariq', 'Amir', 'Lina'];

const func = (names) => {
    let sum = [];
    let j = 0;
    for(let i = names.length-1 ; i >= 0; i--){
        sum[j] = names[i]
        j++;
    }
    return sum;

}
console.log(func(names));
//output:[ 'Lina', 'Amir', 'Tariq', 'Zara' ]
names.reverse();
console.log(names);
//output:[ 'Lina', 'Amir', 'Tariq', 'Zara' ]

//Problem-2
const numbers = [1, 4, 9, 7];
numbers.reverse();
console.log(numbers);
//output:

//Problem-3
const users = [
    {name: 'Ali', age: 30},
    {name: "Sara", age: 25},
    {name: "Tariq", age: 35}
];
function revers(users){
    let sum = [];
    let count = 0;
    for(let i = users.length-1 ; i >= 0; i--){
        sum[count] = users[i].name;
        count++;

    }
    return sum;

        
}

console.log(revers(users));
//output:[ 'Tariq', 'Sara', 'Ali' ]
