# Chapter-09 | Function
## what is function ?
A function is a block of code that performs a specific tasks and can be reused whenever needed.

- function helps avoid the writing the same code again and again.
- function can take input(parameters)
- function can return output(return value)

```js
syntax
function functionName(parameters){
    //code to be executed;
}
functionName(arguments) //function call
```
## Example
```js
function add(a, b){
    let sum = a + b;
    console.log(sum);
}
add(10, 20);

function add(a, b){
    return a * b;

}
console.log(add(10, 20));
```
