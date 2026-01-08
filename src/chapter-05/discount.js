const price = 6500;
if(price >= 6500){
    const discount = price / 100  * 10;
    const pay = price - discount;
    console.log(pay);

}else{
    console.log(price);

}
//output: 5850

const prize = 3500;
const discountEligible = false;
if(prize >= 2500){
    const discountEligible = true;
    if(discountEligible == true){
        const discount = (prize / 100) * 5;
        const pay = prize - discount;
        console.log(pay);
    }
}else{
    console.log(prize);
}
//output:3325

const againPrice = 4000;
if(againPrice >= 5000){
    const discount = (againPrice / 100) * 10;
    const pay = price - discount;
    console.log(pay);

}else if(againPrice >= 2500){
    const discount = (againPrice / 100) * 5;
    const pay =  againPrice - discount;
    console.log(pay);

}else{
    console.log(price);

}
//output:3800

const buyCustomer = 2000;
if(buyCustomer >= 2500){
    const discount = (buyCustomer / 100) * 5;
    const pay = buyCustomer - discount;
    console.log(pay);

}else{
    console.log(buyCustomer);

}
//output:2000

