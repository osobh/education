from book import Book
from app import app
import unittest


class TestBookMethods(unittest.TestCase):

    def setUp(self):
        book_list.append(Book('first', 'awesome'))
        book_list.append(Book('second', 'amazing'))

    def tearDown(self):
        book_list.clear()
        Book.id = 1

    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/books', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_new(self):
        tester = app.test_client(self)
        response = tester.get('/books/new', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_edit(self):
        tester = app.test_client(self)
        response = tester.get('/books/1', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_show(self):
        tester = app.test_client(self)
        response = tester.get('/books/1/edit', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_creating_book(self):
      tester = app.test_client(self)
      tester.post('/books',
                        data=dict(title="foo", author="bar"), follow_redirects = True)
      self.assertEqual(book_list[2].id, 3)
      self.assertEqual(book_list[2].title, 'foo')
      self.assertEqual(book_list[2].author, 'bar')
      self.assertEqual(len(book_list), 3)

    def test_editing_book(self):
      tester = app.test_client(self)
      tester.patch('/books/1',
                        data=dict(title="new_title", author="new_author"), follow_redirects = True)
      self.assertEqual(book_list[0].title, 'new_title')
      self.assertEqual(book_list[0].author, 'new_author')
      self.assertEqual(len(book_list), 2)

    def test_deleting_book(self):
      tester = app.test_client(self)
      tester.delete('/books/1', follow_redirects = True)
      tester.delete('/books/2', follow_redirects = True)
      self.assertEqual(len(book_list), 0)

if __name__ == '__main__':
    unittest.main()