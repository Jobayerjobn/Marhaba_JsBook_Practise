function  fanOffKor(){
    console.log("Boshe thek uthe dara");
    console.log("walk toward to switch");
    console.log("click the switch to off of the fan");

}
fanOffKor();
fanOffKor();
fanOffKor();

function $vatKhabo(){
    console.log("bosho");
    console.log("plate e khaber dhaber nao");
    console.log("gopat gopat kore khao");

}
$vatKhabo();

function _vatKhabo(){
    console.log("bosho");
    console.log("plate e khaber dhaber nao");
    console.log("gopat gopat kore khao");

}
_vatKhabo();

//Function naming rules are the same as variable naming rules.

function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);

};
add(20, 30);//50
add(40, 50);//90

function addAll(a, b, c, d, e){
    const total = a + b + c + e;
    console.log(total);

}
addAll(10, 20, 30, 40, 50);// 110

function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);


}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);
//output:40 10 difference is 30 

function diffAge(age1, age2){
    const diff = age1 - age2;
    console.log(age1, age2, "difference age is:", diff);
}
diffAge(fatherAge, myAge);
//output:40 10 difference age is: 30 

function addNumbers(a, b){
    return a + b;

}
const result = addNumbers(4, 5, 10, 12);
console.log(result); //9

function addNumber(a, b){
    console.log(arguments);
    return a + b;

}
const result1 = addNumber(5, 8, 9, 6);
console.log(result1);

function addValue(a, b){
 let sum = 0;
 for(const num of arguments){
    sum += num;

 }
 return sum;


}
console.log(addValue(20, 30, 50, 50, 50));

