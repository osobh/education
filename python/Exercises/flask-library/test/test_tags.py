# tests/test_tags.py

import unittest

from base import BaseTestCase

class TagTests(BaseTestCase):

  def test_tag_index(self):
    '''BONUS: should have an index page for tags'''
    response = self.client.get('/tags', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Sci Fi', response.data)
    self.assertIn(b'Horror', response.data)
    self.assertIn(b'Biography', response.data)

  def test_tag_new(self):
    '''BONUS: should have a new page with form for tags'''
    response = self.client.get('/tags/new', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'name', response.data.lower())
    self.assertIn(b'form', response.data.lower())

  def test_tag_create(self):
    '''BONUS: should be able to create a new tag and redirect to tag index'''
    with self.client:
      response = self.client.post(
        '/tags',
        data=dict(name="Nonfiction"),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Sci Fi', response.data)
      self.assertIn(b'Horror', response.data)
      self.assertIn(b'Biography', response.data)
      self.assertIn(b'Nonfiction', response.data)

  def test_tag_show(self):
    '''BONUS: should have a show page for each tag'''
    response = self.client.get('/tags/1', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Sci Fi', response.data)
    self.assertNotIn(b'Horror', response.data)

  def test_show_books_for_given_tag(self):
    '''BONUS: should show a list of books with a given tag on the tag's show page'''
    response = self.client.get('/tags/1', content_type='html/text')
    self.assertIn(b"Scary Sci Fi book", response.data)
    self.assertNotIn(b"Night of the Living Decorator", response.data)

  def test_tag_edit(self):
    '''BONUS: should have an edit page with form for each tag'''
    response = self.client.get('/tags/1/edit', content_type='html/text')
    self.assertEqual(response.status_code, 200)
    self.assertIn(b'Sci Fi', response.data)
    self.assertIn(b'form', response.data)
    self.assertNotIn(b'Horror', response.data)

  def test_tag_update(self):
    '''BONUS: should be able to edit an tag and redirect to tag index'''
    with self.client:
      response = self.client.patch(
        '/tags/1',
        data=dict(name="Science Fiction"),
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Science Fiction', response.data)
      self.assertIn(b'Horror', response.data)
      self.assertNotIn(b'Sci Fi', response.data)

  def test_tag_destroy(self):
    '''BONUS: should be able to delete a tag and redirect to tag index'''
    with self.client:
      response = self.client.delete(
        '/tags/1',
        follow_redirects=True
      )
      self.assertEqual(response.status_code, 200)
      self.assertIn(b'Horror', response.data)
      self.assertNotIn(b'Sci Fi', response.data)

if __name__ == '__main__':
  unittest.main()