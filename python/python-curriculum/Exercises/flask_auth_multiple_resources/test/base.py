from flask_testing import TestCase

from project import app, db
from project.users.models import User
from project.posts.models import Post


class BaseTestCase(TestCase):
    """A base test case."""

    def create_app(self):
        app.config["WTF_CSRF_ENABLED"] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///testing.db'
        return app

    def setUp(self):
        db.create_all()
        user = User("admin", "admin")
        db.session.add(user)
        db.session.commit()
        db.session.add(
            Post("Test post", "This is a test. Only a test.", user.id))
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()