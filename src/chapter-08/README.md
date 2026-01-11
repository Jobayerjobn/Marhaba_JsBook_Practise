# chapter-08 | Object

## what is Object ?
An Object group of multiple values together and each value a name(key).

```js
syntax
const / let obj = {
    key: value
}
```
## Example
```js
const obj = {
    name: "jobayer",
    age : 30,
    email: "jobayerjoban0048@gmail.com"

}
console.log(obj);
```
## Object have many methods
1. Object.keys(): return ["key1", "key2"]

2. Object.values(): return [value1, value2]

3. Object.entries(): return [[key1, value1], [key2, value2]]

4. Object.freeze(): This method are used to freeze Object. No change value,key in the object.

5. Object.seal(): This method are used to freeze Object.But its gives advantage that, we are change just value, not key.

## .dot Notation and Bracket Notation
```js
const obj = {
    name: "jobayer",
    age: 20
}
console.log(obj.name)// dot notation
```
```js
const obj = {
    name: "jobayer",
    age: 20
}
console.log(obj["name"]) //Bracket notation
```
