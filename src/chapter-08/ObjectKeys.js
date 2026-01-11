

const computer = {
    brand: 'leveno',
    price: 35000,
    processor: 'intel',
    ssd: '512gb'


};
const keys = Object.keys(computer);
console.log(keys); // [ 'brand', 'price', 'processor', 'ssd' ]

const person = {
    name: 'Jobayer',
    age: 25,
    profession: 'Developer',
    country: 'Bangladesh'

};
console.log(Object.keys(person)); //[ 'name', 'age', 'profession', 'country' ]

for(let sum of Object.keys(person)){
    console.log(sum, ":",  person[sum]);

}; 
const obj = {
    name: "Joban",
    age: 25,
    email: "jobayerjoban0048@gmail.com"

}

for(let sum of Object.values(obj)){
    console.log(sum);

}

//core code of Object.keys
const objKeys = {
    name: 'Jobayer',
    age: 25,
    email: 'jobayerjoban0048@gmail.com'

}
function myObjectKeys(objKeys){
    const key =  []; // empty array store keys
    for(let keys in objKeys){
        if(objKeys.hasOwnProperty(keys)){
            key.push(keys);
            

        }
    }
    return key;

}
console.log(myObjectKeys(objKeys));


const value = {
    name: "Jobayer",
    age: 25,
    email: "Jobayerjoban0048@gmail.com"
};
console.log(Object.values(value));

const Values = {
    name: "Jobayer",
    age: 25,
    country:"Bangladesh"
};

function myValues(Values){
    const key = []; //empty  array
    for(let sum in Values){
        if(Values.hasOwnProperty(sum)){
            key.push(Values[sum])
        }
    }
    return key;

};
const profile = {
    name: "Jobayer",
    age: 30,
    email:"jobayerjoban0048@gmail.com",
    city: "Rajshahi"
};
const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("Jobayer");
console.log(hasName);

if("email" in profile){
    console.log("email exist");
}else{
    console.log("No email. No Spam");


}

if(profile.hasOwnProperty("email")){
    console.log("email niye borolox hoye gesi"); //output
}else{
    console.log("email sara jibon");

}

if(profile.name === "Jobayer"){
    console.log("has value"); //output 
}else{
    console.log("find out value");

}

if(profile.city === "Dhaka"){
    console.log("Jam er city Dhaka");
}else{
    console.log("Aram sob grame");

}

const number = {
    number:1, 
    value: 3, 
    sonkha: 10,
}
if(number.hasOwnProperty("sonkha")){
    console.log("find it");
}else{
    console.log("find out");
}

//Object.entries() 
const personObj = {
    name: "Alice",
    age: 25,
    country: "Bangladesh"
}
const entries = Object.entries(personObj);
console.log(entries);
//output: [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'country', 'Bangladesh' ] ] // Array of Array or two-dimensional array

const person2 = {
    name: "Esha",
    age: 19,
    country: "Bangladesh"
}
for(const key in person2){
    const value = person2[key];
    console.log(key, value);

}

for(let [key, value] of Object.entries(person2)){
    console.log(key, ":", value);

}

const value2 = {
    name: "Jobayer",
    age: 21,
    email: "jobayerjoban0048@gmail.com"
}
const entire = Object.keys(value2);
for(let key of entire){
    console.log(key, value2[key]);
}

const addObj = {
    name: "Jobayer",
    age: 21,
    email: "jobayerjoban0048@gmail.com"
}
function entry(addObj){
    const entries = [];
    for(let keys in addObj){
        if(addObj.hasOwnProperty(keys)){
            entries.push([keys, addObj[keys]]);
        }
    }
    return entries;

}
entry(addObj);

