# Chapter-3 Data type

## JavaScript Basics: typeof, let, comments & parse methods.

## What is typeof ?
typeof is used to check the data type of value.

```js
typeof 10 //Number
typeof "Hello" //String
typeof true //Boolean
```
## Example:
```js 
let  prize = 100;
console.log(typeof prize); //output:number
```

## What are comments ?
Comments are notes in the code that ignore Javascript.

## Single line comment
```js
// This  is a single line comment.
```

## Multi-line comment
```js
/*
This is 
a multi-line 
comment.
*/
```
## What is a Variable
Variable is container use to store data.

## How to define variable name or how to declare variable stander way ?
The following are some rules..
1. We cannot use Reserve keyword in Javascript.
2. Try to define variables in the recommended way.

## What is a Parse method ?
Parse methods are use to convert strings into numbers.

## parseInt
parseInt use to convert string into integer(Whole number).

```js
const num = '200';
const changeNum = parseInt(num);
console.log(changeNum); // 200 
console.log(typeof changeNum); // number
```

## parseFloat
parseFloat is to convert string into decimal number or floating number. 

```js
let str = '20.1230';
let changeStr = parseFloat(str);
console.log(changeStr); // 20.1230
console.log(typeof changeStr); //number
```
## toFixed
toFixed is a method. It rounds numbers to decimal places, returns a string, and works only on numbers.

## Example
```js
const num = 20.124;
const changeNumber = num.toFixed(2);
console.log(changeNumber); //20.12
console.log(typeof changeNumber); //string
```
```js
const str = '30.234';
const changeStr = str.toFixed(str);
console.log(changeStr);// error
```
```js
const str = '30.234';
const changeStr = Number(str);
const allNumber = changeStr.toFixed(2);
console.log(allNumber); //30.234
console.log(typeof allNumber); //string
```

```js
const str1 = '102.234';
const changeStr1 = parseInt(str1);
const totalNumber = changeStr1.toFixed(2);
console.log(totalNumber); // not absolute value
console.log(typeof totalNumber); //string
```
```js
const str2 = '200.344';
const changeStr2 = parseFloat(str2);
const changeValue = changeStr2.toFixed(2);
console.log(changeValue); // 200.344
console.log(typeof changeValue); //string
```

## Number 
Number method is use to convert a value (like a string or boolean)
into a number.
1. Whole string must be numeric or boolean.
2. Otherwise NaN.

## Example
```js
const str = '234';
const changeStr = Number(str);
console.log(changeStr); //234
console.log(typeof changeStr); //number

const str1 = '234N';
const changeStr1 = Number(str1);
console.log(changeStr1); //NaN
console.log(typeof changeStr1); //number

const bol = true;
const changeBol = Number(bol);
console.log(changeBol); //1
console.log(typeof changeBol); //number

const bol1 = false;
const changeBol1 = Number(bol1);
console.log(changeBol1); // 0
console.log(typeof changeBol1); //number
```
