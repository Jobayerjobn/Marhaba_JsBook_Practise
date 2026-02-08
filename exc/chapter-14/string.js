//Problem-1
const city = "Chattogram";
const index = city.indexOf('C');
console.log(city.indexOf("g"));
console.log(index);
console.log(city);
//output:6
//output:0
//output:Chattogram

//Problem-2
const string = 'Division';
const isString = string.includes("y");
console.log(isString);
//output:false

//Problem-3
const name = 'Rifat';
const lastCharacter = name[name.length - 1];
console.log(name[name.length- 1]);//t
console.log(lastCharacter);
//output:t

//Problem-4
const language = "javascript";
const findIndex = language.indexOf("rip");
console.log(findIndex); 
//output:6

//Problem-5
const text = 'Immutable';
function checkImmutable(text){
    const length = text.length;
    console.log(length);

    text[0] = "Not";

    if(text == "Immutable"){
        return "text is immutable";
    }else{
        return "text is not immutable";

    }
    
    
};
console.log(checkImmutable(text));
//output:text is immutable

const numbers = [10, 20, 30, 40];
function isImmutable(numbers){
    numbers[0] = 20;
    
    if(numbers[0] == 10){
        return "immutable";

    }else{
        return "is not immutable";

    }
    
}
console.log(isImmutable(numbers));
//output:is not immutable


