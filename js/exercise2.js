let day  = "sunday";
if (day == "sunday" || day =="saturday"){
    console.log("Weekend");
}
else{
    console.log("Weekday");
}

let month = "january";
switch(month){
    case "september":
    case "november":
    case "october":
        console.log("The season is autumn");
        break;

    case "december":
    case "january":
    case "february":
        console.log("The season is winter");
        break;
    
    case "march":
    case "april":
    case "may":
        console.log("The season is spring");
        break;

    default:
        console.log("The season is summer");
}

let age = 1;
if (age>=18){
    console.log("You are old enough to drive");
}else{
    let ageGap = 18-age;
    console.log('Wait for ${ageGap} to drive');
}


let mark = 50;
if(mark > 80 || mark <=100){
    console.log("A");
}else if (mark >= 70 && mark <=79){
    console.log("B");
}else if (mark >= 60 && mark <=69){
    console.log("C");
}else if (mark >= 50 && mark <=59){
    console.log("D");
}else{
    console.lof("F")
}