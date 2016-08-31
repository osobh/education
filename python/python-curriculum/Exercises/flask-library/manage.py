from app import app
from flask_script import Manager
import unittest

manager = Manager(app)

@manager.command
def test():
    '''Runs the unit tests without coverage.'''
    tests = unittest.TestLoader().discover('test')
    unittest.TextTestRunner(verbosity=2).run(tests)

if __name__ == '__main__':
    manager.run()