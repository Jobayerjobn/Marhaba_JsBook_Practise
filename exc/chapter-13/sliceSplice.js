const array = ['Apple', 'Banana', 'Cherry', 'Date'];
const sliceArray = array.slice(1, 3);
console.log(sliceArray);
console.log(array);
//output:[ 'Banana', 'Cherry' ]
//output:[ 'Apple', 'Banana', 'Cherry', 'Date' ]

function slice(array, first_index, end_index){
    let newArray = [];

    for(let i = first_index; i < array.length; i++){
        newArray.push(array[i]);

        if(i === end_index - 1){
           break;
        }
    }
    return newArray;

}
console.log(slice(array, 1, 3));
//output:[ 'Banana', 'Cherry' ]

//Problem-2
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const sliceCars = cars.slice(0, 2);
console.log(sliceCars);
//output:[ 'Tesla', 'BMW' ]

function sliceCars1(cars, first_index, end_index){
    let newArray = [];

    for(let i = first_index; i < cars.length; i++){
        newArray.push(cars[i]);

        if(i === end_index - 1){
            break;

        }
    }
    return newArray;

}
console.log(sliceCars1(cars, 0, 2));
//output:[ 'Tesla', 'BMW' ]


//Problem-3
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const splice = movieList.splice(2, 2, 'Batman', 'Superman');
console.log(splice);
console.log(movieList);
//output:[ 'Joker', 'Avatar' ]
//output:[ 'Inception', 'Titanic', 'Batman', 'Superman', 'Interstellar' ]

//Problem-4
const players = ['Messi', 'Ronaldo', 'Neymer', 'Mbappe'];
const useSplice = players.splice(2, 1, "Halland");
console.log(players);
console.log(useSplice);
//output:[ 'Messi', 'Ronaldo', 'Halland', 'Mbappe' ]
//output:[ 'Neymer' ]
