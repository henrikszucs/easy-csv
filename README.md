# easy-communicator

Small JavaScript library to help the conversion between CSV string and 2D array.

## Install

Copy and import the following file:

[./src/csv.js](./src/csv.js)

## Usage

### Read CSV string
```js
import CSV from "/src/csv.js";

const dataStr = "1,2,3,4,5\n1,2,3,4,5";
const dataObj = CSV.toArray(dataStr, ",");
console.log(dataObj);
```


### Write to CSV string
```js
import CSV from "/src/csv.js";

const dataObj = [
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4", "5"]
];
const dataStr = CSV.toString(dataObj, ",")
console.log(dataStr);
```