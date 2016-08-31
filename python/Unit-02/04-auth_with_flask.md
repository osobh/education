## Authentication in Flask with flask_login

Authentication in Flask is quite friendly through the use of a couple helpful modules like `flask-bcrypt` for hashing and `flask-login` for managing cookies/sessions. We will also be covering how to build more secure forms with `flask-wtf` and send flash messages with `flash`.

### flask-wtf

To enable CSRF protection as well as validate our forms, we can use a module called `flask-wtf`. To add `flask-wtf` let's create a file called `forms.py` and place our first form in there. You can read more about flask wtf [here](https://flask-wtf.readthedocs.io/en/latest/). One of the biggest benefits of flask-wtf is that it easily allows us a defense against CSRF.

Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious Web site, email, blog, instant message, or program causes a user's Web browser to perform an unwanted action on a trusted site for which the user is currently authenticated. You can read more about it [here](https://en.wikipedia.org/wiki/Cross-site_request_forgery) 

```py
from flask_wtf import Form
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class FirstForm(Form):
    first = StringField('first', validators=[DataRequired()])
    last = StringField('last', validators=[DataRequired()])
    age = IntegerField('last', validators=[DataRequired()])
```

```py
from forms import FirstForm
from flask_wtf.csrf import CsrfProtect

# initialize app...

app.config["SECRET_KEY"] = 'shhhhh' # since we are using CSRF protection, we need to have a secret key to decrypt the token.

CsrfProtect(app)

@app.route('/users', methods=('POST'))
def create():
    error = None
    form = MyFirstForm(request.form)
    if form.validate_on_submit(): # if the form is valid
        # create a user here!
        return redirect(url_for('index'))
    return render_template('submit.html', form=form, error=error)
```

Inside of your view - you can display form information like this:

```html
<form method="POST" action="/users">
    {{ form.csrf_token }} # you MUST have this for CSRF protection 
    {{ form.first.label }} {{ form.first(size=15) }}
    {{ form.last.label }} {{ form.last(size=30) }}
    {{ form.age.label }} {{ form.age(type='number) }}
    <input type="submit" value="Add">
</form>
```


### flash

To use flash messages, import the flash module from flask. Since these messages will live in the session, you need to have a "SECRET_KEY" configured in your application

```py
from flask import flash # and everything else...
from forms import FirstForm

app.config["SECRET_KEY"] = 'shhhhh'

@app.route('/users', methods=('POST'))
def create():
    error = None
    form = MyFirstForm(request.form)
    if form.validate_on_submit(): # if the form is valid
        # create a user here!
        flash('created!')
        return redirect(url_for('index'))
    return render_template('submit.html', form=form, error=error)
```

In your base.html - add the following code so that these messages can be displayed.

```html
{% for message in get_flashed_messages() %}
    <p>{{message}}</p>
{% endfor %}
```

### flask-bcrypt

To get started with password hashing, let's make sure we have the `flask-bcrypt` module and install it via `pip install flask-bcrypt`. This module which gives us two very useful methods for hashing/salting passwords (one to hash and one to decrypt). You can read more from the docs [here](https://flask-bcrypt.readthedocs.io/en/latest/). The only thing we want to be careful for is to make sure we decode the password hash before sql_alchemy saves it (this is a python3 issue where strings are unicode so in our model we code a line like this:)

```py
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)

    def __init__(self, username, password):
        self.username = username
        # handle decoding - hash the password and call it a day!
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
```

### Using virtualenvwrapper for environment variables

```sh
subl $VIRTUAL_ENV/bin/postactivate
```

Inside of here - you can add your environment variables using the `export` keyword. Make sure you do not have quotes or any spaces between the `=`

```bash
export SECRET_KEY='shhhhhh'
```

After restarting your virtual environment - you can then `echo $SECRET_KEY` and you should see shhhh. To use these environment variables inside your application you have to:

```py
import os

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
```

### flask-login

To handle cookies/sessions we will be using the flask-login tool. We want to make sure we `pip install flask-login` to use the module and once we have that we can start setting up our login manager.

#### Login Manager

Just like we imported a Manager for our migrations, we need to import a login manager to handle flask_login setup

```py
from flask_login import LoginManager

login_manager = LoginManager()
# app comes from Flask(__name__)
login_manager.init_app(app)
# where should flask go when someone who is not logged in tries to access a route that requires them to be logged in?
login_manager.login_view = 'login'
```

We may also want to configure how flask_login should find a `current-user` for us. To do that we use the `@login_manager.user_loader` function.

```py
@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == int(user_id)).first()
```

[https://flask-login.readthedocs.io/en/latest/](https://flask-login.readthedocs.io/en/latest/)

#### UserMixin

From the flask_login docs - The class that you use to represent users needs to implement these properties and methods:

`is_authenticated` - Returns True if the user is authenticated, i.e. they have provided valid credentials. (Only authenticated users will fulfill the criteria of login_required.)

`is_active` - Returns True if this is an active user - in addition to being authenticated, they also have activated their account, not been suspended, or any condition your application has for rejecting an account. Inactive accounts may not log in (without being forced of course).

`is_anonymous` - Returns True if this is an anonymous user. (Actual users should return False instead.)

`get_id()` - Returns a unicode that uniquely identifies this user, and can be used to load the user from the user_loader callback. Note that this must be a unicode - if the ID is natively an int or some other type, you will need to convert it to unicode.

To make implementing a user class easier, you can inherit from UserMixin, which provides default implementations for all of these methods. (It’s not required, though.)

```py
from flask_login import UserMixin

class User(db.Model, UserMixin):
    # User now inherits from the mixin! This means we don't have to implement 4 methods on our own....we can let flask_login handle it!
```

#### Useful flask-login decorators / functions

`@login_required` - this decorator is placed below our routes and ensures that the user is logged in or will redirect them to what the value of `login_manager.login_view` is. Here is what that code might look like:

```py
@app.route('/home')
@login_required
def home():
    return render_template('home.html')
```

`login_user` - this function helps set information in the session and sends a coookie to the browser. This function MUST accept the user that has successfully been authenticated. Here is what that code might look like:

```py
if user is not None and bcrypt.check_password_hash(user.password, request.form['password']):
    # session['logged_in'] = True - normally we might set things in the session ourselves....not anymore!
    login_user(user) # we can use this function to handle everything for us
    flash('Logged in!')
    return redirect(url_for('home'))
```

`logout_user` - this helpful function will manage clearing a session. Her is what that code might look like:

```py
@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash('Logged out')
    return redirect(url_for('login'))
```

`current_user` - if we have set up our `@login_manager.user_loader` function correctly (from above), we get access to the user who is currently logged in. This is extremely useful for logic and presentation in our views

#### Using FlaskJWT instead

If you would like to use JWTs instead of cookies/sessions feel free to take a look at the FlaskJWT module docs [here](https://pythonhosted.org/Flask-JWT/)

#### Exercise

Implement this on your own! Feel free to use the example as a reference, but try to do this on your own with some additional challenges:

- move your secret_key to a `.env` file
- instead of using the UserMixin, implement the 4 methods flask_login requires you to use.
- style your application a bit more!
- add an additional resource and find a way to authorize routes (you might have to write your own decorator!) - check out [this](http://flask.pocoo.org/snippets/98/) for some inspiration.
- deploy your application on heroku