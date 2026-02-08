/*
const word = "hello";
for(let i = 0; i < word.length; i++){
    for(let j = 0; j < word.length; j++){
        for(let e = 0; e < word.length; e++){
            console.log(word[j]);
            
        }
    }
}

*/
const repeat = "hello!".repeat(3).split("!").filter(n => n !== '').join(",");
console.log(repeat);

const number = 123;
function toString(number){
    const convertString = number + "";
    let value = '';

    const length = convertString.length;
    for(let i = 0; i < length; i++){
        value += convertString[i];
    }
    return value;
}
console.log(toString(number));

/*
const number1 = 3955678;
const value = number1.length;
console.log(value);
const number2 = true;
const value2 = number2.length;
console.log(value2);
const  obj = {
    name: "jobayer",
    age: 20,
    email: "jobayerjoban0048@gmail.com"
}
const obj1 = obj.length;
console.log(obj1);
*/

const number1 = 245;
function typeChange(number1){
    let  convertString = number1 + '';
    let store = '';
    for(let i = 0;  i < convertString.length; i++){
        store += convertString[i];

    }
    return store;

}
console.log(typeChange(number1));//245
const num = 123;
const str = num.toString();
console.log(str);//123

const num2 = (123).toString();
console.log(num2);//123

const num3 = (123).toString();
console.log(num3);//123

const text = "I Love programming, programming is fun!";
const result = text.replaceAll("programming", "code");
console.log(result);
const text2 = "I Love fun!".replace("Love", "fun");
console.log(text2);

