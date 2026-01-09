# Chapter-06 | Array

## What is array ?
An array is data structure used to store multiple variables in a single variable,instead of creating many separate variables.

```js
syntax of Array 
variable_name array = [];
```
## Example
```js
const array = [10, 20, 30];
console.log(array);//[10, 20, 30]
```

## Array have many methods
1. push(): push is used to in an array to add a value at the end.
## concept of push() 
Take the array.Find its length. put the new value at index = length. Increase length by 1;

```js
const arr = [10, 30];
arr.push(20);
console.log(push);//[10, 30, 20]
```
2. pop(): pop is used to in an array to remove a value at the end.
## concept of pop()
Find the last index, store the value.And remove it.Decrease the length by 1.Return the remove value;

```js
const arr = [10, 20, 30];
arr.pop();
console.log(arr);//[10, 20]
```
3. shift(): shift is used to in an array to remove a value at the first.
```js
const arr = ['Jobayer', 'Joban', 'Hero'];
arr.shift();
console.log(arr);//['Joban', 'Hero']
```
4. unshift(): unshift is used to in an array to add a value of at the first.
```js
const arr = [5, 20, 30, 40];
arr.unshift()(10);
console.log(arr);//[10, 5, 20, 30, 40]
```
5. includes(): includes is used in an array to check if a value exists.if value is exist then return true otherwise return false.
```js
const arr = [10, 20, 30];
const includes = arr.includes[10];c
console.log(includes) // true;
```
6. indexOf(): indexOf to used in an to find index of values.
```js
const arr = [10, 20, 30];
const indexof = arr.indexOf(10);
console.log(indexof);// 0 