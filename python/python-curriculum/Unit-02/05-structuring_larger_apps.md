# Structuring Larger Flask Apps

Our applications have become increasingly large with controller and model logic inside of a single or maybe just a couple files. As our applications grow, the need to write more modular code grows and Flask blueprints help us do just that.

Let's start with this example: [In class Auth example](https://github.com/gSchool/python-curriculum/tree/master/Exercises/flask_login_intro) which we will be refactoring to use blueprints

### Including Blueprints

So what is a blueprint? According to the docs Flask uses a concept of blueprints for making application components and supporting common patterns within an application or across applications. Blueprints can greatly simplify how large applications work and provide a central means for Flask extensions to register operations on applications. A Blueprint object works similarly to a Flask application object, but it is not actually an application. Rather it is a blueprint of how to construct or extend an application. Both [http://flask.pocoo.org/docs/0.11/blueprints/](http://flask.pocoo.org/docs/0.11/blueprints/) and [http://exploreflask.readthedocs.io/en/latest/blueprints.html](http://exploreflask.readthedocs.io/en/latest/blueprints.html) are great resources for learning more about blueprints

### Folder Structure

A couple things we need to think about when we start structuring our applications using blueprints

- we should make a separate folder for the entire project (not including our `manage.py` for migrations, our migrations folder, any database setup, any testing and config files, and a main app.py to start our server).
- Inside of this folder which we will call `project`, we should make a folder called templates which will include our base templates and any others that will be inherited from
- Inside of this folder which we will call `project` we will create a file called `__init__.py` which will contain our application setup (the app variable, db variable and our login_manager setup)
- Inside of the `project` folder we can now start creating seperate folders for each resource we will be working with. These resources should have the following files/folders
    - templates - for html templates
    - forms.py - for flask_wtf forms
    - views.py - for managing routes (and blueprint setup)
    - models.py - for managing the model associated with that resource

Here is what a sample structure might look like with one resource 

```
.
├── app.py
├── database.py
├── forms.py
├── manage.py
├── migrations
│   ├── README
│   ├── alembic.ini
│   ├── env.py
│   ├── script.py.mako
│   └── versions
│       └── 9e7847a9b3fa_.py
├── project
│   ├── __init__.py
│   ├── templates
│   │   └── base.html
│   └── users
│       ├── forms.py
│       ├── models.py
│       ├── templates
│       │   ├── home.html
│       │   ├── login.html
│       │   └── signup.html
│       └── views.py
├── requirements.txt
└── templates
    ├── base.html
    ├── home.html
    └── login.html
```

### Adding blueprints 

So now that we have a good idea of the structure - how do we actually set this up? Most of the work is going to happen in our `views.py` for each resource as well as the `__init__.py` file inside our `project` folder. In order to set up a blueprint, we need to import it from flask and register it:

```py
from flask import Blueprint

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)
```

Now that we have set this up, for our routes, we do NOT use the `@app` decorator. We use the name of our blueprint and when we use `url_for` we have to be specific about where these views are located:

```py
# notice we use the name of our blueprint
@users_blueprint.route('/')
def root():
    # and we specify what blueprint name / what template
    return redirect(url_for('users.login'))
```

Finally in our `__init__.py` we need to add:

```py

# import our blueprint from project/users/views.py
from project.users.views import users_blueprint

# register our blueprint with the app
app.register_blueprint(users_blueprint)
```

With this in mind - try to refactor your login application to use blueprints!

### Exercise

Build off of your refactored application and incorporate the following:

- move your secret_key to a `.env` file
- instead of using the UserMixin, implement the 4 methods flask_login requires you to use.
- tests! Take a look at [flask-testing](http://pythonhosted.org/Flask-Testing/) as well as the primer [here](http://flask.pocoo.org/docs/0.11/testing/)
- another resource with authorization - protect your routes!
- styling
- deploying to heroku

