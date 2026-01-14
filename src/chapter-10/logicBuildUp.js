function inchToFeet(inch){
    const feet = inch / 12;
    return feet;

}
inchToFeet(75);
console.log(inchToFeet(75));

function convertInchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    //console.log(feetNumber);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' fr ' + inchRemaining +  ' inch.';
    return result;



}
console.log(convertInchToFeet(75));


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    const  value = kilo.toFixed(5);
    return value;
    

}
console.log(mileToKilometer(3));

function isLeapYear(year){
    if(year % 400 === 0){
        return true;

    }else if(year % 100 === 0 && year % 400 !== 0){
        return false;

    }else{
        return false;
    }

}
console.log(isLeapYear(2400));


function averageOddNumber(arr){
    let  sum = 0;
    count = 0;
    for(let odd of arr){
        if(odd % 2 !== 0){
            sum = sum + odd;
            

            count++;

        }
      
    }
    let  result = sum / count;
    return result;

}
console.log(averageOddNumber([5, 7, 10, 15, 30, 47, 38, 42]));
//output:18.5

function averageEvenNumber(arr){
    let sum = 0;
    let count = 0;
    for(let even of arr){
        if(even % 2 === 0){
            sum += even;
            count++;
        }
    }
    let result = sum / count;

    return result;

}
console.log(averageEvenNumber([10, 15, 80, 23, 17, 30, 13]));
//output: 40

function addAverage(number){
    console.log(number);

}
const nums = [12, 13, 65, 11, 24, 31];
addAverage(nums);

function evenAverage(numbers){
    const even = [];
    for(let sum of numbers){
        if(sum % 2 === 0){
            even.push(sum);

        }
    }
    console.log(even);
}
evenAverage([12, 13, 65, 11, 24, 31]);

function iseven(numbers){
    let sum = 0;
    let arr = [];
    for(let value of numbers){
        if(value % 2 === 1){
            arr.push(value);

        }
    }
    for(let num of arr){
        sum += num;

    }
    return sum;

}
console.log(iseven([13, 14, 15, 17]));
//45

function average(numbers){
    const odds = []; //declare empty array;
    for(let number of numbers){
        if(number % 2 === 1){
            odds.push(number);

        }
    }
    let sum = 0;
    for(let num of odds){
        sum += num;

    }
    const count = odds.length;
    const hello = sum / count;
     
    console.log("average of the odd numbers is:", hello);


}
average([42, 13, 58, 65, 81, 96, 7]);
//output:average of the odd numbers is: 41.5.

function noDuplicate(arr){
    let unique = [];
    for(let item of arr){
        if(unique.includes(item) === false){
            unique.push(item);

        }

    }
    return unique;
    
}
const result = noDuplicate([10, 20, 20, 40, 50, 60]);
console.log(result);

function error(arr){
    let empty = [];
    for(let str of arr){
        if(empty.includes(str) === false){
            empty.push(str);

        }
    }
    return empty;

}
console.log(error(['Helal', 'Babul', 'Kabul', 'Dabu', 'Nabul', 'Babul']));

function error(arr){
    let empty = [];
    
    for(let arrayValue of arr){
        let isFound = false;
        for(let i = 0; i < empty.length; i++){
            if(empty[i] === arrayValue){
                isFound = true;
                break;
            }
        }
        if(isFound === false){
            empty.push(arrayValue);

        }
    }    
    return empty;

}
const hello = error([3, 4, 3, 5, 4, 5, 6]);
console.log(hello);

let a = 5;
let b = 7;
