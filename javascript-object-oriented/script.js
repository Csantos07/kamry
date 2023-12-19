// classes and objects have attributes and methods

class Book {
  // title
  // author
  // pages/length
  // genre
  // table contents
  constructor(title, author, pageLength, genre) {
    this.title = title;
    this.author = author;
    this.pageLength = pageLength;
    this.genre = genre;
  }
}


const favoriteBook = new Book("Candy House", "Jennifer Egan", 315, "fantasy fiction");

console.log(favoriteBook);
