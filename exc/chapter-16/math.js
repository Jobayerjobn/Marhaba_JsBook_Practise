//Problem-1
const min = Math.min(45, 11, 89,-200, 23, 56, -12, -56);
console.log(min);
//output:-200

//Problem-2
const max = Math.max(21, 35, 67);
console.log(max);
//output:67

//Problem-3
const round = Math.round(7.6);
const round2 = Math.round(7.2);
console.log(round);
console.log(round2);
//output:8
//output:7
//Problem-4
const floor = Math.floor(9.8);
const floor2 = Math.floor(5.3);
console.log(floor);
console.log(floor2);
//output:9
//output:5

//Problem-5
const ceil = Math.ceil(3.1);
const ceil2 = Math.ceil(6.9);
console.log(ceil);
console.log(ceil2);
//output:4
//output:7

//Problem-6
const abs = Math.abs(-34);
console.log(abs);
//output:34

//Problem-7

function someCalculations(input){
    console.log("round Answer",Math.round(input));
    console.log("floor Answer",Math.floor(input));
    console.log("ceil Answer", Math.ceil(input));

}
someCalculations(3.5);
//output:round Answer 4
//output:floor Answer 3
//output:ceil Answer 4




