//Problem-1
const price = 4500;
if(price >= 6000){
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
}else if(price >= 3000){
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);

}else{
    console.log(price);
}
//output:4275

//Problem-2

const boyYear = 10;
const oldYear = 61;
if(boyYear < 12){
    console.log("He  will eat free in the restaurant");
    if(oldYear > 60){
        console.log("He will get discount 20%");
    }
}else{
    console.log("Pay for eat");
}
//output:He will eat free in the restaurant
//output:He will get discount 20%

//Problem-3
const bankBalance = 999;
if(bankBalance > 1000){
    console.log("pay or submit the money immediately");

}else if(1000 <= bankBalance <= 5000){ //js cann't accurate value this purpose
    console.log("Hurry! life, enjoy now");
}
//output:He will get discount 20%
//output:Hurry! life, enjoy 

//Problem-4
const studentMark = 90;
if(studentMark < 50){
    console.log("fail")

}else if(50 <= studentMark && studentMark <= 80){
    console.log("Pass");

}else if(studentMark > 80){

    console.log("A+");
}

//Problem-5
const bookPage = 500;
if(bookPage < 100){
    console.log("Small Book");
}else if(bookPage >= 100 && bookPage <= 500){
    console.log("Mid_size_book");
}else if(bookPage > 500){
    console.log("Heart-attack size book");
}
//output:Mid_size_book

//Problem-6
const temperature = 6;
if(temperature < 0){
    console.log("Ice");
}else if(temperature >= 0 && temperature <= 20){
    console.log("Cool Cool");
 
}else if(temperature > 20){
    console.log("Hot Hot");
}

//output: Cool Cool

//Problem-7 
const gameLevel = 9;
if(gameLevel < 10){
    console.log("novice");
}else if(gameLevel >= 10 && gameLevel <= 50){
    console.log("Expert");
}else if(gameLevel > 50){
    console.log("Pro Gamer");

}
//output:novice

