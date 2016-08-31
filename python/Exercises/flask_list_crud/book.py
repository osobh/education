from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/sqlalchemy_app'
db = SQLAlchemy(app)

class Book(db.Model):

    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text())
    author = db.Column(db.Text())

    def __init__(self, title, author):
        self.title = title
        self.author = author

    # This is what will be displayed when you examine an instance
    def __repr__(self):
        return 'title {} - author {}'.format(self.title, self.author)

db.drop_all() # drop tables

db.create_all() # create tables

cats_cradle = Book('cats cradle', 'kurt') # make a new instance/row
harry_potter = Book('harry potter', 'jk') # make a new instance/row

db.session.add(cats_cradle)
db.session.add(harry_potter)

# or
# db.session.add_all([cats_cradle, harry_potter])

db.session.commit() # save to the DB


