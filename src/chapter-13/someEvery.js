const value = (arr) => {
    for(let i of arr){
        if(i >= 50){
            return true;

        }
    }
    return false;
}
console.log(value([11, 22, 33, 44, 55, 66, 77, 89]));

const scores = [30, 45, 55, 80, 90];
const   hasPassed = scores.some(n => n >= 50);
console.log(hasPassed);//true
const score2 = [20, 40, 50, 60, 70, 80, 99];
const hasPassed2 = score2.some(n => n >= 100);
console.log(hasPassed2); //false

function everyItem(arr){
    const length = arr.length;
    let count = 0;

    for(const sum of arr){
        if(sum >= 50){
            count++;

        } 

    }
    if(length === count){
        return true;

    }
    
    return false;
}
console.log(everyItem([10, 70, 80, 1000]));//false

const scores3 = [60, 45, 55,  80, 90];
const allScores = scores3.every(n => n >= 50);
console.log(allScores);//false

const everyNumbers =  [60, 54, 100, 55, 300];
const everyNumber1 = everyNumbers.every(n => n >= 50);
console.log(everyNumber1);//true


