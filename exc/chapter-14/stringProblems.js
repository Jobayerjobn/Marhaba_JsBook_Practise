//Problem-1
const word = "   I   love    JavaScript    very   much   ";
function useStringMethod(word){
   return word.trim().split(" ").filter(n => n != "").join(" ");

}

console.log(useStringMethod(word));

//output: I love JavaScript very much

//Problem-2
const word2 = "I Love Programming, programming is FUN";
function useStringMethod2(word2){
    return word2
    .toLowerCase("P")
    .replaceAll("programming", "coding");

}
console.log(useStringMethod2(word2));
//output:"I Love coding, coding is FUN"

//Problem-3
const word3 = "I love JavaScript very much";
function useStringMethod3(word3){

    let result = [];
    let empty = "";
    for(let i = 0; i < word3.length; i++){
        let value = word3.charCodeAt(i);

        if((value >= 65 && value <= 90) || (value >= 97 && value <= 122)){
            empty += word3[i];
        }else{
            if(empty.length > 0){
                result.push(empty);
                empty = "";
            }
        }
    }
    if(empty.length > 0){
        result.push(empty);

    }

    let reverse = '';
    for(let letter of result){
       reverse = letter.concat(" ") + reverse;
       
    }
    
    return reverse;


}
console.log(useStringMethod3(word3));
//output:"much very JavaScript love I"


//Problem-4
const word4 = "   i   love    javascript   very much  ";

function userStringMethod3(word4){
    return word4
    .trim()
    
    
}
console.log(userStringMethod3(word4));

//output:"I Love Javascript Very Much"
