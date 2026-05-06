// there are two ways define regular expression 
const word = /apple/;
const word2 = new RegExp('Apple');
console.log(word2);
console.log(word);


const sentence = 'I have a apple';
const pattern = /apple/;
console.log(pattern.test(sentence));


const anotherSentence = "I have an apple and another apple";
const newSentence = anotherSentence.replace(/apple/g, 'banana');
console.log(newSentence);

/* Error-
const newAnotherSentence = "I have a plane and this is good plane";
const modifySentence = newAnotherSentence.replace(new RegEx('apple'));
console.log(modifySentence);

*/

const newAnotherSentence = "I have a plane and this is a good plane";
const modifySentence = newAnotherSentence.replace(/plane/g,'idea')
console.log(modifySentence);

const str = "I Love javascript";
const result = /Love/.test(str);
console.log(result);

//global flag 
const text = "hello hello hello";
console.log(text.match(/hello/g));//[ 'hello', 'hello', 'hello' ]


// case insensitive flag i

const text1 = "Hello Hello hello";
console.log(text1.match(/text1/));//null  -international empty value;

const text2 = 'Hello hello Hello';
console.log(text2.match(/hello/gi));//[ 'Hello', 'hello', 'Hello' ]

//Multiline flag m
const text3 = 'Hello\nword';
console.log(text3);

const text4 = `hello 
word`;
console.log(text4);

const text5 = `hello 
word`;
console.log(text5.match(/^word/)); //null

const text6 = `hello
word`;
console.log(text6.match(/^word/m));

const text7 = "hello\nword";
console.log(text7.match(/hello.word/));//null

const text8 = "hello\nword";
console.log(text.match(/hello.word/s));

//Email validation 
const email = 'emample@gmail.com';
const emailPattern = /^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+/;
console.log(emailPattern.test(email));

const pattern1 = 'jobayerjoban0048@gmail.com';
const emailPattern2 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern2.test(pattern1));

const number = '01855294935';
const numberPattern = /^01[3-9]\d{8}$/;
console.log(numberPattern.test(number));
