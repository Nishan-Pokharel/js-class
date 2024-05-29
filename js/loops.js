// //loops

// for loop
// do while
// while

//Syntax
for (let i = 0; i<=10; i++){
    console.log(i)
}


//WAF to calculate multiplication table of 5
function multiplicationTable(a){
    let root = document.getElementById("root")
    for(i=1;i<=10;i++){
         root.innerHTML+= `<p>${a}*${i}=${a*i}</p>`
    }
}

multiplicationTable(6)


//WAF to find even numbers from 1 t0 100
function isOddEven(){
    for(i=1;i<=100;i++){
        if(i%2==0){
            console.log(`${i} is even`);
        }
        else
        console.log(`${i} is odd`);
    }
}
isOddEven()

let root = document.getElementById("root")


let text = "Hello World";

for (let i =0; i <=text.length - 1; i++){
    if(i%2==0){
        console.log(text[i].toUpperCase())
    }
    else{
        console.log(text[i].toLowerCase())
    }
}

