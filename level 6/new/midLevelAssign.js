
// function extractInitials(fullNames) {
    //     (for n in fullNames.toString.split():
    //         (for i in n:
    //             initialsArray+=i[0]
    //         ))
    //         }
    //     console.log(initialsArray)
    
    function extractInitials(fullNames) {
        return fullNames.map(name => {
            let nameArr = name.split(' ')
            const initial = nameArr.map(word => {
                return word[0]
            }).join('')
            return initial
        })
    }
    
    const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
    const initialsArray = extractInitials(fullNames);
    console.log(initialsArray)
   

// return(
        
// )


// const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
// const initialsArray = extractInitials(fullNames);
// console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']



const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

function filterByProperty(arr, propertyName, propertyValue){
        return arr.filter(obj => obj[propertyName] === propertyValue)
}

// const filteredByCountry = filterByProperty(people, 'age', 28);
// function filteredByCountry = country.filter (country => {
//     if(objects.country === "USA") {
//         return (result)
//     }
// })


// console.log(filteredByCountry);





// function filterByProperty(objects, propertyName) {
//     return(
//      objects.filter((propertyName) => propertyName.country.USA)
//     )
//    }