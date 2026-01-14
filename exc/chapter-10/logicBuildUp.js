//Problem-1
function countYard(mile){
    const count = mile * 1760;
    return count;

}

console.log(countYard(13));
//output:22880 

//Problem-2
function countKiloCalorie(kwh, kilocalorie){
    const result = kilocalorie * kwh;
    return result;

}
console.log(countKiloCalorie(3, 860));
//Problem-3
function convertSecond(hours){
    const second = hours * 3600;
    return second;
}
console.log(convertSecond(3));
//output: 10800

//Problem-4
function convertMeter(centi){
    const meter =   centi / 100;
    return meter;

}
console.log(convertMeter(3));
//output: 0.03

//Problem-5
function convertCentimeter(inch){
    const  centimeter = inch * 2.54;
    return centimeter;

}
console.log(convertCentimeter(3));
//output:7.62

//Problem-6
function convertKilogram(pound){
    const kilogram = 3 * 0.453;
    return kilogram;

}
console.log(convertKilogram(3))
//output:1.359

//Problem: 7
function convertMeter(yard){
    const meter =  yard * 0.91;
    return meter;

}
console.log(convertMeter(3));
//output:2.73
function  convertYard(meter){
    let yard = meter / 0.91;
     const value = yard.toFixed(3)
    return value;

}
console.log(convertYard(3))
//output:3.297

//Problem-1
function amount(incomeAmount){
    

    if(incomeAmount < 50000){
        return 10;

    }else if(incomeAmount > 50000 && incomeAmount < 100000){
        return 20;
    }else if(incomeAmount > 100000 && incomeAmount <= 200000){
        return 30;

    }else if(incomeAmount > 24400000){
        return (incomeAmount / 100) * 40; 
    }
}
console.log(amount(400000000));
//output:160000000

//Problem-2
function packageDeliveryExpend(expend){
    if(expend < 10){
        return 100;
    }else if(expend < 20){
        return 300;
    }else if(expend < 50){
        return 1000;

    }else if(expend > 50){
        return expend * 100;
    }
};
console.log(packageDeliveryExpend(40))
//output: 600

//Problem-7
function returnGrade(marks){
    if(marks > 100 || marks < 0){
        return undefined;
    }
    if(marks >= 80){
        return "A";

    }else if(marks >= 70){
        return "B";

    }else if(marks >= 60){
        return "C";
    }else if(marks >= 50){
        return "D";

    }else {
        return "F";

    }
}
console.log(returnGrade(90));
//output: A

//Problem-1
function evenNumber(arr){
    const even = [];
    for(const value of arr){
        if(value % 2 === 0){
            even.push(value);

        }
    }
    if(even.length == 0){
        console.log("hello");
        return;
    }
    let sum = 0;
    for(let againValue of even){
        sum += againValue;

    }
    const  count = even.length;
    const average = sum / count;
    console.log(average);
    
}
evenNumber([]);
//output: 21.6

//Problem-2
function oddNumberReturn(arr){
    let empty = [];
    for(let value of arr){
        if(value % 2 !== 0){
            empty.push(value);

        }
    }
    let add = [];
    let sum = 1;
    //console.log(empty);
    for(let num of empty){
        
        sum *= num * 2;

    }
    add.push(sum);
    return add;

}
console.log(oddNumberReturn([2, 4, 5, 7, 20, 10]));
//output:[ 140 ] 

//Problem-3
function checkOddNumber(numbers){
    for(let odd of numbers){
        if(odd % 2 !== 0){
            return "Odd numbers found";

        }
    

        
    }
    return "Not found odd number";


}
const result = checkOddNumber([12, 12, 24, 10, 10, 20]);
console.log(result);

//Problem-4
function something(numbers){
    let sum = 0;
    let count = 0;
    for(let value of numbers){
        
        if(value % 2 !== 0){
            sum += value;
            count++;

        }
        
    }
    if(count === 0){
        return 0;
    }
    const average = sum / count;
    return Number(average.toFixed(2));

}
const all = something([10, 2, 10, 3, 7, 9]);
const number = all + 10;
console.log(number);
console.log(typeof all);
//output: 16.33
//output: number

//Problem-5
function oddNumber(numbers){
    let arr = [];
    let count = 0;

    for(let sum of numbers){
        if(sum % 2 !== 0){
            let i = sum -1;
            arr.push(i);
            count++;

        }
    }
    if(count === 0){
        return 0;
    }
    return arr;

}
const value = oddNumber([7, 9, 10, 11, 9]);
console.log(value);
//output:[ 6, 8, 10, 8 ]

function evenNumber(number){
    let arr = [];
    let count = 0;
    for(let value of number){
        if(value % 2 == 0){
            let i = value - 1;
            arr.push(i);
            count++;

        }
    }
    if(count === 0){
        return 0;

    }
    return arr;

}
const v = evenNumber([20, 30, 31, 37]);
console.log(v);
//output:[ 19, 29 ]


