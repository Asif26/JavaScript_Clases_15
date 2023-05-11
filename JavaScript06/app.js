// //objects
// let person = {
//     name: "Asif",
//     cnic: 123456,
//     eyesColor: "black",
//     canSpeakEnglish: false,
//     speak: function(sentence){
//         console.log(sentence + this.name)

//     }
// }
// person.speak("Hello I'am ")
// console.log(person.name)
// let person2 = { // person2 = Object
//     name: "Asif", // name = "Ameen " = Property
//     cnic: 123456, // cnic = key 
//     eyesColor: "black",// "balck" = value
//     canSpeakEnglish: false,
//     speak: function(sentence){
//         console.log(sentence + this.name)

//     }
// }
// person2.speak("Hello I'am ")

// let animal = {
//     name:"Lion",
//     eatsMeat: true,

// };
// let animal2 = {
//     name:"Goat",
//     eatsMeat:false,
//     eatGrass: true
// };

// let student1 = {
//     name: "Asif",
//     rollNo: 420,
//     teacher: "Qari sahab",
//     classNmae: "JavaScript"

// }
// let student2 = {
//     name: "Ali",
//     rollNo: 421,
//     teacher: "Qari sahab",
//     classNmae: "CSS"

// }
// let students = [student1,student2];
// console.log(students);

// function provideStudent(name1, rollNo1, teacher1, classNmae1) {
//     return {
//         name: name1,
//         rollNo: rollNo1,
//         teacher: teacher1,
//         classNmae: classNmae1
//     };

// };
// let students = [
//     provideStudent("Asif", 26, "Ameen", "css"),
//     provideStudent("Abdullah", 27, "Ikhlas", "Node")

// ]
// console.log(students);

// let students = [];
// function provideStudent1() {
//     let std = {
//         name: prompt("Enter name Please?"),
//         rollNo: prompt("Your Rollnumber?"),
//         teacher: prompt("Teacher Name?"),
//         classNmae: prompt("Class Name?")
//     };
//     students.push(std)
//     console.log(students)


// };
// localStorage.setItem("name" ,"Asif")
let prevStudent = localStorage.getItem("students") // get from Local storage 
let students = prevStudent ? JSON.parse(prevStudent):[];
// let students =  [];
function provideStudent1(){
    let std = {
        name: prompt ("Enter Name"),
        rollNo:+prompt("Enter Roll no"),
        teacher: prompt("Enter Teacher Name"),
        className: prompt("Enter Your Class")
    };
    students.push(std);
    console.log(students);
    let stringify = JSON.stringify(students) // Convert it to String
    localStorage.setItem("students", stringify) // Save it to LocalStorage

}
//localStorage.setItem("name", "Asif")