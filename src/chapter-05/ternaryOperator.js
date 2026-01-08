const age = 20;
if(age >= 18){
    console.log("Vote for hote");
}else{
    console.log("You are not eligible for vote");

}
//output:Vote for hote

//use ternary operator 
const boyAge = 18;
age >= 18 ? console.log("Eligible") : console.log("Not eligible");
//output:Eligible

const isMoney = 500;
isMoney >= 1000 ? console.log("Buy a shirt") : console.log("I could not buy a shirt");
//output:I could not buy a shirt

let price = 500;
let isLeader = false;
if(isLeader === true){
    console.log("price = 0");

}else{
    console.log("price = price + 100;");

}

const prize = isLeader === true ? 0 : price + 100;

