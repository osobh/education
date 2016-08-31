from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
app.secret_key = "i'll never tell" # put this in a .env file! https://github.com/theskumar/python-dotenv OR add this to your virtual environment!
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask_login_app_blueprint'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from project.users.views import users_blueprint

# register our blueprints
app.register_blueprint(users_blueprint)

from project.users.models import User

login_manager.login_view = "users.login"

@login_manager.user_loader
def load_user(user_id):
    return User.query.filter(User.id == int(user_id)).first()