const pizzaSlice = ['Bread', 'Cheese', 'Veggie', 'Meet'];
const selectedSlices = pizzaSlice.slice(1, 3);
console.log(selectedSlices);
//output:[ 'Cheese', 'Veggie' ]

console.log(pizzaSlice); //[ 'Bread', 'Cheese', 'Veggie', 'Meet' ]

const value = [20, 30, 40, 50, 60, 100];
const selectedValue = value.slice(1, 4);
console.log(selectedValue);

const selectedSlices1 = pizzaSlice.slice(2);
console.log(selectedSlices1);//[ 'Veggie', 'Meet' ]

const number = [10, 30, 40, 50, 60, 70];
function slice(number, start, end){

    let array= [];
    for(let i = start; i < number.length; i++){
        array.push(number[i]);
        if(i === end - 1){
            break;
        }
        
    }
    return array;

};
console.log(slice(number, 1, 5))
//output:[ 30, 40, 50, 60 ]

const slice2 = ['Bread', 'Cheese', 'Veggie', 'BBQ', 'Meet'];
function selected(slice2, start, end){
    let newArray = [];

    for(let i = start; i < slice2.length; i++){
        newArray.push(slice2[i]);
        
        if(i === end - 1){
            break;
        }
    }
    return newArray;

}
console.log(selected(slice2, 1, 4));
//output:[ 'Cheese', 'Veggie', 'BBQ' ]

