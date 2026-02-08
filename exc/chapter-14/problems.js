//Problem-1
const str = " Hi".repeat(10);
console.log(str);
//output: Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi

//Problem-2
const str2 = "I am learning Javascript. Javascript is amazing!";
const modify = str2.replace("Javascript", "Js");
console.log(modify);
const str3 = "I am learning javascript. javascript is amazing!".replaceAll("javascript", "js");
console.log(str3);

//problems-3
const str4 = "I love apples and apples are tasty!";
const modify2 = str4.replace("apples", "mangoes");
console.log(str4);//I love apples and apples are tasty!
console.log(modify2); //I love mangoes and apples are tasty!

const word = "I love programming!".replace("!", "?");
console.log(word); //I love programming?

// replace ..all
const sentence = "I Love Programming, Programming is fun!";
function replace(sentence, replaceWord, editWord){
    let result = "";
    let sum = 0;
    while(sum < sentence.length){
        let match = true;

        for(let i = 0; i < replaceWord.length; i++){
            if(sentence[sum + i] !== replaceWord[i]){
                match = false;
                break;

            }
        }
        if(match){

            result += editWord;
            sum += replaceWord.length;

        }else{

            result += sentence[sum];
            sum++;

        }

    }
    return result;

}
console.log(replace(sentence, "Programming", "code"));
//output:I Love code, code is fun!

// replace ...one

function replaceAll(sentence, replaceWord, editWord){
    let result = "";
    let  i = 0;
    let find = true;
    while(i < sentence.length){
        let match = true;
        for(let j = 0; j < replaceWord.length; j++){
            if(sentence[i + j] !== replaceWord[j]){
                match = false;
                break;

            }
        }
        if(match){
            if(find){
                result += editWord;
                i += replaceWord.length;
                find = false;

            }
            result += sentence[i];
            i++;

        }else{
            result += sentence[i];
            i++;

        }
    }
    return result;

}
console.log(replaceAll(sentence, "Programming", "code"));
//output: I Love code, Programming is fun!


