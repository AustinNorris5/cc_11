//Task 1: Creating a Book Class

//Create a class Book with properties
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };

//Add a method getDetails() that returns a formatted string of book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    };

//Add a method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned
    updateCopies(quantity) {
        this.copies += quantity;
    };
};

//Test cases for task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());

//Task 2: Creating a Borrower Class

//Create a class Borrower with properties
class Borrower {
    constructor(name, borrowerId) {
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = [];
    };
  
//Add a method borrowBook(book) that adds a book title to borrowedBooks
    borrowBook(book) {
      this.borrowedBooks.push(book);
    };
  
//Add a method returnBook(book) that removes the book from borrowedBooks
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        };
    };
};

//Test cases for task 2
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

//Task 3: Creating a Library Class

//Create a class Library
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    };

//Add methods: addBook(book) & listBooks()
    addBook(book) {
        this.books.push(book);
    };

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    };

//Task 4: Implementing Book Borrowing

//Add a method lendBook(borrowerId, isbn) in the Library class
    lendBook(borrowerId, isbn) {
        let book = this.books.find(book => book.isbn === isbn);
        let borrower = this.borrowers.find(book => book.borrowerId === borrowerId)

    }
};

//Test cases for task 3
const library = new Library();
library.addBook(book1);
library.listBooks();

//Test cases for task 4
library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);



