# Flask SQLAlchemy

### Introduction

Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy to your application. SQLAlchemy is a popular ORM (object relational mapper) which allows you to communicate with your database all in Python. Essentially, your python code gets coverted to SQL by the ORM and you as the developer gain a layer of abstraction and ease of development. You can read more about SQLAlchemy [here](http://www.sqlalchemy.org/)

Flask-SQLAlchemy aims to simplify using SQLAlchemy with Flask by providing useful defaults and extra helpers that make it easier to accomplish common tasks like creating/modifying/dropping databases and CRUD operations.

### Getting started

Make sure you have these dependencies installed - you can create a virtual environment or do this without one. Also make sure you have a DB created.

```bash
createdb sqlalchemy_app
pip install flask flask_sqlalchemy ipython psycopg2
```

The bulk of work in flask_sqlalchemy is in the creation of a model, which is a class that inherits from `db.Model`. You need to initialize your app with SQLAlchemy in order to do this. 

```py
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

from IPython import embed; embed() ## 
```

### SQLALCHEMY_TRACK_MODIFICATIONS

If set to True, Flask-SQLAlchemy will track modifications of objects and emit signals. The default is None, which enables tracking but issues a warning that it will be disabled by default in the future. This requires extra memory and should be disabled if not needed. If you want to not see this warning you can add `app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False`

### Types in Flask SQLAlchemy

Here are the common types you will be working with in flask sql_alchemy 

- Integer 
- String(size)
- Text
- DateTime
- Float
- Boolean

### CRUD with SQL Alchemy

All of your CRUD actions have to be followed with `db.session.commit()` to makesure that you save to a database.

#### Create

Inserting data into the database is a three step process:

- Create the Python object
- Add it to the session
- Commit the session

```py
good_parts = Book('JS the good parts', 'doug') 
db.session.add(good_parts)
db.session.commit()
```

If you want to access the ID of the new object, you have to do that after `commit()` because that actually inserts the row.

#### Read

Flask-SQLAlchemy provides a query attribute on your Model class. When you access it you will get back a new query object over all records. You can then use methods like `filter()` to filter the records before you fire the select with all() or first(). If you want to go by primary key you can also use get().

```py
cats_cradle = Book.query.get(1)
cats_cradle = Book.query.filter_by(title='cats cradle').first()
cats_cradle = Book.query.filter_by(title='cats cradle').all()[0]

wrong_record = Book.query.get(100)
wrong_record is None == True

first_five = Book.query.limit(5).all()

ordered_by = Book.query.order_by(Book.title)
```

#### Update

Flask SQLAlchemy does NOT have a built in update function so the way to update records is to find, set and save

```py
good_parts = Book.query.filter_by(title='JS the good parts').first()
good_parts.author = "Douglas Crockford"
db.session.add(good_parts)
db.session.commit()
```

#### Delete

Very similar to create, except you use the `delete` method. Like all CRUD - we need to make sure we `commit()`

```py
db.session.delete(good_parts)
db.session.commit()
```

#### Useful helpers

If you write a Flask view function it’s often very handy to return a 404 error for missing entries. Because this is a very common idiom, Flask-SQLAlchemy provides a helper for this exact purpose. Instead of get() one can use get_or_404() and instead of first() first_or_404(). This will raise 404 errors instead of returning None:

```py

@app.route('/books/<int:id>')
def show(id):
    user = User.query.get_or_404(id)
    return render_template('show_user.html', user=user)
```

### Associations with SQL Alchemy

```bash
createdb one_to_many_sqlalchemy_app
```

```py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/one_to_many_sqlalchemy_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Author(db.Model):

    __tablename__ = 'authors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    books = db.relationship('Book', backref='author', lazy='dynamic')

    def __init__(self, name):
        self.name = name

    # This is what will be displayed when you examine an instance
    def __repr__(self):
        return 'Name {}'.format(self.name)

class Book(db.Model):

    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text())
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))

    def __init__(self, title,author_id):
        self.title = title
        self.author_id = author_id

    # This is what will be displayed when you examine an instance
    def __repr__(self):
        return 'title {}'.format(self.title)

db.drop_all() # drop tables

db.create_all() # create tables

from IPython import embed; embed()
```

You can read more about associations [here](http://flask-sqlalchemy.pocoo.org/2.1/models/)

### What about migrations?

You might have noticed that we do not have any migrations yet, that is because flask sql_alchemy does not support that. In order to enable migrations we have to use an additional module which we will talk about in the following section.

### Exercise

Refactor [this](https://github.com/gSchool/python-curriculum/tree/master/Exercises/flask_list_crud) application to use a database. Once you have completed this, add an additional resource (authors) so you have full CRUD on authors and books. As a bonus add a resource for tags which is a M:M with books.
