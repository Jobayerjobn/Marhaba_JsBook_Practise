# Chapter-14 || String Method
## string
string is immutable, immutable means not mutable.And string is not array.
But like an array.

```js
example
const str = "Hello";
str[0] = 'h'; // immutable
console.log(str);//Hello

const array = [5, 30, 40];
array[0] = 50; //mutable
console.log(array); //[50, 30, 40]

```

## toUpperCase() and toLowerCase()
Those are used to transform letter UpperCase or LowerCase
```js
example
const subject = 'Chemistry';
const book = 'chemistry';
if(subject.toLowerCase() === book.toLowerCase()){
    console.log("I am reading book");

}else{
    console.log("Hudai prista ultai");

}//I am reading book

```
## trim()
trim is used for cut or remove space start and end.

```js
const word = " Hello ";
const change = word.trim();
console.log(change); //Hello

```
## split()
split is a string method that divides a string into an array of substring based.

```js
const word = 'H e l l o';
const value = word.split(" ", 3);
console.log(value);//[ 'H', 'e', 'l' ]
```

## join()
join is an array method that converts an array into a string by joining its elements using specified separator.

```js
const sentence = ['hello', 'How', 'Are', 'You'];
const result = sentence.join("|");
console.log(result); //hello|How|Are|You

```
## concat()
concat is javascript method used to merge two or more arrays(to string) into a new array(or string) and return the result with out changing the original values.

```js
const arr = [10, 30];
const arr1 = [20, 40];
const all = arr.concat(arr1);
console.log(all);

const str = "Hello";
const str2 = "How"
const allValue = str.concat(str2);
console.log(allValue);

```

## substring()
substring() works similarly to slice(), but there are some differences in how they handle negative values and index order.

```js
const str = "Hello";
const allValue = str.substring(5, 2);
console.log(allValue);//llo
```
## repeat()
repeat() is a JavaScript string method that returns a new string by repeating the original string a specified number of times.

```js
const rep = "Hello";
const repResult = rep.repeat(2);
console.log(repResult); //HelloHello
```
## replace()
replace() is a JavaScript string method that returns a new string with some or all matches of a pattern replaced by a specified value.
```js
const sentence1 = "Programming hero, programming is done";
const replaceWord = sentence1.replace("Programming", "codding");
console.log(replaceWord); //codding hero, programming is done
```

## reverse()
reverse() is a JavaScript array method that reverses the order of elements in an array and modifies the original array.

```js
const rev = "hello";
let reverse = '';
for(const letter of rev){
    reverse = letter + reverse;

}
console.log(reverse);//olleh

```