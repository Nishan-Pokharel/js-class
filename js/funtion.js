//A Function relates to one particular task

//Syntax
// //function function_name() {
// operations
// }




// function average(a, b, C){
//     let average = (a+b+c)/3;
//     console.log(average,"average")
// }

// average(100, 200, 500);
// average(700, 900, 2);

//Types of function
//Function with parameter
//Function without parameter
//Function with parameter with return type
//Function without parameter with return type

// function sum(){

// }
// sum()

// function sum(a,b,c){

// }
// sum(10,12,15)

// function sum(){
//     console.log("test")
// }
// sum()

// function sum(){
//     return true
// }
// let result = sum()

function sum(){
    let a = 10;
    let b = 12;
    let c = 15;
    let sum = a+b+c;
    console.log(sum);
}
sum()

function sum_with_parameters(a,b,c){
    let sum = a + b + C;
    console.log(sum)
}
sum_with_parameters(10,10,10)

function sum_with_return(){
    let a = 10;
    let b = 10;
    let c = 10;
    let sum = a + b + c;
    return sum
}

let test = sum_with_return()
console.log(test)

function sum_with_parameters_return(){
    let sum = a + b + c;
    return sum
}
let addition = sum_with_parameters_return(10,10,10)
console.log(addition)

