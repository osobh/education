var BookList = function(read, unRead, lastRead, currentRead, nextRead, arrayAllBooks){
	this.read = read ;
	this.unRead = unRead ;
	this.lastRead = lastRead ;
	this.currentRead = currentRead ;
	this.nextReference = nextRead;
	this.arrayAllBooks = [];
};

BookList.prototype.add = function(book){
		this.arrayAllBooks.push(book);
		if(this.currentRead === undefined && !book.readBoolean){
			this.currentRead = book;
		}  else if(this.nextReference === undefined && !book.readBoolean){
			this.nextReference = book;
			
			}
};

BookList.prototype.finish = function(book){
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
};

var Book = function(title, genre, author, readBoolean, readDate){
	this.title = title ;
	this.genre = genre ;
	this.author = author;
	this.readBoolean = readBoolean ; 
	this.readDate = readDate ;
};


var myList = new BookList();

var testBook1 = new Book("Scary Potter","Scifi","Omar",false, new Date(2002, 10, 2));
var testBook2 = new Book("Slasher Potter","Horror","Ricky",false, new Date(2002, 10, 3));
var testBook3 = new Book("Sherlock Potter","Mystery","Tom",true, new Date(2003, 10, 4));
var testBook4 = new Book("Nutty ProPotter","Humor","Eggbert",false, new Date(2004, 10, 5));
var testBook5 = new Book("Day of our Potter","Drama","David",true, new Date(2005, 10, 6));


myList.add(testBook1);

// console.log(myList.arrayAllBooks);
