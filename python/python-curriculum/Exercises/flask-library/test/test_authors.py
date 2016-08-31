# tests/test_authors.py

import unittest

from base import BaseTestCase

class AuthorTests(BaseTestCase):

  def test_author_index(self):
    '''should have an index page for authors'''
    response = self.client.get('/authors', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Matt', response.data)
    self.assertIn(b'Elie', response.data)

  def test_author_new(self):
    '''should have a new page with form for authors'''
    response = self.client.get('/authors/new', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'name', response.data.lower())
    self.assertIn(b'form', response.data.lower())

  def test_author_create(self):
    '''should be able to create a new author and redirect to author index'''
    with self.client:
      response = self.client.post(
        '/authors',
        data=dict(name="Parker"),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Matt', response.data)
      self.assertIn(b'Elie', response.data)
      self.assertIn(b'Parker', response.data)

  def test_author_show(self):
    '''should have a show page for each author'''
    response = self.client.get('/authors/1', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Matt', response.data)
    self.assertNotIn(b'Elie', response.data)

  def test_author_edit(self):
    '''should have an edit page with form for each author'''
    response = self.client.get('/authors/1/edit', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Matt', response.data)
    self.assertIn(b'form', response.data)
    self.assertNotIn(b'Elie', response.data)

  def test_author_update(self):
    '''should be able to edit an author and redirect to author index'''
    with self.client:
      response = self.client.patch(
        '/authors/1',
        data=dict(name="Tim"),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Tim', response.data)
      self.assertIn(b'Elie', response.data)
      self.assertNotIn(b'Matt', response.data)

  def test_author_destroy(self):
    '''should be able to delete an author and redirect to author index'''
    with self.client:
      response = self.client.delete(
        '/authors/1',
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Elie', response.data)
      self.assertNotIn(b'Matt', response.data)

if __name__ == '__main__':
  unittest.main()