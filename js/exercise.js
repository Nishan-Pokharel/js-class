let a = 10;
let b = 20;
let c = 30;
//WAP to find largest number among three number
if(a>b && a>c){
    console.log("a is largest",a);
}
else if (b>a && b>c){
    console.log("b is largest",b);
}
else{
    console.log("c is largest")
}

//WAP to find largest number among three number
if(a<b && a<c){
    console.log("a is smallest",a);
}
else if (b<a && b<c){
    console.log("b is smallest",b);
}
else{
    console.log("c is smallest")
}

//WAP to find find day of the week. For example : value is 1 console "Sunday"
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

//WAP to calculate average of three numbers 
avg=(a+b+c)/3;
console.log("Average of three numbers is ",avg);

//WAP to calculate the percentage of total marks
sum=a+b+c;
percentage=(sum/150)*100;/**Assuming total marks is 50 in each subject i.i 150 total */
console.log("Percentage is",percentage);

//WAP to find the score of a student. For example if under 50 E, if under 60 D, if under 65 C, if under 75 B, if under 90 A, if above 90 A+.
let marks = 82;
if(marks<=50){
    console.log("E");
}
else if(marks<=60){
    console.log("D");
}
else if(marks<=65){
    console.log("C");
}
else if(marks<=75){
    console.log("B");
}
else if(marks<=90){
    console.log("A");
}
else{
    console.log("A+")
}
//WAP to find if the given number is palindrome or not.

//WAP to find if the given number is prime or not.
// a=34;
// if(a>1 && a%a==0){
//     console.log(a,"is prime number");
// }
// else{
//     console.log(a,"is not a prime number");
// }

//WAP to find if the given number is positive or negative.
let d = -23;
if(d > 0){
    console.log(d, "is positive number");
}
else{
    console.log(d,"is a negative number");
}

//WAP to find if average of three number is even or odd.
if(avg % 2 ==0){
    console.log("Average is even");
}
else{
    console.log("Average is odd");
}

//WAP to find the given number is positive and even.
let e = 24;
if(e > 0 && e % 2 == 0){
    console.log("Given number is positive and even");
}
else{
    console.log("Given number is negative and odd");
}
