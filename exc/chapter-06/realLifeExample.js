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

function checkOut(bookArray, checkOutBook){
    // 1. find index
    let foundIndex = -1;
    for(let i = 0; i < bookArray.length; i++){
        if(bookArray[i] === checkOutBook){
            foundIndex = i;
            break;
        }
    }

    // 2. if not found
    if(foundIndex === -1){
        return "Book not available";
    }

    // 3. shift elements left
    for(let i = foundIndex; i < bookArray.length - 1; i++){
        bookArray[i] = bookArray[i + 1];
    }

    // 4. remove last element
    bookArray.length = bookArray.length - 1;

    return checkOutBook;
}

// Test
console.log(checkOut(bookArray, "Chemistry")); // Chemistry
console.log(bookArray); // ["Math", "Physics", "Biology"]

console.log(checkOut(bookArray, "English")); // Book not available
console.log(bookArray); // ["Math", "Physics", "Biology"]

