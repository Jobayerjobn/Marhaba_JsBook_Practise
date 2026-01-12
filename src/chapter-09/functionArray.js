//step1
function sumOfNumbers(){
    
}
const result = sumOfNumbers();
console.log(result);

//step2
function sumOfNumbers(numbers){
    console.log(numbers);

}
console.log(sumOfNumbers([20, 20, 40, 50, 100]));

//step3
function sumOfNumber(numbers){
    for(const number of numbers){
        console.log(number);

    }
}
sumOfNumbers([20, 20, 40, 50, 100])

//step4
function sumOfNumbers(num){
    let sum = 0;
    for(let value of num){
        sum = sum + value;
        console.log(sum);  

    }
    
}
sumOfNumbers([20, 20, 40, 50, 100]);


function addOfNumbers(arr){
    let sum = 0;
    for(let value of arr){
        sum += value;

    }
    return sum;

}
const end = addOfNumbers([20, 30, 40, 50]);
console.log(end);



function returnEvenNumber(numbers){
    let sum = 0;
    for(let add of numbers){
      if(add % 2 == 0){
        sum += add;
        
      }
      
    }
    return sum;
    
}
const last = returnEvenNumber([20, 9, 10, 11, 13, 16, 18]);
console.log(last);