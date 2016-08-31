from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_modus import Modus
app = Flask(__name__)
modus = Modus(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sqlalchemy_app'
db = SQLAlchemy(app)

class Author(db.Model):

    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    books = db.relationship('Book', backref='authors', lazy='dynamic')

    def __init__(self, name):
        self.name = name

    # This is what will be displayed when you examine an instance
    def __repr__(self):
        return '{}'.format(self.name)

class Book(db.Model):

    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text())
    author= db.Column(db.Integer, db.ForeignKey('authors.id'))

    def __init__(self, title, author_id):
        self.title = title
        self.author_id = author_id

    # This is what will be displayed when you examine an instance
    def __repr__(self):
        return '{}'.format(self.title)

db.drop_all() # drop table
db.create_all() # create tables

cats_author = Author(name='Kurt')
db.session.add(cats_author)
db.session.commit()

cats_cradle = Book('cats cradle', cats_author.id)

db.session.add(cats_cradle)
db.session.commit()

new_author = Author(name='George')
db.session.add(new_author)
db.session.commit()

new_book = Book('1984', new_author.id)
db.session.add(new_book)
db.session.commit()
# or
# db.session.add_all([cats_cradle, harry_potter])

db.session.commit() # save to the DB

@app.route('/')
def root():
    return redirect(url_for('index'))

# make a route for /books
@app.route('/books', methods=["GET"])
# define a function called index
def index():
    # render a template called index.html
    # and pass in the list of books to your view
    book_list = Book.query.all()
    
    return render_template('index.html', book_list = book_list)

@app.route('/books', methods=["POST"])
def create():
    # get some values from the form (....req.body?)
    # make a new instance of an book
    # add it to the books_list
    new_book = Book(request.form['title'], request.form['author'])
    db.session.add(new_book)
    db.session.commit()
    # redirect
    return redirect(url_for('index'))

@app.route('/books/new')
def new_book():
    return render_template('new.html')

@app.route('/books/<int:id>', methods=["GET"])
def show_book(id):
    book = Book.query.get(id)
    
    return render_template('show.html', book=book)

@app.route('/books/<int:id>/edit', methods=["GET"])
def edit_book_page(id):
    book = Book.query.get(id)
    # title = request.form.get('title')
    return render_template('edit.html', book=book)

@app.route('/books/<int:id>', methods=["PUT"])
def edit_book(id):
    updated_book = Book.query.filter_by(id=id).first()
    updated_book.author = request.form['author']
    updated_book.title = request.form['title']
    db.session.add(updated_book)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/books/<int:id>', methods=["DELETE"])
def delete_book(id):
        deleted_book = Book.query.filter_by(id=id).first()
        db.session.delete(deleted_book)
        db.session.commit()
        return redirect(url_for('index'))

# make a route for /authors
@app.route('/authors', methods=["GET"])
# define a function called index
def show_authors():
    # render a template called index.html
    # and pass in the list of books to your view
    author_list = Author.query.all()
    print(author_list, "THE WORST")
    return render_template('show_authors.html', authors=author_list)

if __name__ == '__main__':
    app.run(debug=True, port=5000)