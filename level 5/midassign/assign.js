
  
  
  const words = ['apple', 'banana', 'cherry'];
  const uniqueChars = extractUniqueCharacters(words);

  function extractUniqueCharacters(strings) {
    const result = [];
    for (let i =0; i < strings.length; i++){
      for(let j =0; j < strings[i].length; j++) {
        if(!result.includes(strings[i][j])) {
           result.push(strings[i][j])}
        }
    } 
    return (result)
  }
  console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']


//   const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
//   { name: 'David', age: 28 },
// ];
// const sortedByAge = sortByProperty(people, 'age');
// function sortByProperty(objects, propertyName) {
//  return(
//   objects.sort((a, b) => a[propertyName] - b[propertyName])
//  )
// }

// console.log(sortedByAge);



