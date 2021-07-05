from Users.max.Projects.pandigitalprime import listAllDigitsOfBase
import unittest
import pandigitalprime
class TestPan(unittest.TestCase):

    def test_listAllDigitsBase(self):
        
        self.assertEqual(listAllDigitsOfBase(6), [1,2,3,4,5,6])


if __name__ == '__main__':
    unittest.main()