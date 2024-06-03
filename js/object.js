// // console.log("This file is for practicing to add / push in git");

// // //syntax

// // //let object_name = {
// // //     key1:"value"
// // //     key2:true
// // //     key3:["apple","mango"]
// // // }

// // let car = {
// //     name : "Dolphin",
// //     brand : "BYD",
// //     model : 2024,
// //     type : "electric"
// // }

// // console.log(car.name)
// // console.log(car.brand)
// // console.log(car.model)
// // console.log(car.type)
// // console.log(car["type"])

// // //Create an object called person which has following properties : name,age,gender,qualification, skills, marital status

// // let person = {
// //     name : "Nishan",
// //     age : 27,
// //     gender : "male",
// //     qualification : "Bachelors",
// //     skills : ["graphics","motion","ui/ux"],
// //     maritalStatus : "married"

// // }

// // //Create an object for house

// // let house = {
// //     numberofRooms : 12,
// //     floor : 3,
// //     address : 'Kathmandu',
// //     marketValue : 1000000,
// //     negotiable : true,
// //     facility : ["attached bathroom", 'ac room'] 
// // }

// // console.log(house.floor)

// // house.floor = 10
// // console.log(house.floor)

// //WAF create a array of objects which contains properties title , description, priority, completed 

// let myTask = [
//     {
//         Title : "Dashboard",
//         Description : "Dashboard design",
//         Priority : "Very High",
//         Completed : false
//     },
//     {
//         Title : "API Integration",
//         Description : "Integrate APIs",
//         Priority : "High",
//         Completed : false
//     }
// ];

// function addObject(){
//     myTask[0].Submitted = "Not Submitted";
// }

// addObject()

// function addObject(){
//     myTask[0].Submitted = "Not Submitted";
// }

// function removeObject(){
//     delete myTask[1].Priority;
// }
// removeObject()

// function 
// console.log(myTask);

// //WAF create a array of objects which contains properties title , description, priority, completed 
const tasks = [
    {
        title : "Go to morning walk",
        description : "Short walk for 30 mins",
        priority : "High",
        completed : "false"
    }
]

function addTask(task){
    tasks.push(task)
    console.log(tasks)

}

function removeTask(index){
    if(tasks[index]){
    tasks.splice(index,1)
    console.log(tasks)
}else{
    console.error("Task is not present")
}
}
function updateTask(index,task){
    if(tasks[index]){
    tasks[index]={...tasks[index],...task}
    console.log(tasks)
}else{
    console.error("item not found")
}
}

addTask({
    title : "New Task",
    description : "okay",
    priority : " low",
    completed: false
})
removeTask(1)
updateTask(1,{
    title:"Test"
})
// WAF to change first task from high to low

// changeTask({
//     if(tasks.priority==="high"){
//         tasks.priority = "low";
//     }
//     else{
//         tasks.priority="high"
//     }
// })
