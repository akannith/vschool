//Data Types - Create a variable for each data type below using the example provided for a string 


//1. String - denoted/represented by " " ' ' - they are great for words, language
var firstName = "Andrew"
console.log(firstName)



//2. Number - anything of numerical value - just a number
var age = 14;


//3. Boolean - true or false 
var  colourbrown = true

//4. Array - are denoted/represented by [] - are great for holding multple pieces of data
	//4a. use bracket notation [] here with the array you created use 
const person = {
    age:30,
    state: utah,
    language : english,

}

console.log(person[age])

const animals = ["dog", 45, {name: "Luci", height: 5}]


//5. Object - denoted/represented by {} - great for describing something in detail - like a billing address
	//5a. use dot notation . here with the object you created .

    const person = {
        age:30,
        state: utah,
        language : english,
    
    }
    
    console.log(preson.age)

//6. Create an object - use each datatype as a property
//6a. Use dot and bracket notation to display your knowledge


const person = {
    age:30,
    state: utah,
    language : english,

}

console.log(person[age.language])

//7. Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement

//Using below example below to create your own conditional statement.
var color = "red"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}


//7a. Write your own conditional Statement
var sport = 'football'

if (sport === "football") {
 console.log("I love football!")
} else if (sport === "soccer") {
        console.log("I hate football but love soccer")
    } else {
        console.log("I hate sports")
    }



// /////////



//8. For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//8a. Create 1 for loop








//////// DOM //////////
//9. After learning the DOM material please follow steps a-d
	// Be sure to understand what the word document means/represents in JavaScript
	// Be sure to understand what getElementById("myId") does and how it works
	// Be sure to understand what addEventListener("event", myFunction) is and what the two items are that go in the parenthesis

//a. Create button with an ID on it in HTML

<button id="submit"></button>
//b. Call Button into JS using document and getting element by its ID
const submitButton = document.getElementById("submit")
//c. Set that button equal to a variable
//d. with that variable use dot notation to access the addeventlistener method
submitButton.addEventListener("click", function)