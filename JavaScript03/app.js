// // // // // // let useFavNumber = prompt("Enter your  favNum Number");
// // // // // // console.log(+useFavNumber + 5);


// // // // // //  comparison Oprators
// // // // // // ==, ===
// // // // // // (==) it did not chect type it check only number are same
// // // // // // (===) it will check number type also

// // // // // console.log(5 == '5'); // output == True 
// // // // // console.log(5 === '5'); // output === false
// // // // // (!=) => not equal to it did not check number type
// // // // // (!==) => not equal to it will check number type also

// // // // console.log(5 != '5'); //output == false
// // // // <,> 
// // // // let num1 = 5;
// // // // let num2 = 6;
// // // // console.log(num1 < num2);

// // // let use1Age  = 7;
// // // let user2Age = 25;
// // // console.log(user2Age>= 18);
// // // let userAge = +prompt ("Enter your age");
// // // if (userAge >= 18){
// // //     console.log("You can apply for NIC");

// // // }else{
// // //     console.log("You are not eligible");
// // // }

// // // let userFavNum =+prompt("Enter a number");
// // // let ComputerNum =  Math.random(Math.random() * 10);

// // // if (userFavNum === ComputerNum){
// // //     console.log("You won!")

// // // }else{
// // //     console.log("You lose!" + ComputerNum);
// // // }
// // let userInput = prompt("Even or odd");
// // let computerNum = Math.roundeven(Math.random() * 10);


// // if(computerNum % 2===0 & userInput === "even"){
// //     console.log("You Won!" + computerNum);

// // }
// // else if(computerNum % 2 !==0 & userInput === "odd"){
// //     console.log("You Won!" + computerNum);

// // }
// // else{
// //     console.log("You Lose!" + computerNum )
// // }
// // let computerNum = Math.round(Math.random() * 10);
// // console,console.log(computerNum);
// let userInput = prompt("Evon or odd ");
// let computerNum = Math.round(Math.random() * 10);
// let isEven = computerNum % 2 === 0;
// if (isEven && userInput=== "even"){
//     console.log("You won!" + computerNum);


// }else if (!isEven && userInput === "odd"){
//     console.log("You Won!");
// }else{
//     console.log("You Lose!" + computerNum );
// }



// For LOOP
// Initilisation
// Condition
// Increment
// let table = 18;
// for (let i = 1; i <= 10; i++) {
//     console.log(table + " X "+i +"=" + table*i);
// }
// Assignment
let age =  +prompt("Enter Your Age");
if (age <= 10){
    console.log("Your welcom" + " " + age)

}else{
    console.log("You are not Allowed"+" " + age)
}as