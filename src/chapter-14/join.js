const friends = ["Rahim", "karim", "Hamim"];

function join(friends, separator){
    let result = '';

    for(let i = 0; i < friends.length; i++){
        result += friends[i];

        if(i < friends.length - 1){
            result += separator;

        }
    }
    return result;

}
console.log(join(friends, "|"));//Rahim|karim|Hamim 

const realFriends = ["Rahim", "kahim", "dahim", "lahim","fahim"];
const newFriends = realFriends.join("|");
console.log(newFriends);//Rahim|kahim|dahim|lahim|fahim
console.log(realFriends); //[ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim' ]

const useJoin = ["Hello", "word"].join(" ");
console.log(useJoin);

let nameParts = ["Jobayer", "Joban"].join(",");
console.log(nameParts);

const fruits = ["Apple", "Banana", "Orange"];
const fruitsJoin = fruits.join(",");
console.log(fruitsJoin);

const path = ["Profile",  "Setting", "Privacy"];
const url = "/" + path.join("/");
console.log(url);

const  otp = [1, 3, 4, 5, 6, 7].join(" ");
console.log(otp);

const diff = [1, 2, 3].join(" ");
console.log(diff);

const str = ["h", "e", "l", "l",  "o"].join("");
console.log(str);
console.log(typeof ['h', 'e', 'l'].join()); //string
console.log(Array.isArray(["he", "ll", "oo"].join()));//false

const mistake = ['a', 'b', null, 'C', undefined].join("_");
console.log(mistake);

let text = "H e  ll o".split(" ").join("");
console.log(text);

let sentence = "I Love Javascript";

function splitAndJoin(sentence){
    return sentence.split(" ")
    .join(" ");
    
    

}
console.log(splitAndJoin(sentence));

let letters = ["Js", "book"].join(" ");
console.log(letters);

let numbers = [2026, 1, 25].join("-");
console.log(numbers);

function newArray(){
    return ["Jobayer", "Joban"].join("_");

}
console.log(newArray());

let words = ["I","am","learning","JS"];
let sentence5 = words.join(" ");
console.log(sentence5);
// output: "I am learning JS"

const input = "I   love    JavaScript    very   much";
function problem1(input){
    return input
    .trim() // first and end space clear and return string.
    .split(" ")// all one space delete and return array.
    .filter(n => n !== "") //every elements check and  ignore space
    .join(" ");//convert string and join one space;

    

}

console.log(problem1(input));

const input2 = "  Learn   JavaScript   in 2026  ";
function problem2(input2){
    return input2
    .trim()
    .split(" ")
    .filter(n => n !== "")
    .join("-")
    .toLowerCase()

}
console.log(problem2(input2));
//output:learn-javascript-in-2026


