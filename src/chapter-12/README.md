# Chapter-12 | Destructuring 

## what is destructuring ?
Destructuring is a system that allows a data structure to extract specific values accurately.

## example
```js
//array destructuring
const arr = [10, 20, 30, 40, 50] = arr;
const [a, b, c, ...rest];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const array = [10, 20, 30, 40, [10, 30, 40, [100, 400]]];
const [ , , , , [a, b, c]] = array;
console.log(a); //10
console.log(b);//30
console.log(c);//40


//object Destructuring 

const obj = {
    name: "jobayer",
    age :  19,
    email:"jobayerjoban0048@gmai.com",

    results: {
        math: 30,
        biology: 40,
        physics: 50,
        just: function (){
            return obj.results.math * obj.results.biology;
           // return value;
           // console.log(value);


        }
    }
};

const{name, age, email, address = "Dhaka,Bangladesh", results:{just}} = obj;
console.log(name); //jobayer
console.log(age); //19
console.log(email);//jobayerjoban0048@gmai.com
console.log(address);//Dhaka,Bangladesh
console.log(just());//1200

const people= {
    name: "Paglou",
    age: 100,
    email: "paglou@gmail.com",
    results: {
        math: 20, 
        biology: 30,
        physics: 100,
        fun: function(){
            return people.results.math * people.results.physics;

        },
        address:{
            country: "Uganda",
            village: "Mau"
        },
        
    },

   
}

const cal = ({name: nam, email: msg, results: {math: Gonit, biology},results: {fun}, results:{address: {country: desh, village}}}) => {
    console.log(`My name is: ${nam}. My age email ${msg}, My results: ${Gonit}, And ${biology}, allResults:${fun()}. Address ${desh}, Village${village}`);
    
}
cal(people);

const data = [{name: "job", source: [10, 30]}];
const[{name, source: [value, balue] }] = data;
console.log(name);//job
console.log(value);//10
console.log(balue);//30

```
## Spread Operator(...)

... = take everything inside an array or object and put it somewhere new.
but its nested array or object do shallow copy.

## example
```js
const arr = [10, 20, 30, 30];
const copyArr = [...arr];
console.log(copyArray);//[10, 20, 30, 30]

const obj = {
    name: "job",
    age: 9
}
const copyObj = {...obj};
console.log(copyObj);//{name: "job", age: 9}

```

## Module (export and import)
difference between export and import:
1. export is used to share code from this file.
2. import is used to use code exported from another file.
3. A module cannot have multiple default exports.