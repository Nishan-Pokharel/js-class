// number 0-9
// string "" '' ``
// Boolean true or false
// array collection[]
// object key value pair{}

// let a = "Hello World!";
// let b = "Goodbye";
// let c = 123
// console.log(a);
// console.warn(b);
// console.error(c);

// let e = a+b;
// console.log(e);

// let test="123";
// console.log(c + test);

// let a = 10;
// let b = 12;
// let Modulus = a%b;
// let locations = "Kathmandu";

// console.log('Sum',a+b);
// console.log('Multiplication',a*b);
// console.log('Division',a/b);
// console.log('Modulus', Modulus);
// console.log('Subtraction',a-b);
// console.log("I live in" + " "  + locations);
// console.log('I live in ${locations}');

// console.log(typeof locations);
// console.log("hamburgers" - "s");


// arithmetic operators  -----> (+ - * / %)
// conditional operators -----> ( > < == <= >= ?) always gives boolean vale : true or false
// logical operators -----> (&& || !)

let a = 10;
let b = 12;
console.log(a > b); //greater than : false
console.log(a < b); // less than : true
console.log(a >= b); // greater than equal to : false
console.log(a <= b); //less than equal to : true
console.log(a==b); // equals to : false
console.log(a===b); // equal value with type : false

console.log("******* AND GATE *******");
console.log(true && false); //false
console.log(false && true); //false
console.log(true && true); // true
console.log(false && false); // false

console.log("******* OR GATE *******");
console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); // true
console.log(false || false); // false

console.log("******* NOT GATE *******");
console.log(!true); //false
console.log(!false); //true

//conditional statement
let first = 100;
let second = 200;
if(first>second){
    console.log("First is greater",first);
}
else{
    console.log("Second is greater",second);
}

//Write a program to find if the given number is even or odd
if (first % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

//WAP to find if give number is divisible by 5 or not
if(second%5==0){
    console.log("Divisible");
}
else{
    console.log("Not Divisible");
}

//WAP to find if give number is divisible by 5 or 7
if(second % 5 == 0 && second % 7 == 0){
    console.log("Divisible By 5 and 7");
}
else{
    console.log("Not Divisible By 5 and 7");
}
//WAP to find if give number is divisible by 9 or 15
let third = 90;
if(third % 9 == 0 && third % 15 == 0){
    console.log("Divisible By 9 and 15");
}
else{
    console.log("Not Divisible By 9 and 15");
}

//WAP to find largest number among three number
//WAP to find smallest number among the different number
//WAP to find find day of the week. For example : value is 1 console "Sunday"
//WAP to calculate average of three numbers 
//WAP to calculate the percentage of total marks
//WAP to find the score of a student. For example if under 50 E, if under 60 D, if under 65 C, if under 75 B, if under 90 A, if above 90 A+.
//WAP to find if the given number is palindrome or not.
//WAP to find if the given number is prime or not.
//WAP to find if the given number is positive or negative.
//WAP to find if average of three number is even or odd.
//WAP to find the given number is positive and even.


let day = 1;
if (day == 1) {
  console.log("Sunday");
} else if (day == 2) {
  console.log("Monday");
} else if (day == 3) {
  console.log("Tuesday");
} else if (day == 4) {
  console.log("Wednesday");
} else if (day == 5) {
  console.log("Thursday");
} else if (day == 6) {
  console.log("Friday");
} else if (day == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid week day");
}

switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Week Day");
}