# Chapter-07 | Loop
 
## What is loop ?
A Loop is a programming concept used to repeat the same task again and again.Until a certain condition is met.
```js
syntax of loop
for(i = 0; i < 30; i++){
    console.log(i);//Print i
}
```
### There are many types of Loops
for, while , do-while
```js
syntax of for
for(let i = 0; i < 20; i++){
    console.log(i);

}
```
```js
syntax of while
let value = 0; initial/ or starting point
while(condition){
    console.log();
    value++; //increment value;
}
```
```js
syntax of do
do{
    console.log();
}while(condition);
```
All loops do almost the same task.But main difference is in the condition.

## Break statement 
The break statement is used to stop the loop.

```js
for(i = 1; i < 20; i++){
    if(i >= 10){
        break;
    }
    console.log(i);
}

```
## continue
The continue statement skips the current loop iteration and moves to the next one.
```js
for(i = 0; i < 20; i++){
    if(i == 5){
        continue; //skip 5
    }
    console.log(i);

}
```
