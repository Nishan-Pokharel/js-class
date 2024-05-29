let fruits = ["apple","banana","watermelon"]
let meat = ["buff", "beef", "pork"]
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[fruits.length-1])

fruits.push("mangoes")/* Add Items (at last) */
fruits.pop("mangoes") /*Removes Items (at last) */

fruits[1] = ("mangoes") /* Overwrite Items */

fruits.shift()/* Remove Items(first item) */
fruits.unshift()/*Adds Items(at first) */

fruits.splice(0,2)

let meals = meat.concat(fruits)
console.log(meals)

//WAF to find number of spaces in sentence

function countSpace(sentence){
let count = 0
for (let i = 0 ; i<=sentence.length-1;i++){
    if(sentence[i]===" "){
    count = count + 1;
    }
}
console.log('Number of Spaces', count)
return count
}
countSpace('Lorem ipsum dolor sit amet consectetur adipisicing elit.')

//WAF to count number of words
function countWords(sentence){
    let spaceCount = countSpace (sentence)
    let wordCount = spaceCount + 1
    console.log('Word Count', wordCount)
}

countWords("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
