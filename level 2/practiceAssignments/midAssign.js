// // //Challenge 1: Sorting an Array
const numbers = [4, 2, 7, 1, 9, 5];
numbers.sort((a,b)=>(a-b));
console.log(numbers);  // Output: [1, 2, 4, 5, 7, 9]

// // //Challenge 2: Mapping an Array
// // // Example usage:
const strings = ['hello', 'world', 'javascript'];
const upperStrings = strings.map((X)=>(X.toUpperCase()));
console.log(upperStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']


// // const numArr= [ 3, 4, 5, ]
// // numArr2 = numArr.reduce((final, current) => final += current, 0)
// // console.log(numArr2)


// // arrar. map assignment 
// // 1, Make an array of numbers that are doubles of the first array

// // const arr= [2,5,100]
// // const doubleNum = arr.map(num => num*2)
// // console.log (doubleNum)

// // // 2. ake an array of numbers and make them strings
// //   const stringItUp =[2, 5, 100]
// //   const stringArr = stringItUp.map(num => num.toString())
// //   console.log(stringArr)

// // // 3. Capitalize the first letter of each name and make the rest of the characters lowercase
// // const nameString = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// //  const capitalizedNames = nameString.map((X)=>(X.charAt(0).toUpperCase() + X.slice(1).toLowerCase()));
// // console.log(capitalizedNames)

// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// const namesOnly = users.map(function(user){
//     return user.name
// })
// console.log (namesOnly)

// const arr= [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]
// const makeStrings= arr.map(function(arr){
//        return arr.name
//     })


