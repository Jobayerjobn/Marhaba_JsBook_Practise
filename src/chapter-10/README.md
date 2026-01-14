# chapter-10 | Logic BuildUp technic

### 1 meter = 39.3701 inch
### 1 meter = 3.28084 feet
### 1 mile = 1609.34 meter
### 1 mile = 1.60934 kilometer
### 1 Yard = 3 feet
### 1 Yard = 36 inch
### 1760 Yard = 1 mile
### 1000 calorie = 1 kilocalorie
### 1 kwh = 860 kilocalorie

## Temporary variable technic
```js
let temp, a, b;
temp = a;
a = b;
b = temp;
```
## important example

```js
function  noDuplicate(array){
    const unique = [] //empty arr;
    for(const items of array){
        if(unique.includes(items) === false){
            unique.push(items);

        }
    }
    return unique;

}
const uniqueArray = noDuplicate([10, 30, 40, 56, 20, 30, 18, 13]);
console.log(uniqueArray);
```