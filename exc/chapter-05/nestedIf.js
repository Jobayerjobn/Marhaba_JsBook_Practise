//Problem-1
const dayatFnd = true;
if(dayatFnd == true){
    console.log("You will attend your friend birthday");
    const checkPocket = 2000;
    if(checkPocket > 1000){
        console.log("You will buy gift for your friend");
    }else{
        console.log("Khali hate jabi");
    }
}else{
    console.log("You will to remove in friendlist");
}

//output: You will buy gift for your friend

//Problem-2
const relativesEatTea = true;
if(relativesEatTea == true){
    const withBiscuitTea = true;
    if(withBiscuitTea == true){
        console.log("Wait sometimes");
    }else{
        console.log("Tea is ready");
    }
}else{
    console.log("Watch star Jalsha on TV");
}
//output:Wait sometimes

//Problem-3
const userAccountIsActive = true;
if(userAccountIsActive == true){
    console.log("Checking subsCription");
    const isPremium = true;
    if(isPremium == true){
        console.log("You watch Premium feature");
    }else{
        console.log("Watch free version");
    }
}
//output:Checking subsCription
//output:You watch Premium feature

//Problem-4
const isFood = true;
if(isFood == true){
    console.log("Khaber gorom korbi");
}else if(isFood == false){
    const workFoodDeliveryApp = true;
    if(workFoodDeliveryApp == true){
        console.log("order food");
    }else{
        console.log("I roja");
    }
}
//output:Khaber gorom korbi

//Problem-5
const isParty = true;
if(isParty == true){
    const guest = 400;
    if(guest > 100){
        const everyBodyGift = true;
        if(everyBodyGift == true){
            console.log("Lets partly all night");
        }else{
            console.log("I will party with myself");
        }
    }
}
//output:Lets partly all night 