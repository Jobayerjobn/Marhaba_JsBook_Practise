//Problem-1

//const friends = 'Raju,Rana,Hasan,Kabir,Mahi'.split("4, 8");
//output:[ 'Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi' ]

const friends = 'Raju,Rana,Hasan,Kabir,Mahi';

function split(friends){
    let emptyArray = [];
    let storeWord = '';

    for(let i = 0; i < friends.length; i++){
        let value = friends.charCodeAt(i);

        if((value >= 65 && value <= 90) || (value >= 97 && value <= 122)){
            storeWord += friends[i];

        }else{
            if(storeWord.length > 0){
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
console.log(split(friends));
//output:[ 'Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi' ]

//Problem-2
const friendsName = ['Jobayer', 'Joban', 'Karim', 'Rahim', 'Nadim', 'Fahim'].join(",");
console.log(friendsName); 
//output:Jobayer,Joban,Karim,Rahim,Nadim,Fahim

//Problem-3
const str = "function if else while".split(" ");
console.log(str);
//output:[ 'function', 'if', 'else', 'while' ]

//Problem-4
const languages = ['Javascript', 'Python', 'Java'].join(";");
console.log(languages);
//output:Javascript;Python;Java

//Problem-5
const string = "for,while,for-in,for-of,do-while".split(",");
console.log(string);
//output:[ 'for', 'while', 'for-in', 'for-of', 'do-while' ]

//Problem-6
const message = ' console.log debug '.trim();
console.log(message);
//output:console.log debug

//Problem-7
const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";

const attempt = str1.concat(" ", str2 ," ",str3," ",str4);
console.log(attempt);
//output:push pop shift unshift 

const attempt2 = `${str1} ${str2} ${str3} ${str4}`;
console.log(attempt2);
//output:push pop shift unshift

//Problem-8
const sentence = "Hello JavaScript Developers".slice(6, 16);
console.log(sentence);
//output:JavaScript
const sentence2 = "Hello Javascript Developers".substring(6, 16);
console.log(sentence2);
//output:Javascript


//Problem-9

const message2 = "code More Learn more";
const start = message2.indexOf("Learn");
console.log(start);
const end = start + "Learn".length;
console.log(end);

const sub = message2.substring(start, end).toLowerCase();
console.log(sub);
//output:learn 


