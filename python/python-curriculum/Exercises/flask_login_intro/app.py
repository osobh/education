from flask import Flask, flash, redirect, url_for, render_template, request
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from forms import LoginForm

app = Flask(__name__)
bcrypt = Bcrypt(app)

app.secret_key = "i'll never tell"
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask_login_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

db = SQLAlchemy(app)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, unique=True)
    email = db.Column(db.Text, unique=True)
    password = db.Column(db.Text)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    def __repr__(self):
        return '<User %r>' % self.username

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == int(user_id)).first()


@app.route('/')
def root():
    return redirect(url_for('login'))

@app.route('/login', methods =["GET", "POST"])
def login():
    error = None
    form = LoginForm(request.form)
    if request.method == 'POST':
        if(form.validate_on_submit()):
            user = User.query.filter_by(username=request.form['username']).first()
            if user is not None and bcrypt.check_password_hash(user.password, request.form['password']):
                # session['logged_in'] = True
                login_user(user)
                flash('Logged in!')
                return redirect(url_for('home'))
            else:
                error = 'Invalid Credentials. Please try again.'
        else:
            return render_template('login.html', form=form, error=error)
    return render_template('login.html', form=form, error=error)

@app.route('/home')
@login_required
def home():
    return render_template('home.html')

@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash('Logged out')
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True, port=3000)