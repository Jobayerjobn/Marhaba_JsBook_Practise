//Problem-1
function returnOddNumbers(arr){
    let sum = 0;
    for(let value of arr){
        if(value % 2 !== 0){
           sum += value;

        }
    }
    return sum;
}
console.log(returnOddNumbers([5, 15, 8, 7]));
// 27

//Problem-2
function bigNumber(arr){
    if(arr[0] < arr[1]){
        return arr[0];
    }else{
        return arr[1];

    }
}
console.log(bigNumber([40, 30, 40, 50]));
//output:30


function add(num){
  let count = 0;
  let arr = [];
  for(let sum of num){
    arr.push(sum);
    if(count == 1){
      break;
    }
    count++;
  }
  if(arr[0] < arr[1]){
    return arr[0];

  }else{
    return arr[1];

  }
  
}
console.log(add([4, 20, 40]));//4

function other(arr){
    return arr[0] < arr[1] ? arr[0] : arr[1];
}
console.log(other([3, 4, 5])); //3

//Problem-3
function age(age){
    if(age < 18){
        return 18;
    }else if(age > 45){
        return 45;
    }else{
        return age;
    }
}
console.log(age(5));//18
console.log(age(55));//45
console.log(age(20));// 20

//Problem-4
function something(arr){
    let value = 0;
   for(let sum of arr){
      if(sum % 4 == 0){
        value += sum;

      }
   }
   return value;
}
console.log(something([2, 4, 5, 7, 8, 32, 45]));
//output:44

//Problem-5
function takesNumber(number){
    if(number < 20){
        return number * 2;
    }else{
        return number / 20;
    }
}
console.log(takesNumber(100));
//output:5

//Problem-6
function returnNegativeNumber(number){
   let sum = 0;
   for(let value of number){
      if(value < 0){
        sum += value;
      }
   }
   return sum;


}
console.log(returnNegativeNumber([20, -3, -5, 6, 6]));
//output: -8

//Problem-7

function takesArray(number){
    let sum = 1;
    for(let value of number){
        if(value % 3 == 0){
            sum *= value

        }
    }
    return sum;
}
console.log(takesArray([20, 34, 25, 30,[6], 15]))
//output:2700