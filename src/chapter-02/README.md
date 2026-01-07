# Chapter-2

## Learn to create variables, with work strings, and  understand some Javascript math topics

## What is variable?
A variables is like a **box that stores data**.You can store numbers, text, true/false values etc.

## Three ways to declare Variables
Javascript has three keywords for creating  variables:

- **var** Old method (better not to use).
- **let** Changeable variable.
- **const** Fixed value, cannot be changed.

--- 

## Using `let`
```js
let name = "Jobayer";
console.log(name);
```
### You can change the value
```js
let age = 20;
age = 21;// value updated
```
## Using `const`
```js
const name = "Jobayer";
console.log(name);
```
### Cannot be changed
```js
const age = 20;
age = 21; // will give an error
```
## Variable Naming Rule
1. You cannot start the name with a number.
2. No spaces in the name.But camelcase is allowed.
3. You can use letters,numbers, _(underscore), and $.
4. Variable names are case sensitive.

## Summery 
- A variable is a container that store data.
- Use **let** and **const** in most use case.
- **const** value cannot be changed.
- Follow naming rules.

## What is a string?
A string in Javascript is a **sequence of character**, used to represent text.

## How to create strings
- **Double quotes:** "Jobayer"
- **Single quotes:** 'Joban'
- **Backticks(temples literatures):** `Jobayer`;

### Examples
```js 
const firstName = "Jobayer";
const lastName = 'Joban';
const fullName = `Jobayer Joban';
```

## Summery 
- Strings store text.
- Use single quotes, double quotes ,or backticks.


## What is math operator in javascript?
In Javascript, math operators are symbols used to perform mathematical calculations on numbers.They are like to basic tools for arithmetic.

## Basic Math Operators
```js
 + = Addition
 - = Subtraction
 * = Multiplication
 / = Division
 % = Modulus(Remainder)
 ** = Exponent(power)
```
## Example in Javascript
```js
const x = 5;
const y = 2;
console.log(x + y); // 7
console.log(x - y); // 3
console.log(x * y); // 10
console.log(x / y); // 2.5
console.log(x % y); // 1
console.log(x ** y); //25
```
## Summery 
- +, - , *, / are arithmetic operators.
- % gives the remainder.
- ** calculates power.
- Those operator work with numbers and can be combined with variables.
