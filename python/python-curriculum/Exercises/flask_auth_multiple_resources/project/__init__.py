from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_modus import Modus

app = Flask(__name__)
modus = Modus(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "users.login"
app.secret_key = 'secretsauce' # Move me to a .env file!
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask_auth_multiple_resources'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from project.users.views import users_blueprint
from project.posts.views import posts_blueprint

app.register_blueprint(users_blueprint)
app.register_blueprint(posts_blueprint)

from project.users.models import User

@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))