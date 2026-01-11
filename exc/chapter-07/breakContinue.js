//Problem-1
for(let i = 1; i <= 30; i++){
    console.log(i);
    if(i >= 15){
        
        break;

    }
    

}
//output: 1 ... 15

//Problem-2
for(let i = 1; i <= 40; i++){
    if(i % 7 == 0){
        continue;
    }
    console.log(i);

}
//output: 1 ... 40

//Problem-3
for(let i = 1; i <= 15; i++){
    if(i == 9){
        //console.log("hell", i);
        continue;

    }
    console.log(i);

}
//output: 

//Problem-4
for(let i = 91; i <= 120; i++){
    if(i % 10 == 0){
        break;

    }
    console.log(i);

}
//output:91 ... 99 
