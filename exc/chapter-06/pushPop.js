//Problem-1
const array = [10, 20, 30, 40, 50];
array.push(60);
console.log(array);
//output:[ 10, 20, 30, 40, 50, 60 ] 

const  isArray = [10, 20, 30, 40, 50];
//const size = isArray.length;

function howToCreatePush(isArray){
    const value = 60;
    if(isArray.length == 0) return undefined;
    //isArray.length = isArray.length + 1; //no need
    isArray[isArray.length] = value;
    


    return isArray;

}
console.log(howToCreatePush(isArray));
//output:[ 10, 20, 30, 40, 50, 60 ]
//output: undefined;

//Problem-2
const nameArray = ["Shajib", "Shagor", "Shakib", "Shohel"];
nameArray.push("Sumon");
console.log(nameArray);
//output:[ 'Shajib', 'Shagor', 'Shakib', 'Shohel', 'Sumon' ]

const againNameArray = ["Shajib", "Shagor", "Shakib", "Shohel"];
function usePush(againNameArray){
    const addName = "Sumon";
    if(againNameArray.length === 0) return "Please give value in the array";
    //againNameArray.length = againNameArray.length + 1; //no need
    againNameArray[againNameArray.length] = addName;
    
    return againNameArray;


}
console.log(usePush(againNameArray));
//output:[ 'Shajib', 'Shagor', 'Shakib', 'Shohel', 'Sumon' ]


//Problem-3
const myInstallGamesArray = ["Aul", "Faul", "Maul", "Daul", "Kaul", "Baul"];
const popArray = myInstallGamesArray.pop();
console.log(myInstallGamesArray);
console.log(popArray);
//output:[ 'Aul', 'Faul', 'Maul', 'Daul', 'Kaul' ]
//output: Baul

const installMyGameArray = ["Maul", "Jaul", "Laul", "Chaul", "Vaul", "Jaul"];
function howToCreatePop(installMyGameArray){
    const indexValue = installMyGameArray.length - 1; 
    const findValue = installMyGameArray[indexValue];
    installMyGameArray.length = installMyGameArray.length - 1;

    return findValue;


}
console.log(howToCreatePop(installMyGameArray));
console.log(installMyGameArray);
//output:Jaul
//output:[ 'Maul', 'Jaul', 'Laul', 'Chaul', 'Vaul' ]

//Problem-4
const myArray = [24, 36, 48, 60];
myArray.unshift(12);
console.log(myArray);
//output:[ 12, 24, 36, 48, 60 ]

const myOurArray = [24, 36, 48, 60];
function howToCreateUnshift(myOurArray){
    const newValue = 12;
    
    if(myOurArray.length === 0) return undefined;
    for(let i = myOurArray.length; i > 0; i--){
        
        myOurArray[i] = myOurArray[i - 1];
    }
    
    myOurArray[0] = newValue;

    return myOurArray;

}

console.log(howToCreateUnshift(myOurArray));
console.log(myOurArray);

//Problem-5;
const bookArray = ["computer Programming", "Git and Github", "Js book", "Higher Math", "Html"];
bookArray.shift();
console.log(bookArray);
const boiArray = ["computer Programming", "Git and Github", "Js book", "Higher Math", "Html"];
function howToCreateShift(boiArray){
    for(i = 0; i < boiArray.length - 1; i++){
        boiArray[i] = boiArray[i + 1];

    }
    //bookArray.length = bookArray.length - 1;
    return boiArray;

}
howToCreateShift(boiArray);
console.log(boiArray);
//output:[ 'Git and Github', 'Js book', 'Higher Math', 'Html', 'Html' ]
