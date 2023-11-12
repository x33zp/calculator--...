//varibles practice
// Create two variables, firstName and lastName
let firstName = "peculiar"

let lastName = "chukwu"

// Concatenate the two variables into a third variable called fullName
let fullName = `${firstName} ${lastName}`

// Log fullName to the console
console.log(fullName)

///
//stringcon practice 
let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
function logGreeting() {
    console.log(`${greeting}, ${name}!`);
}

logGreeting()

///
// incrementing and decrementing
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3points() {
    myPoints += 3
}

function remove1point() {
    myPoints -= 1
}



// Call the functions to that the line below logs out 10
add3points()
add3points()
add3points()
console.log(myPoints)

remove1point()
remove1point()
console.log(myPoints)

///
// strings and numbers
// Try to predict what each of the lines will log out
console.log("2" + 2) //
console.log(11 + 7) //
console.log(6 + "5") //
console.log("My points: " + 5 + 9) //
console.log(2 + 2) // 
console.log("11" + "14") // 

///
// rendering error message
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorP = document.getElementById("error")
let errorM = "something went wrong, please try again"



function error() {
    console.log("button clicked")
    errorP.textContent = errorM
}

///
// calculator challenge
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
let sum = "sum:"

function add() {
    // console.log("add clicked")
    let result = num1 + num2
    sumEl.textContent = `${sum} ${result}`
}

function subtract() {
    // console.log("add clicked")
    let result = num1 - num2
    sumEl.textContent = `${sum} ${result}`
}

function divide() {
    // console.log("add clicked")
    let result = num1 / num2
    sumEl.textContent = `${sum} ${result}`
}

function multiply() {
    // console.log("add clicked")
    let result = num1 * num2
    sumEl.textContent = `${sum} ${result}`
}