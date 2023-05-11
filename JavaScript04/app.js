// functions

// built in dunction 
// alrt, parsInt etc
// costum function


// function greet(studentName){//perametrs
//     console.log("Hello Students" + studentName)
// }

// greet("Asif"); // Arguments

// function employe(fileNo){
//     console.log("working on file "+fileNo)
// }
// employe(7)
// function add (num1, num2){
//     return num1 + num2;

// }
// let result = add(5, 6);
// console.log(result)
// document.write(result)

// function add (num1, num2){
//     return num1 + num2;
// };

// let result = add(12, 13);
// document.write(result)




// Recursion

// function writeData(data,times){
//     document.write(data)
//     if (times > 0){
//         writeData(data, times -1)
//     }

// }
// writeData("Hello", 5)

// function factorial(num) {
//     if (num > 1) {
//         return num * factorial(num - 1)
//     }
//     return 1

// }

// console.log(factorial(7));



// Closures => Scops
// parent Scop Global scop = file
// local scope = inside function

let abc = 7; // Global Scope
function print(def){
    // def local scop
    return function (ghi){
        //anonymous function
        console.log(def + ghi);
    }
}

let innerFunction = print(4)
// innerFunction()
let innerFunction2 = print(8);
innerFunction2(9);
innerFunction2(5);



