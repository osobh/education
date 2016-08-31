# tests/test_misc.py

import unittest

from base import BaseTestCase

class MiscRouteTests(BaseTestCase):

  def test_root(self):
    '''There should be a homepage'''
    response = self.client.get('/', content_type='html/text')
    self.assertEqual(response.status_code, 200)

  def test_404(self):
    '''There should be a 404 page'''
    response = self.client.get('/aweflkhawefkjh', content_type='html/text')
    self.assertEqual(response.status_code, 404)
    self.assertNotIn(b'The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again.', response.data)

if __name__ == '__main__':
  unittest.main()