//Problem-1
const mysteryBox = ["10", 20, "30", 40, "50"];
function usePop(mysteryBox){
    const lastIndex = mysteryBox.length - 1;
    let findLastValue = mysteryBox[lastIndex];
    mysteryBox.length = mysteryBox.length - 1;
    findLastValue = Number(findLastValue);

    return findLastValue;
}
usePop(mysteryBox)
console.log(mysteryBox);

//Problem-2
const bookArray = ["Math", "Physics", "Chemistry", "Biology"];
function checkOut(bookArray){
     //let checkOutBook = "Math";
    for(let i = 0; i < bookArray.length; i++){
        if(!bookArray[i] === "Chem"){
            return "book not available";
        }else{
           
            bookArray[i] = bookArray[i + 1];

            return i;
        }
        
    }
    

     
}
checkOut(bookArray);
console.log(checkOut(bookArray));
