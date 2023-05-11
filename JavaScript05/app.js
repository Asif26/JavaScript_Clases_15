// Array

// let months = ["January", "February","March", "April" ];
// months[4] = "May";  // Not Recvommended;
// console.log(months);

// let shouldIStore = prompt("Array me value rakhun?");
// if (shouldIStore === "yes"){
//     months.push("May")
// }
let months = ["January", "February", "March", "April"];
// months.shift(); // remove 1st index
// months.unshift("Jan") // Add  value on 1st index
// months.push("May"); // Add value on last+1 Index
// months.pop(); // Remove last index;
// months.length // tells the  quantity of value
// months.splice(2, 1, "June","July","August"); //remove or replace values
// months.slice(); // Provide a new copy of array;
// let newArray = months.slice(0, 2)
// console.log(newArray );
// let arr = ["apple","banana","Ornage", "Carrot", ]
// arr.forEach // loops through array values
// arr.forEach(function(val, Index){
//     console.log(Index,val);
// })


// arr.filter()
// let arr = [1, 2, 3, 4, 5];
// let filteredArr = arr.filter(function (val) {
//     return val % 2 === 0;
    // if (val % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
// })
// console.log(filteredArr);
// let arr = [1,9,3,4,5,6,8,2,10];
// let sortedArr = arr.sort(function(a,b){
//     if (a > b){
//         return 1;
//     }else{
//         return -1;
//     }
// })
// console.log(sortedArr);

// reduce 
// let arr = [1,9,3,4,5,6,8,2,10];
// let reducedArr = arr.reduce(function(prevValues, currVal){
//     return prevValues + currVal;

// },0)
// console.log(reducedArr)
// let arr = ["Happy", "Birthday", "Asif"];
// let finalString = arr.reduce(function(prevValues, currVal){
//     return prevValues + " " + currVal;
// }, "")
// console.log(finalString);
// let arr = ["Happy", "Birthday", "Asif"];
// let finalString = "";
// arr.forEach(function(val){
//     finalString = finalString + " " + val;
// })
// console.log(finalString);


