//Problem-1
const listArray = ["Mango", "Guava", "orange", "pineapple", "coconut"];
if(listArray.includes("Mango")){
    console.log("Have Mango");

}else{
    console.log("Mango nei..Tree te ott");

}
//output:Have Mango
//Problem-2
const namArray = ["Babul", "Alif", "Choton"];
const index = namArray.indexOf("Babul");
console.log(index);
//output:0

//Problem-3
const friendListArray = ["Rimon","Rifat", "Rajib"];
const index1 = friendListArray.indexOf("Rifat");
console.log(index1);
//output:1

//Problem-4
const cityArray = ["Dhaka", "Chittagong", "Sylhet"];
const addArray = cityArray.push("rajshahi");
const includes = cityArray.includes("Rajshahi");
console.log(includes);
//output: false
//Problem-5
const checkArray = ['Rain', 'dighi', 'borsha'];
if(checkArray.includes('Rain')){
    console.log("I need umbrella");

}else{
    console.log("No Rain No pain");

}
//output:I need umbrella

//Problem-6
const playArray = ['Football', 'Cricket', 'Basketball'];
const isBadminton = playArray.includes()
console.log(isBadminton);
//output:false;
