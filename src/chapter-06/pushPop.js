const array = [2, 4, 5, 7, 8]; 
const size = array.length;

function howToGetPush(array, size){
    //const size = array.length;
    array[size] = 100;
    array.length = array.length + 1; //stander way to add length


    return array;

}

howToGetPush(array, size);
console.log(array);


const simpleArray = [2, 5, 4, 10];
console.log(simpleArray.length + 1); // No change in the array..its just number.
console.log(simpleArray.length);
const againArray = [2, 5, 6, 9, 8, 10];

function howToGetPop(againArray){
    if(againArray.length === 0) return undefined;
    let findValue = againArray[againArray.length - 1];
    againArray.length = againArray.length - 1; //remove last element;
    
    return findValue;

}
howToGetPop(againArray);
console.log(againArray);

const arr = [10, 20, 30, 50, 60, 10.10];

function howToGetPush(arr){ // arr as a parameter
    let findTheLastIndex = arr[arr.length - 1];
    arr.length = arr.length - 1 //remove it
    return findTheLastIndex;
    //let findTheLastIndex = arr[arr.length - 1];
    //let findValue = arr[findTheLastIndex];
    // arr.length = findValue;
    //return findValue;


}
howToGetPop(arr);
console.log(arr);



const numbers = [12, 87, 98, 45];
numbers.push(44);
console.log(numbers);
//output:[ 12, 87, 98, 45, 44 ]

const number = [12, 87, 98, 45];
number.push(44, 65, 98, 11, 9);
console.log(number);
//output:[12, 87, 98, 45, 44,65, 98, 11,  9]

const friends = ['Balam', 'Kalam', 'Salam'];
friends.push('Khailam');
console.log(friends);
//output:[ 'Balam', 'Kalam', 'Salam', 'Khailam' ]

const someFriends = ['Balam', 'Behula', 'Bala', 'Bou', 'Gelam', 'Pailam', 'Silam'];
someFriends.pop();
console.log(someFriends);
someFriends.pop();
console.log(someFriends);
//output:[ 'Balam', 'Behula', 'Bala', 'Bou', 'Gelam', 'Pailam' ]
//output:[ 'Balam', 'Behula', 'Bala', 'Bou', 'Gelam' ]

const myFriends = ['Gelam', 'Khailam', 'Gumailam', 'Askkorlam', 'Bye'];
const storePopValue = myFriends.pop();
console.log(storePopValue);
//output:Bye

const nam = ["Jobayer", "Joban", "Hello", "How", "Are", "You", "Find"];
function howToCreateShift(nam){
    if(nam.length === 0) return undefined;

    for(let i = 0; i < nam.length - 1; i++){
        nam[i] = nam[i + 1];

    }
    nam.length = nam.length - 1;
    return nam;
}
console.log(howToCreateShift(nam));
//output:[ 'Joban', 'Hello', 'How', 'Are', 'You', 'Find' ]

const nameArray = ["Hello", "How", "Are", "Natok", "Kom", "koro"];
function howToCreateUnshift(nameArray){
    let value = "Jobayer";
    nameArray.length = nameArray.length + 1;
    //if(nameArray.length === 0) return "erro";
    for(let i = nameArray.length -1; i > 0 ; i--){
        nameArray[i] = nameArray[i - 1];

    }
    nameArray[0] = value;
    return nameArray;

}
console.log(howToCreateUnshift(nameArray));
//output:['Jobayer', 'Hello','How',     'Are','Natok',   'Kom', 'koro']

const numbersArray = [11, 12, 13, 14, 15, 16, 17, 18, 20];
function howToGetIncludes(numbersArray){
    for(let i = 0; i < numbersArray.length;  i++){
          if(numbersArray[i] == "20"){
            return true;
        }
        
    }
    return false;
}
console.log(howToGetIncludes(numbersArray));
//output: true;

const friendsArray = ['Balam', 'Behula', 'faul', 'Galam', 'Gelo'];
friendsArray.shift();
console.log(friendsArray);
//output:[ 'Behula', 'faul', 'Galam', 'Gelo' ]

const teachers = ["Assistant Sir", "Class Sir", "PT sir"];
teachers.unshift("Head Sir");
console.log(teachers);
//output:[ 'Head Sir', 'Assistant Sir', 'Class Sir', 'PT sir' ]

