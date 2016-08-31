// ============================================================
// PLACE YOUR CODE HERE, IF YOU HAVE NOT FINISHED THE BOOKLIST
// PREVIOUSLY, COMPLETE THE FOLLOWING FUNCTIONS
// ============================================================
 
/** 
 * New BookLists start out empty, so we set the values directly
 * without accepting any parameters.
 */
var BookList = function() {
this.read = false;
this.unRead = false;
this.lastRead = null; 
this.currentRead = null;
this.nextReference = null;
this.arrayAllBooks = [];
}

/**
 * Given a Book as a parameter, add it to our booklist. If the
 * book has already been read, then we just add it to this.books.
 * If it has not, we may set it to be the currentBook or nextBook
 * if those values are unset. 
 */
BookList.prototype.add = function(book) {
this.arrayAllBooks.push(book);
      if(!this.currentRead && !book.hasBeenRead){
        this.currentRead = book;
      }  else if(this.nextReference === undefined && !book.hasBeenRead){
        this.nextReference = book;
        
        }
}

BookList.prototype.finishCurrentBook = function() {
if(this.currentRead){
        this.lastRead = this.currentRead;
        this.currentRead.readDate = new Date();
        this.currentRead.readBoolean = true;
        this.currentRead = this.nextRead;
        for(var i = 0 ; i < this.arrayAllBooks.length ; i++){
          if(!this.arrayAllBooks[i].readBoolean && this.currentRead == this.arrayAllBooks[i] ){
            this.nextRead = this.arrayAllBooks[i];
          }
        }
      }
}

BookList.prototype.render = function(argument){
  var bookUl = document.createElement('ul');
  for(var i = 0 ; i < this.arrayAllBooks.length ; i++){
        var bookHolder = this.arrayAllBooks[i];
        var newBookLi = bookHolder.render();
        bookUl.appendChild(newBookLi);
  }
  return bookUl;

};







/**
 * A new Book must be given some parameters to create a specific
 * book. title, genre, and author must all be strings. 
 * read must be a boolean. 
 * readDate must be a date or null
 *
 * If read is true, then readDate must be a date - otherwise
 * it will be set to right now. 
 */
var Book = function(title, genre, author, hasBeenRead, readDate) {
this.title = title;
this.genre = genre;
this.author = author;
this.hasBeenRead = hasBeenRead; 
this.readDate = null ;
}

Book.prototype.render = function(){
   var bookLi = document.createElement('li');
   bookLi.innerText = this.title;
   if (this.hasBeenRead){
    bookLi.className="text-primary";
   }else{
    bookLi.className="text-danger";
   }
   return bookLi;
};


// THE BUSINESS CODE 

      var myList = new BookList();
      var testBook1 = new Book("Scary Potter","Scifi","Omar",true, new Date(2002, 10, 2));
      var testBook2 = new Book("Slasher Potter","Horror","Ricky",false, new Date(2002, 10, 3));
      var testBook3 = new Book("Sherlock Potter","Mystery","Tom",true, new Date(2003, 10, 4));
      var testBook4 = new Book("Nutty ProPotter","Humor","Eggbert",false, new Date(2004, 10, 5));
      var testBook5 = new Book("Day of our Potter","Drama","David",true, new Date(2005, 10, 6));

myList.add(testBook1)
myList.add(testBook2)
myList.add(testBook3)
myList.add(testBook4)
myList.add(testBook5)


//console.log(myList.arrayAllBooks, 'I reed good')

// add all books to the DOM 
var bookArr = myList.arrayAllBooks
bookArr.forEach( function(element, index) {
  var BookHolder = document.getElementById('books');
  var createBookHolder = document.createElement('li');
  BookHolder.appendChild(createBookHolder);
  createBookHolder.innerText = bookArr[index].title;

});


var renderList = myList.render();
var bookList = document.getElementById('book-list');
bookList.appendChild(renderList);

// add a book to the book list

function bookPusher() {
var bookList = document.getElementById('book-list');
var listHolder = document.createElement('li');
listHolder.innerText = "Succotash";
bookList.appendChild(listHolder);
}

// document.getElementById('addbtn').addEventListener("click", )


