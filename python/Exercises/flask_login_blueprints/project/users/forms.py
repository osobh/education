from flask_wtf import Form
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired

class SignupForm(Form):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])

class LoginForm(Form):
    username = StringField('username', validators=[DataRequired()])
    password = PasswordField('password', validators=[DataRequired()])