# Chapter-04 | Comparison 

## What is Comparison Operator ?
A Comparison operator is used to compere two values.And if campere is right then return true otherwise return false.

### There are eight types of Comparison operators.
1. Greater than (>) : The greater than operator is used between two values to check Which value is larger or smaller.

## Example
```js
console.log(5 > 10); //false
```
2. Less than(<) : The Less than operator is used between two values to check Which value is smaller and larger.

## Example 
```js
console.log(5 < 10); //true
```
3. Equal(==) : Equal operator is used to compare if two values are same(type is not checked)

## Example
```js
console.log(4 == 4); //true
console.log(3 == '3'); //true
console.log(4 == 2); //false
```
4. Greater than or equal(>=) : This operator is used to checks if the left value greater than or equal to the right  value.
## Example
```js
console.log(10 >= 9); //true
console.log(12 >= 12); //true
```
5. Less than or equal(<=): This operator is used to checks if the left value less than or equal to the right value.

## Example
```js
console.log(3 <= 4);//false
console.log(4 <= 4); //true
```
6. Not equal(!=) : Not equal means the two values are not the same.

## Example
```js
console.log(3 != 4); //true
console.log("Rahim" != "Karim");// false
console.log(true != false);//true
```
7. AND (&&): If the full expression is true, the result is true; otherwise, it is false.

## Example 
```js
const num = 5;
const bolValue = true;
console.log(num ==  5 && bolValue);//true
```
8. Or (||) : If the full expression is false , the result is false; otherwise it is true

## Example
```js
const value = 5;
const bolValue = true;
console.log(value == 4 || bolValue);//true

const value = 5;
const bolValue = true;
console.log(value == 4 || bolValue == false);//false
```
## Triple Equal or Strict Equal
Equal operator is used to compare if two values are same(type is checked).

## Example
```js
const nam = "Jobayer";
const fndName = "jobayer";
console.log(nam === fndName);

const value = 5;
const otherValue = '5';
console.log(value === otherValue);
```
