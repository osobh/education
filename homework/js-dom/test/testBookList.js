var expect = require("chai").expect;
var bl = require("../bookList");
var Book = bl.Book;
var BookList = bl.BookList;

describe("Book", function() {
    it("Should assign input parameters to properties when set", function() {
        var dateRef = new Date();
        var book = new Book('title', 'genre', 'author', true, dateRef);

        expect(book.title).to.equal('title');
        expect(book.genre).to.equal('genre');
        expect(book.author).to.equal('author');
        expect(book.read).to.equal(true);
        expect(book.readDate).to.equal(dateRef);
    });

    it("Should force readDate to be blank for unread books", function() {
        var unreadBook = new Book('title', 'genre', 'author', false, new Date());
        var unreadBookTwo = new Book('title', 'genre', 'author', false);
        var unreadBookThree = new Book('title', 'genre', 'author');

        expect(unreadBook.readDate).to.equal(undefined);
        expect(unreadBookTwo.readDate).to.equal(undefined);
        expect(unreadBookThree.readDate).to.equal(undefined);
    });

    it("Should create a new date for books that are read, but do not specify a readDate", function(){
        var book = new Book('title', 'genre', 'author', true);
        expect(book.readDate).to.be.instanceOf(Date);
    });
});

describe("BookList", function() {
    it("Should properly instantiate an empty booklist.", function() {
        var booklist = new BookList();

        expect(booklist.booksRead).to.equal(0);
        expect(booklist.booksUnread).to.equal(0);
        expect(booklist.currentBook).to.equal(undefined);
        expect(booklist.nextBook).to.equal(undefined);
        expect(booklist.lastReadBook).to.equal(undefined);
        expect(booklist.books).to.be.instanceOf(Array);
        expect(booklist.books.length).to.equal(0);
    });

    it("Should handle adding and removing books.", function() {
        var list = new BookList();
        var book = new Book('title', 'genre', 'author');
        list.add(book);

        expect(list.booksRead).to.equal(0);
        expect(list.booksUnread).to.equal(1);
        expect(list.currentBook).to.equal(book);
        expect(list.nextBook).to.equal(undefined);
        expect(list.lastReadBook).to.equal(undefined);
        expect(list.books.length).to.equal(1);
        expect(list.books[0]).to.equal(book);

        var bookTwo = new Book('t2', 'g2', 'a2');
        list.add(bookTwo);
        
        expect(list.booksRead).to.equal(0);
        expect(list.booksUnread).to.equal(2);
        expect(list.currentBook).to.equal(book);
        expect(list.nextBook).to.equal(bookTwo);
        expect(list.lastReadBook).to.equal(undefined);
        expect(list.books.length).to.equal(2);
        expect(list.books[0]).to.equal(book);
        expect(list.books[1]).to.equal(bookTwo);

        var bookThree = new Book('t3', 'g3', 'a2', true);
        list.add(bookThree);

        expect(list.booksRead).to.equal(1);
        expect(list.booksUnread).to.equal(2);
        expect(list.currentBook).to.equal(book);
        expect(list.nextBook).to.equal(bookTwo);
        expect(list.lastReadBook).to.equal(bookThree);
        expect(list.books.length).to.equal(3);
        expect(list.books[0]).to.equal(book);
        expect(list.books[1]).to.equal(bookTwo);
        expect(list.books[2]).to.equal(bookThree);

        list.finishCurrentBook();

        expect(list.booksRead).to.equal(2);
        expect(list.booksUnread).to.equal(1);
        expect(list.currentBook).to.equal(bookTwo);
        expect(list.nextBook).to.equal(undefined);
        expect(list.lastReadBook).to.equal(book);
        expect(list.books.length).to.equal(3);

        list.finishCurrentBook();

        expect(list.booksRead).to.equal(3);
        expect(list.booksUnread).to.equal(0);
        expect(list.currentBook).to.equal(undefined);
        expect(list.nextBook).to.equal(undefined);
        expect(list.lastReadBook).to.equal(bookTwo);
        expect(list.books.length).to.equal(3);

    });
})