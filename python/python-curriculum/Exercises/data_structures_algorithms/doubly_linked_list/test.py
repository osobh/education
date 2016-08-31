from doubly_linked_list import DLL, Node
import unittest

class TestDoublyLinkedLists(unittest.TestCase):

    def setUp(self):
        self.list = DLL()

    def test_node_initialization(self):
        """"test initialization of Node"""
        n = Node(10)
        self.assertEqual(n.val, 10)

    def test_linked_list_initialization(self):
        """"test initialization of DLL"""
        self.assertIsNone(self.list.head)
        self.assertIsNone(self.list.tail)

    def test_push(self):
        self.assertEqual(self.list.length,0)
        self.list.push(5)
        self.assertEqual(self.list.length,1)
        self.list.push(7).push(10)
        self.assertEqual(self.list.length,3)

    def test_pop(self):
        self.assertIsNone(self.list.pop())
        self.list.push(4).push(5)
        self.assertEqual(self.list.length,2)
        self.assertEqual(self.list.pop(),5)
        self.assertEqual(self.list.length,1)

    def test_unshift(self):
        self.list.push(4)
        self.list.unshift(1)
        self.assertEqual(self.list.length, 2)
        self.assertEqual(self.list.pop(),4)
        self.assertEqual(self.list.pop(), 1)
        self.assertEqual(self.list.length,0)

    def test_shift(self):
        self.list.push(4).push(2)
        self.assertEqual(self.list.shift(), 4)
        self.assertEqual(self.list.length,1)
        self.assertEqual(self.list.shift(), 2)
        self.assertEqual(self.list.length,0)

    def test_get(self):
        self.list.push(0).push(1).push(2).push(3).push(4)
        self.assertEqual(self.list.length,5)
        self.assertEqual(self.list.get(2),2)
        self.assertEqual(self.list.get(0),0)
        self.assertIsNone(self.list.get(5))
        self.assertEqual(self.list.get(4),4)
        self.assertEqual(self.list.get(3),3)

    def test_set(self):
        self.list.push(0).push(1).push(2).push(3).push(4)
        self.assertEqual(self.list.length,5)
        self.list.set(4,99)
        self.assertEqual(self.list.pop(),99)
        self.assertEqual(self.list.length,4)
        self.list.set(0,-99)
        self.assertEqual(self.list.shift(),-99)
        self.assertEqual(self.list.length,3)

    def test_remove_first_element(self):
        self.list.push(1)
        self.assertEqual(self.list.length,1)
        self.assertEqual(self.list.remove(0),1)
        self.assertEqual(self.list.length,0)

    def test_remove_last_element(self):
        self.list.push(1).push(2).push(3).push(4).push(5)
        self.assertEqual(self.list.length,5)
        self.assertEqual(self.list.remove(4),5)
        self.assertEqual(self.list.length,4)

    def test_remove_second_element(self):
        self.list.push(1).push(2).push(3).push(4).push(5)
        self.assertEqual(self.list.length,5)
        self.assertEqual(self.list.remove(1),2)
        self.assertEqual(self.list.length,4)

    def test_remove_second_to_last_element(self):
        self.list.push(1).push(2).push(3).push(4).push(5)
        self.assertEqual(self.list.length,5)
        self.assertEqual(self.list.remove(3),4)
        self.assertEqual(self.list.length,4)

    def test_insert(self):
        """write your own tests!"""

    def test_reverse(self):
        """write your own tests!"""

if __name__ == '__main__':
    unittest.main()