# Chapter-05 | if - else | Condition

## What is condition ?
condition is a logical statement thats returns true of false.
```js 
//Basic syntax of if 
if(condition){
    // execute code if the condition is true;
}else{
    //execute code if the condition is false;
}

// Basic syntax of else if
else if(condition){
    //execute value  if the condition is true;
}
```
## Example 
```js
const haveMoney = true;
if(haveMoney){
    console.log("You will buy a car");
}else{
    console.log("You will not buy a car");

}
```

## Logical NOT operator(!)
Logical NOT operator are used to work true and false values.

```js
const haveMoney = false;
if(!haveMoney){
    console.log("You are poor");

}else{
    console.log("You are rich");
}
```

## Ternary Operator
Ternary Operator works based on a Condition.If the condition is true,its return true statement.otherwise,its return the false statement.It is used to as a shortcut for if-else.
```js
//Basic syntax of ternary operator
condition ? true expression : false expression ;
```
## Example
```js
const haveMoney = true;
const price = haveMoney  ? "You are establish man" : "You are not establish man";
console.log(price);
```