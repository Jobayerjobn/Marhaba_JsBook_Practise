//Problem-1

function calculation(number){
    if(number > 10){
        return true;

    }else{
        return false;
    }
}
console.log(calculation(5))//false
console.log(calculation(12));//true

//Problem-2
function calculation1(number){
    if(number % 13 === 0){
        return true;
    }else{
        return false;

    }
}

console.log(calculation1(20));
//output:false

//Problem-3
function restaurant(rice, curry, drinks){
    return rice + curry + drinks;

}
const total = restaurant(20, 30, 5);
console.log(total);
//output: 55

function isAge(age){
    if(age > 18){
        return "Eligible for Voting";
    }else{
        return "Not Eligible";
    }
}
const result = isAge(20);
console.log(result);//Eligible for Voting

//Problem-5
function length(){
    let str = "Jobayer";
    return str.length;

}
console.log(length());// 7

//Problem-6
function average(a, b, c){
    let sum  = a + b + c;
        sum = sum / 3;

        return sum;


}
const total1 = average(5, 5, 8);
console.log(total1)// 6

//Problem-7
function checkNumber(number){
    if(number < 0){
        return number * -1;

    }else{
        return "number is positive";

    }
}
const check = checkNumber(-5);
console.log(check);//5

//Problem-1
function  checkOddOrEven(arr){
    if(arr.length % 2 == 0){
        return "even number";

    }else{
        return "odd number";
    }
}
console.log(checkOddOrEven([4, 5, 7, 8, 3, 4, 5, 9, 10, 54, 58]));
//output: odd number

//Problem-2
function checkString(str){
    for(let i = 0; i < str.length; i++){
        return str[i];
        break;

        
    }
}
console.log(checkString("Name"));

//Problem-3
function calculation(number){
     if(number > 10){
        return number / 10;

     }else{
        return number * 10;

    }
}
console.log(calculation(2));
//output:20

//Problem-4
function arra(arr){
   return arr[0] + arr[1];

}
console.log(arra([20, 30, 40, 50]));
//output: 50
function inLoop(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        
        if(i == 1){
            return sum;
            

        }
    }
}
console.log(inLoop([4, 5, 8, 10, 15, 20]));//9

function Hello(a){
    let sum = 0;
    let count = 0;

  for(let i of a){
       sum += i;
       if(count == 1){
        return sum;
       }
       count++;


  }
}
console.log(Hello([2, 7, 8, 10]));//9

//Problem-6
function calculation(n){
    if(n > 0){
        return n * 2;
    }else{
        return n * -3;

    }
}
console.log(calculation(-2));//6

//Problem-6
function names(name1, name2){
    if(name1.length > name2.length){
        return true;

    }else{
        return false;
    }
}
console.log(names("Jobayer", "Esha"));//true

//Problem-7
function numbers(num1, num2){
    return num1 * num2;

}
console.log(numbers(10, 20));//200



