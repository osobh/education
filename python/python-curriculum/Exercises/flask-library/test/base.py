from flask_testing import TestCase

from app import app, db
from models.author import Author
from models.book import Book 
from models.tag import Tag


class BaseTestCase(TestCase):
    """A base test case."""

    def create_app(self):
        app.config["WTF_CSRF_ENABLED"] = False
        app.config["SQLALCHEMY_DATABASE_URI"] = 'postgres://localhost/sqlalchemy_app_test'
        return app

    def setUp(self):
        db.create_all()
        author1 = Author('Matt')
        author2 = Author('Elie')
        tag1 = Tag('Sci Fi')
        tag2 = Tag('Horror')
        tag3 = Tag('Biography')
        db.session.add_all([author1, author2, tag1, tag2, tag3])
        db.session.commit()
        book1 = Book('Night of the Living Decorator', author2.id)
        book1.tags = [tag2]
        book2 = Book("Matt's Scary Sci Fi book", author1.id)
        book2.tags = [tag1, tag2]
        db.session.add_all([book1, book2])
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()