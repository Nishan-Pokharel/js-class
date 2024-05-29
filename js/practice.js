//WAF to find if given number is even or odd

function isEvenOdd(a){
    if(a%2==0){
        console.log('Even')
    }
    else{
        console.log('Odd')
    }
}
isEvenOdd(10)

// WAF to find the largest among three number
function largest(a,b,c){
    if(a>b && b>c){
        console.log(a,"is greatest");
    }
    else if(b>c && b>a){
        console.log(b,"is greatest");
    }
    else
    console.log(c,"is greatest");
}
largest(10,12,14)
largest(26,12,76)

// WAF to find if the given number is divisible by 5 and even
 function fiveandeven(a){
    if (a%5==0 && a%2==0){
        console.log(a,"is divisible by 5 and even");
    }
    else{
        console.log(a,"is not both divisible by 5 and even");
    }
 }
 fiveandeven(15)