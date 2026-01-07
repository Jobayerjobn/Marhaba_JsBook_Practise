//Problem-1
const num = '20';
const num1 = 10;
const realNum = parseInt(num);
const total = realNum + num1;
console.log(total);
//output:30

//Problem-2
const value ='3.14159';
console.log(parseInt(value));
//output:3

//Problem-3
const boy = "premikBoy";
console.log(parseInt(boy));
//output: NaN

//Problem-4
const score = 3.456;
const score2 = 2.789;
const result = score + score2;
const grandResult = result.toFixed(2);
console.log(grandResult);
//output:6.25

//Problem-5
const str = '56.78';
const changeStr = parseFloat(str);
const str1 = '12.34';
const changeStr1 = parseFloat(str1);
const allValue = changeStr + changeStr1;
console.log(allValue);
//output: 69.12

const numeric = '56.78';
const numeric1 = '12.34';
const changeNumeric = Number(numeric);
const changeNumeric1 = Number(numeric1);
const allResult = changeNumeric + changeNumeric1;
console.log(allResult);
//output:69.12

//Problem:6
const digit = '10.5678';
const digit1 = '5.4321';
console.log(Number(digit).toFixed(1));
console.log(Number(digit1).toFixed(1));
//output:10.6
//output:5.4

/* 
const digit2 = '10.5678';
const digit3 = '5.4321';
const grandDigit = parseInt(digit2);
console.log(grandDigit);
const hello = grandDigit.toFixed(1);
console.log(hello);
*/

//Problem-7
const sonkha = '42.4568754';
const floatShonka = parseFloat(sonkha);
console.log(floatShonka.toFixed(3));

const sonkha1= '42.4568754';
console.log(Number(sonkha1).toFixed(3));























