# Intro to Flask and Virtual Environments

### Flask

Similar to express, flask is a web microframework which handles routing and file serving with ease. To get started here is a little hello world example:

Make sure you have flask installed by running `pip install flask`

```py
from flask import Flask

app = Flask(__name__)
app.debug = True

@app.route('/')
def hello():
    return "Hello World!"

app.run()
```

If we want to add url parameters we can do it this way

```py
from flask import Flask

app = Flask(__name__)
app.debug = True

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/<name>')
def greet(name):
    return "Hi, {}!".format(name)

app.run()
```

So what are these `@` things before our app.route? Those are called **decorators** and they are functions that "decorate" and modify other functions:

#### Decorator Introduction

In order to first understand decorators, we need to understand that functions are objects in python and they can be passed like any other object (but do not confuse this with passing annonymous functions like we frequently do in JS)

```py
def first_decorator(fn):
    def inner():
        print("Inner was just called")
        fn()
    return inner

@first_decorator
def print_data():
    print("check out above!")

print_data()
```

You can read more about them [here](https://realpython.com/blog/python/primer-on-python-decorators/) - we will be using quite a few built in decorators to flask later on!

#### Exercise - Calculator

Build a calculator using routes to add, subtract, multiply and divide. Pay attention to the data type of your parameter and research how in flask you can covert these types!

### Virtual Environments

In order to manage our dependencies correctly for each project we are going to use a tool called `virtualenvwrapper` to manage each environment.

1. In your terminal type - `pip install virtualenvwrapper`

2. Run this command in the terminal `ln -s /Library/Frameworks/Python.framework/Versions/3.5/bin/virtualenvwrapper.sh  /usr/local/bin/virtualenvwrapper.sh`

3. Add the following to the bottom of your `.zshrc` 

```bash
export WORKON_HOME=~/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```

To create a virtual environment you can type `mkvirtualenv NAME` and if you want to exit the environment you can type `deactivate` and to enter a virtual environment type `workon NAME` and press enter in the terminal.

### Templating with Jinja2

Jinja2 is a modern and designer-friendly templating language for Python, modelled after Django’s templates. Flask comes built in with Jinja support which makes templating a breeze. To print out python code we use {{}} (just like angular) and to evaluate python code we use {%  %} (good time for a snippet!). 

In order to render our templates, we'll need to import the `render_template` function from flask. This means you'll need to update the first line of your python file so that it looks like this:

```py
from flask import Flask, render_template
```

Just like in express, we can pass data to our view inside of the render function. When using the Flask, the basic syntax looks like this:

```py
@app.route('/')
def index():
    instructors = ["Elie", "Matt", "Parker", "Tim", "Janey"]
    return render_template('index.html', instructors=instructors)

```

By default, Jinja2 will look for our html inside of a `templates` folder. So let's create one and make a `templates/base.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="container">
        {% block content %}
        {% endblock %}
    </div>
</body>
</html>
```

And a `templates/index.html` file which extends the base file:

```html
{% extends 'base.html' %}
{% block content %}
    {% for instructor in instructors %}
        <p>
            Name: {{instructor}}
        </p>
    {% endfor %}

    {% if "Janey" in instructors %}
        <p>
            Lucky you!
        </p>
    {% else %}
        <p>
            Bummer! You're missing out...
        </p>
    {% endif %}
{% endblock %}
```

You can read more about Jinja [here](http://jinja.pocoo.org/docs/dev/) or with [this](https://realpython.com/blog/python/primer-on-jinja-templating/) excellent primer. There is a method called `url_for` that we did not cover which you can read more about [here](http://stackoverflow.com/questions/23988561/jinja-variables-within-the-flask-url-for-function)

#### GET + POST with Flask

Let's talk a bit about rendering, redirecting and capturing values from a form. In order to do that we need to import a bit more from flask:

```py
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.debug = True

instructors_list = ["Elie", "Tim", "Matt", "Parker", "Janey"]

@app.route('/instructors', methods=["GET"])
def index():
    return render_template('index.html', instructors_list=instructors_list)
    
@app.route('/instructors', methods=["POST"])
def create():
    instructors_list.append(request.form["instructor"])
    return redirect(url_for('index'))

# This is another option, but it does involve more code in one method and makes it difficult to stay RESTful with the names of your functions 
@app.route('/instructors', methods = ["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template('index.html', instructors_list=instructors_list)
    else:
        instructors_list.append(request.form["instructor"])
        return redirect(url_for('index'))

@app.route('/instructors/new')
def new():
    return render_template('new.html')

if __name__ == '__main__':
    app.run()
```

#### Exercise - CRUD with a list for storage

Make the tests pass for [this](https://github.com/gSchool/python-curriculum/tree/master/Exercises/flask_list_crud) application:

#### Additional Resources

If you would like a real in depth flask tutorial check [this](https://github.com/realpython/discover-flask/) out by Galvanize's own Michael Herman!
