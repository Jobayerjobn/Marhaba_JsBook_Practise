//Problem-1

const email = 'User@Example.Com';
const lowerCase =  email.toLowerCase();
console.log(lowerCase);
//output:user@example.com

function Lower(email){
    let newStr = '';
    for(let i = 0; i < email.length; i++){
        let value = email.charCodeAt(i);
        if(value >= 65 &&  value <= 97){
            value  = value + 32;

        }
        newStr += String.fromCharCode(value);
    }
    return newStr;

    
}
console.log(Lower(email));
//output:user@exmple.com

//Problem-2
const greeting = 'hELIo WoRLd';
const convertUpperCase = greeting.toUpperCase();
const convertLowerCase = greeting.toLowerCase();
console.log(convertUpperCase);
console.log(convertLowerCase);
//output:HELIO WORLD
//output:helio world

function toLowerCase(greeting){
    let lower = '';
    for(let i = 0; i < greeting.length; i++){
        let convertNumbers = greeting.charCodeAt(i);

        if(convertNumbers >= 97 && convertNumbers <= 122){
            convertNumbers = convertNumbers - 32;

        }
        lower += String.fromCharCode(convertNumbers);

    }
    return lower;

}
console.log(toLowerCase(greeting));
//output:HELIO WORLD

function toUpperCase(greeting){
    let Upper = '';
    for(let i = 0; i < greeting.length; i++){
        let convertNumbers = greeting.charCodeAt(i);

        if(convertNumbers >= 65 && convertNumbers <= 90){
            convertNumbers = convertNumbers + 32;

        }
        Upper += String.fromCharCode(convertNumbers);

    }
    return Upper;

}
console.log(toUpperCase(greeting));
//output:helio world

//Problem-3
const language = 'Javascript';
const isIncludes = language.includes("script");
console.log(isIncludes);
console.log(language);
//output:true
//output:Javascript because this primitive data type direct store value;

//Problem-4

const text ='NextJs';
if(text[0] == "N"){
    console.log("to UperCase");

}
else{
    console.log("to lowerCase");

}
//output:to UperCase

if(text.charCodeAt(0) >= 65 && text.charCodeAt(0) <= 90){
    console.log("Upper letter:",text[0]);

}
else{
    console.log("Lower letter:",text[0]);

}
//output:Upper letter: N

if(text[0] === text[0].toUpperCase()){
    console.log("first letter is Capital letter");

}else{
    console.log("first letter is not capital letter");
}
//output:first letter is Capital letter

const check = text[0] === text[0].toUpperCase() ? "Capital letter" : "small letter";
console.log(check);
//output:Capital letter

const value = 100;
const value1 = "B";

const convertLetter = String.fromCharCode(value);
console.log(convertLetter);
const convertLetter1 = value1.charCodeAt();
console.log(convertLetter1);
//output:d
//output:66



