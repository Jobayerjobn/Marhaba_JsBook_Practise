const str = "hello"; //string
console.log(typeof str);
const arr = Array.from(str);
arr[0] = "B";
console.log(str);
console.log(arr);
console.log(Array.isArray(arr));
console.log(typeof arr);
for(let i of arr){
    console.log(i);

}
//output:[ 'h', 'e', 'l', 'l', 'o' ]

const str2 = "Jobayer";
console.log("Aukau");
str2[3] = "E";
console.log(str2);

console.log(str2);
for(let sum of str2){
    console.log(sum);
}


const mySet = new Set([10, 20, 30, 40]);
console.log(mySet);
const ar = Array.from(mySet);
console.log(ar);
console.log(typeof ar);
console.log(typeof mySet);

const numbers = [10, 20, 30, 40, 50, 60, 70];
const doubled = Array.from(numbers, x => x * 2);
console.log(doubled);

function argObject(){
    const args = Array.from(arguments);
    console.log(args);


}
argObject(1, 2, 3);

function test(){
    console.log(arguments);

}
test(1, 3, 5, 6);

const value  = (...args) => {
    console.log(args);

}
value(1,2 , 3);
