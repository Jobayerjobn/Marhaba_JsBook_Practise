//Problem-1 
const store = [30, 45, 20, 60, 10];
const store1 = store.map(n => n + 13);
console.log(store1);
//output:[ 43, 58, 33, 73, 23 ]

//Problem-2
const player = ["Messi", "Meradona", "Pele", "Zidane"];
const player1 = player.filter(n => n.length > 5);
console.log(player1);
//output:[ 'Meradona', 'Zidane' ]

//Problem-3
const number = [10, 15, 20, 25, 30, 35];
const number1 = number.find(n => n > 20);
console.log(number1);
//output:25

//Problem-4
const heightData = [65, 70, 68, 72, 68, 73];
const heightData1 = heightData.filter(n => n > 69);
console.log(heightData1);
//output:[ 70, 72, 73 ]

//Problem-5
const haveSomeNumbers = [7, 10, 5, 25, 30];
const haveSomeNumbers1 = haveSomeNumbers.map(n => n / 3);
const [a, b, c, d] = haveSomeNumbers1;
const value = a.toFixed(3);
console.log(value);
//output:2.333

//Problem-6
const friendList = ['Leonardoe', 'Brad Pitt', 'kate Winslet', 'Winslet', 'Audrey Hephurmn', 'Johnny Dopp'];
const friendList1 = friendList.map(n => n[2]);
console.log(friendList1);
//output:[ 'o', 'a', 't', 'n', 'd', 'h' ]

//Problem-7
const array = ["Tom", "Harry", "Sam", "Jack"];
const array1 = array.find(n => n[0] == "H");
console.log(array1);
//output:Harry

//Problem-8
const numberArray = [1, 2, 3, 4, 5];
numberArray.forEach(n =>{
    console.log(n);

})
//output: 1 2 3 4 5

//Problem-9
const animals = ['cow', 'goad', 'sheep', 'horse'];
animals.forEach(n => {
    console.log(n);

})
//output: cow goad sheep horse