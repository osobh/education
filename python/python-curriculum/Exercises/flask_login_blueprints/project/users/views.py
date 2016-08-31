from flask import flash, redirect, render_template, request, url_for, Blueprint
from project.users.forms import LoginForm, SignupForm
from project.users.models import User, bcrypt
from project import db
from flask_login import login_user, logout_user, login_required
from sqlalchemy.exc import IntegrityError

users_blueprint = Blueprint(
    'users',
    __name__,
    template_folder='templates'
)

@users_blueprint.route('/')
def root():
    return redirect(url_for('users.login'))

@users_blueprint.route('/signup', methods =["GET", "POST"])
def signup():
    error = None
    form = SignupForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit() :
            user = User(
                username=form.username.data,
                email=form.email.data,
                password=form.password.data
                )
            try:
                db.session.add(user)
                db.session.commit()
                login_user(user)
                return redirect(url_for('users.home'))
            except IntegrityError:
                error = 'Username already exists'
                return render_template('signup.html', form=form, error=error)
        else:
            return render_template('signup.html', form=form, error=error)
    else:
        return render_template('signup.html', form=form, error=error)

@users_blueprint.route('/login', methods =["GET", "POST"])
def login():
    error = None
    form = LoginForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            user = User.query.filter_by(username=form.username.data).first()
            if user is not None and bcrypt.check_password_hash(user.password, form.password.data):
                login_user(user)
                flash('Logged in!')
                return redirect(url_for('users.home'))
            else:
                error = 'Invalid Credentials. Please try again.'
        else:
            return render_template('login.html', form=form, error=error)
    return render_template('login.html', form=form, error=error)

@users_blueprint.route('/home')
@login_required
def home():
    return render_template('home.html')

@users_blueprint.route("/logout")
@login_required
def logout():
    logout_user()
    flash('Logged out')
    return redirect(url_for('users.login'))