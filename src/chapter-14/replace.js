const word = "I Love Javascript";

function replace(word, replaceWord, editWord){
  let sum = 0;
  let result = "";

  while(sum < word.length){

    let match = true;

    for(let i = 0; i < replaceWord.length; i++){

      if(word[sum + i] !== replaceWord[i]){
        match = false;
        break;

      }
    }
    if(match){

      result += editWord;
      sum += replaceWord.length;

    }else{

      result += word[sum];
      sum++;

    }
  }
  return result;

}
console.log(replace(word, "Love", "love"));
//I love Javascript

const sentence = 'Bangladesh is may may country';
function replaceOne(sentence, replaceWord, editWord){
  let initial = 0;
  let find = true;
  let result = '';

  while(initial < sentence.length){
    let match = true;
    for(let i = 0; i < replaceWord.length; i++){
      if(sentence[initial + i] !== replaceWord[i]){
        match = false;
        break;

      }
    }
    if(match){
      if(find){
        result += editWord;
        initial += replaceWord.length;
        find = false;

      }
      result += sentence[initial];
      initial++;

    }else{
      result += sentence[initial];
      initial++;

    }
  }
  return result;

}
console.log(replaceOne(sentence, "may", "my")); 
//Bangladesh is my may country