# tests/test_blog.py

import unittest

from base import BaseTestCase


class BlogPostTests(BaseTestCase):

    # Ensure a logged in user can add a new post
    def test_user_can_post(self):
        with self.client:
            self.client.post(
                '/login',
                data=dict(username="admin", password="admin"),
                follow_redirects=True
            )
            response = self.client.post(
                '/users/1/posts',
                data=dict(title="test", body="test", user_id=1),
                follow_redirects=True
            )
            self.assertEqual(response.status_code, 200)
            self.assertIn(b'Post Successfully Added',
                          response.data)


if __name__ == '__main__':
    unittest.main()