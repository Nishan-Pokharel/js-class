let car = {
    name : "Dolphin",
    brand : "BYD",
    model : 2024,
    type : "electric"
}

let person = {
    name : "Nishan",
    age : 27,
    gender : "male",
    qualification : "Bachelors",
    skills : ["graphics","motion","ui/ux"],
    maritalStatus : "married"

}

let employee = {
    ...person,
    employeeID : 121,
    skills : [...person.skills,"Front End"]
}
console.log(employee)
let combine = { ...person, ...car}
// let arrayCombine = [...fruits, ...sports]