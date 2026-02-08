const str = "A";
if(str >= 'A' && str <= 'Z'){
    console.log(str,"is  UpperCase");

}else{
    console.log(str, "is not UpperCase");

}

const word = 'a';
if(word >= "a" && word <= "z"){
    console.log("LowerCase");

}else{
    console.log("upperCase");

}

const subject = "Chemistry";
const book = 'chemistry';

if(subject == book){
    console.log("I am reading book");

}else{
    console.log("Hudai prista ulta");

}
//output:Hudai prista ulta

const name = 'noMAD d MAD';
const lower = name.toLowerCase();
console.log(lower);
console.log(name);
//output:nomad d mad
//output:noMAD d MAD

const a = 'a';
console.log(a.charCodeAt(0)); 
const b = 'BA';
console.log(b.charCodeAt(1));
console.log(b.charCodeAt(1));

const name2 = 'noman N Man';
const upper = name.toUpperCase();
console.log(upper);//NOMAD D MAD

const sub = 'Chemistry';
const booi = 'chemistry';

if(sub.toLowerCase() === booi.toLowerCase()){
    console.log('I am reading booK');

}else{
    console.log('Hudai prista ultatesi');

} 
//output:I am reading booK
const bishoy = 'Math';
const boi = 'math';

if(bishoy.toLowerCase() === boi){
    console.log("I am reading book");

}else{
    console.log(`just prista ultaitesi`);
}
//output:I am reading book

