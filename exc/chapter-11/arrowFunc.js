//Problem-1
const value = (arr = [10, 20, 30]) => arr[0];
console.log(value());
//ouput: 10
const value2 = arr => arr[0];
console.log(value2([5, 7, 8, 10, 12]));
//output:5

//Problem-2
const multi = (a, b, c) => a * b * c;
console.log(multi(10, 20, 30));
//output:6000
const multi2 = (a = 10, b = 20, c = 30) => a * b * c;
console.log(multi2());
//output:6000
const multi3 = (a = 10, b = 20, c = 30) => {return a * b * c};
console.log(multi3());
//output:6000
const multi4 = (a = 10, b = 20, c = 30) => `Result is ${a * b * c}`;
console.log(multi4());
//output:Result is 6000

//Problem-3
const unknown = () => "unknown";
console.log(unknown());
//output:unknown 
const unknown2 = () => {return "unknown"};
console.log(unknown2());
//output:unknown

//Problem-4
const people = (obj = {name: "kamal", money: 200}) => obj.money / 5;
console.log(people());
//output: 40
const people2 = (obj) => `His picket money ${(obj.money) / 5}`;
console.log(people2({name: "kamal", money: 200}));
//output:His picket money 40

//Problem-5

const cal = (arr = [10, 20, 40]) => {
  let sum = 0;
  let length = arr.length - 1;
  sum += arr[0] + arr[length];

  console.log(sum);


}
cal();
//output: 50

const cal2 = (arr = [10, 20, 30]) => {
    let sum = [];
    let count = 0;
    let add = 0; 
    for(let i of arr){
        if(count === 0 || count === arr.length -1){
            sum.push(i);
        }
        count++;

    }
    for(let value of sum){
        add += value;

    }
    return add;


};
console.log(cal2());
//output:40



//Problem-6
const doMath = (a = 10, b = 5) => a + b;
console.log(doMath());
//output:15
const doMath2 = (a, b) => {
    if(a == undefined || a == null){
        a = 10;
    }
    if(b == undefined || b == null){
        b = 5;
    }
    return a + b;

}
console.log(doMath2());
//output:15
