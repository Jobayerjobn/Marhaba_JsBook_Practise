//Problem-1
const pattern1 = "I bought an orange";
const changePattern = pattern1.replace(/orange/g,'grape');
console.log(changePattern);
//output:I bought an grape

const pattern2 = 'I bought an orange'.replace('orange', 'grape');
console.log(pattern2);
//output:I bought an grape

//Problem-2
const sentence = 'I like to have apple an banana';
const check = /ana/;
console.log(check.test(sentence));
//output:true

//Problem-3
const anotherSentence = 'I am eating apple.apple is good.apple helps me a lot';
const changeWord = anotherSentence.replace(/apple/g,'javascript');
console.log(changeWord);
//output:I am eating javascript.javascript is good.javascript helps me a lot


//Problem-4

const email = 'jobayerjoban0048@gmail.com';
const validation = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
console.log(validation.test(email));
//output:true

//Problem-5
const number = '01729588801';
const pattern = /^01[3-9]\d{8}$/;
console.log(pattern.test(number));
//output:true

