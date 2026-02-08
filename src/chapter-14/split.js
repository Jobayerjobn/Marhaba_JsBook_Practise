const sentence = "Hello,how,are,you";

function split(sentence){
  let emptyArray = [];
  let storeWord = '';
  let fun = ',';
  for(let i = 0;  i < sentence.length; i++){
    let code = sentence.charCodeAt(i);

    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
      storeWord += sentence[i];

    }else{
      if(storeWord.length > 0 ){
        emptyArray.push(storeWord);
        storeWord = '';


      }
    }
  }
  if(storeWord.length > 0){
    emptyArray.push(storeWord);

  }
  return emptyArray;

}
console.log(split(sentence)); //[ 'Hello', 'how', 'are', 'you' ]

const friendStr = 'Rahim,kahim,mahim,jani,maka,jsalk,kalf';
const friends = friendStr.split(",");
console.log(friendStr);
console.log(friends);

const word = 'Hello word'.split(" ");
console.log(word); //[ 'Hello', 'word' ]

const sentence2 = 'I love  javascript';
const words = sentence2.split(" ");
console.log(words); //[ 'I', 'love', '', 'javascript' ]
const sentence3 = "I love my mother".split(" ");
console.log(sentence3); //[ 'I', 'love', 'my', 'mother' ]


let data = 'apple, banana, orange'.split(' ');
console.log(data);//[ 'apple,', 'banana,', 'orange' ]
 
let url = "https://example.com/profile/settings".split("/");
console.log(url);

const user = "jobayerjoban0048@gmail.com".split(".");
console.log(user);

console.log(typeof "a b".split(" "));
console.log(Array.isArray("a b".split(" ")));

const hello = "Hello".split(); 
console.log(hello); //just return array
const hello2 = "Hello2".split("");
console.log(hello2);//[ 'H', 'e', 'l', 'l', 'o', '2' ]

//Limit parameter

const useLimitParameter = "one tow three four".split(" ", 2);
console.log(useLimitParameter);

let text = "Awesome javascript".split(" ");
console.log(text);//[ 'Awesome', 'javascript' ]

let phone = '0193-4059'.split("-");
console.log(phone);//[ '0193', '4059' ]

const fullName = 'Jobayer Joban';
function getFirstName(fullName){
      let value = fullName.split(" ");
       return value;


}
console.log(getFirstName(fullName));//[ 'Jobayer', 'Joban' ]

let word2 = "Hello".split("");
console.log(word2);//[ 'H', 'e', 'l', 'l', 'o' ]

let input = " orange, Apple, banana ".split(",").map(item => item.trim());
console.log(input);

