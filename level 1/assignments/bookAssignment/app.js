
function Book (title, author, year) {
this.title = title
this.author = author
this.year = year

this.getDetails= function () {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
    
}
}


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960