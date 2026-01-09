const friends = ["Balam", "kalam", "Salam", "Gelam", "Pailam"];
const exist = friends.includes("Gelam");
console.log(exist);
//output: true;

const friendsArray = ['Balam', 'Khailam', 'Gelam', 'Gurlam', 'Firlam', 'Chollam'];
const exist1 = friendsArray.includes("Khailam");
console.log(exist1);
console.log(friendsArray);
//output:true;
//output:[ 'Balam', 'Khailam', 'Gelam', 'Gurlam', 'Firlam', 'Chollam' ] 

const fndArray = ["Rahim", "karim", "Sattar", "Jobayer", "Jakaria"];
if(fndArray.includes("Joban")){
    console.log("pay for allah");

}else{
   console.log("Allah bless you");

}
//output:Allah bless you

const bonduArray = ["Balam", "Gelam", "Chollam", "Gurlam", "Firlam", "Bye"];
const existBonduArray = bonduArray.includes('Gelam');
const bonArray = bonduArray.includes("gelam");
console.log(existBonduArray, bonArray);
//output:true;
//output:false;

const checkArray  = ['Jobayer', 'Joban', 'Esha'];
function howtoGetIncludes(checkArray){
    if(checkArray.length === 0) return "erorr";
    for(let i = 0; i < checkArray.length; i++){
        if(checkArray[i] === "Jobaye"){
            let value = checkArray[i];
            return  value;

        }

    }
    return false;

}

console.log(howtoGetIncludes(checkArray));
console.log(checkArray);
const ar= [];
const far = ar.includes("Hell");
console.log(far);
//output:false

const friendArray = ['Balam', 'Kalam', 'Chollam', 'Gelam', 'Bye'];
const index = friendsArray.indexOf("gelam");
console.log(index);
//output: -1;
const joyArray =["Dakchak", "Moral", "ability", "Power"];
const index1 = joyArray.indexOf("Dakchak");
console.log(index1);
//output:0
const namArray = ["Jobayer", "Joban", "Esha", "Alifa"];
function howToCreateIndexOf(namArray){
    
    if(namArray.length === 0) return undefined;
     
    for(let i = 0, j = 0; i < namArray.length; i++, j++){
        if(namArray[i] === "Esha")
            
            
        return i;
            
    }
    
    return -1;

}
howToCreateIndexOf(namArray);
console.log(howToCreateIndexOf(namArray));



