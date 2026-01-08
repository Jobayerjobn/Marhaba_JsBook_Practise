//Problem-1
const isUserPremiumDiscount = false;
const orderPrice = 100.50;
if(isUserPremiumDiscount){
    const price = 30000;
    const discount = (price / 100) * 20;
    const  pay = price - discount;
    console.log(pay);

}else if(orderPrice >= 3000){
    const discount = (orderPrice / 100) * 10;
    const pay = orderPrice - discount;
    console.log(pay);

}else{
    const grandResult = orderPrice.toFixed(2);
    console.log(grandResult);

}
//output:100.50

//Same logic with ternary operator
const isUserPremiumDis = false;
const orderPrize = 5000;
const pay = isUserPremiumDis === true ? orderPrize - ((orderPrize / 100)* 20)  : orderPrize >= 3000 ? orderPrize - ((orderPrize / 100)* 10)  : orderPrize; 
console.log(pay.toFixed(2));


//Problem-2
const isLoggedIn = true;
const isEmailVerified = false;
if(isLoggedIn){
    if(!isEmailVerified === true){
        console.log("Please verify your email");
    }else if(isLoggedIn && isEmailVerified){
        console.log("Access granted");
    }
}
//output:Access granted
//const isLoggedIn = true;
const loginForm = !isLoggedIn ? "please login" : !isEmailVerified ? 'please verify you email' : "Access granted";
console.log(loginForm);
//Access granted

//Problem-3
const currentPrize = 4000;
const userLogIn = true; 
const userPremium = true;
const msg = currentPrize <= 0 ? "Invalid order" : !userLogIn ? 'Please login' : userPremium ? currentPrize - ((currentPrize / 100) * 20) : currentPrize >= 3000 ? currentPrize - ((currentPrize / 100) * 10) : "No discount";
console.log(msg.toFixed(2));



