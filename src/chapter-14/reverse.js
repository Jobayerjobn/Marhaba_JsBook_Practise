const sentence = "rakab";

for(let i = sentence.length - 1; i >= 0; i--){
    console.log(sentence[i]);
    
}
let sen = "";
for(let i of sentence){
    sen += i;
    
}
console.log(sen);
const str = "I am learning Web Dev";

let emptyString = '';

for(let i of str){
    emptyString = emptyString +  i;

}
console.log(emptyString);

const sentence2 = "I am learning web dev";
let reverse = "";

for(let letter of sentence2){
    reverse  = letter + reverse;

}
console.log(reverse);
