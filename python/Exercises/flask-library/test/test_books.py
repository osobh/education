# tests/test_books.py

import unittest

from base import BaseTestCase
from werkzeug import ImmutableMultiDict

class BookTests(BaseTestCase):

  def test_book_index(self):
    '''for each author, should have an index page for books'''
    response = self.client.get('/authors/2/books', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Night of the Living Decorator', response.data)
    self.assertNotIn(b'Scary Sci Fi book', response.data)

  def test_book_new(self):
    '''should have a new page with form for books'''
    response = self.client.get('/authors/2/books/new', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'name', response.data.lower())
    self.assertIn(b'form', response.data.lower())

  def test_book_new_tags(self):
    '''BONUS : should show all tags on a book's new page'''
    response = self.client.get('/authors/2/books/new', content_type='html/text')
    self.assertIn(b'Sci Fi', response.data)
    self.assertIn(b'Horror', response.data)
    self.assertIn(b'Biography', response.data)

  def test_book_create(self):
    '''should be able to create a new book and redirect to book index'''
    with self.client:
      response = self.client.post(
        '/authors/2/books',
        data=dict(title="Brand New Book"),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Brand New Book', response.data)
      self.assertIn(b'Night of the Living Decorator', response.data)
      self.assertNotIn(b'Scary Sci Fi book', response.data)

  def test_book_create_tags(self):
    '''BONUS: should be able to add tags to a book upon creation'''
    with self.client:
      self.client.post(
        '/authors/2/books',
        data=ImmutableMultiDict([('tags', '1'), ('tags', '2'), ('title', 'Cool cool cool')]),
        follow_redirects=True
      )
      response = self.client.get('authors/2/books/3')
      self.assertIn(b'Cool cool cool', response.data)
      self.assertIn(b'Sci Fi', response.data)
      self.assertIn(b'Horror', response.data)
      self.assertNotIn(b'Biography', response.data)

  def test_book_show(self):
    '''should have a show page for each book'''
    response = self.client.get('/authors/2/books/1', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Night of the Living Decorator', response.data)
    self.assertNotIn(b'Scary Sci Fi book', response.data)

  def test_book_show_tags(self):
    '''BONUS: should show the tags for a book on its show page'''
    response = self.client.get('/authors/2/books/1', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Horror', response.data)
    self.assertNotIn(b'Sci Fi', response.data)

  def test_book_edit(self):
    '''should have an edit page with form for each book'''
    response = self.client.get('/authors/2/books/1/edit', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Night of the Living Decorator', response.data)
    self.assertNotIn(b'Scary Sci Fi book', response.data)
    self.assertIn(b'form', response.data)

  def test_book_edit_tags(self):
    '''BONUS : should show all tags on a book's edit page'''
    response = self.client.get('/authors/2/books/1/edit', content_type='html/text')
    self.assertIn(b'Sci Fi', response.data)
    self.assertIn(b'Horror', response.data)
    self.assertIn(b'Biography', response.data)

  def test_book_update(self):
    '''should be able to edit an book and redirect to book index'''
    with self.client:
      response = self.client.patch(
        '/authors/2/books/1',
        data=ImmutableMultiDict([('tags', '2'), ('title', "Brand New Title")]),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Brand New Title', response.data)
      self.assertNotIn(b'Night of the Living Decorator', response.data)

  def test_book_update_tags(self):
    '''BONUS: should be able to edit a book's associated tags'''
    with self.client:
      self.client.patch(
        '/authors/2/books/1',
        data=ImmutableMultiDict([('tags', '3'), ('title', 'Night of the Living Decorator')]),
        follow_redirects=True
      )
      response = self.client.get('/authors/2/books/1')
      self.assertIn(b'Biography', response.data)
      self.assertNotIn(b'Sci Fi', response.data)
      self.assertNotIn(b'Horror', response.data)

  def test_book_destroy(self):
    '''should be able to delete a book and redirect to book index'''
    with self.client:
      self.client.delete(
        'authors/2/books/1',
        follow_redirects=True
      )
      response = self.client.get('/authors/2/books')
      self.assertEqual(response.status_code, 200)
      self.assertNotIn(b'Night of the Living Decorator', response.data)

if __name__ == '__main__':
  unittest.main()