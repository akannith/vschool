// // // //sort geratest to lowest 
// // // const arr= [1, 3, 5, 2, 90, 20]
// // // const sortedarr = arr.sort((a,b) => (b-a))
// // // console.log(sortedarr)

// // // // //sort least to greatest
// // // const arr= [1, 3, 5, 2, 90, 20]
// // // const sortedarr = arr.sort((a,b) => (a-b))
// // // console.log(sortedarr)

// // // // //sort alphbatically 
// // // const arr= ["dog", "wolf", "by", "family", "eaten"]
// // // const alphabeticalarr = arr.sort((a,b) => (a === b ? 0 : a < b ? -1 : 1))
// // // console.log(alphabeticalarr)

// // // // sort object
// // // const ageArr= [ { name: 'Misunderstood Observer', age: 2 },
// // //   { name: 'Quiet Samurai', age: 22 },
// // //   { name: 'Unlucky Swami', age: 77 },
// // //   { name: 'Arrogant Ambassador', age: 100 } ]

// // //   const sortedAgeArr= ageArr.sort((firstEl,secondEl)=> secondEl.age -secondEl.age);
// // //   console.log(sortedAgeArr)

// // //Turn an array of numbers into a total of all the numbers

// // // const arr= [1,2,3]
// // const results= arr.reduce((final, current)=> (final += arr))
// // console.log(results)



// const name = "John"
//  let age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


const carrots = ["bright orange", "ripe", "rotten"]
const mapVegetables = carrots.map(carrots => carrots[i])
console.log= (mapVegetables)