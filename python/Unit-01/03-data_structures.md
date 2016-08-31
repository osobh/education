# Data Structures in Python

## Objectives 
* Create and manipulate lists, tuples, dictionaries, and sets in Python
* Compare and contrast methods Javascript and Python methods on basic data structures

To begin, we'll talk about two of Python's similar data structures, **lists** and **tuples**. Both are very similar to Javascript's array data structure.

Both are a type of sequence in Python. Sequences are a generic term for ordered groups of elements (the three most common are lists, tuples, and strings). The main difference in the lists and tuples is that lists are mutable while **tuples are immutable**. Therefore, list's elements can be reassigned or removed, and new elements can be inserted while tuples can't be changed once created.

## Lists

Lists are a data type you can use to store a collection of different pieces of information as a sequence under a single variable name. So they are simply an ordered sequence of values with indices that correspond to their position in the sequence. 

**Lists are created with the same square bracket notation as JavaScript.**

Javascript:

```
var array = ["Elie", "Matt", "Tim", "Parker", "Janey"]
```

Python:

```
list = ["Elie", "Matt", "Tim", "Parker", "Janey"]
```

Also, like Javascript arrays, **values in lists can be accessed and changed using their index and square bracket notation**:

Javascript:

```
var first = array[0]
// first is now equal to "Elie"

array[2] = "Tyler"

var third = array[2]
// third is now equal to "Tyler"
```

Python:

```
first = list[0]
# first is now equal to "Elie"

list[2] = "Tyler"

third = list[2]
# third is now equal to "Tyler"
```

A few other cool feature of lists (and other sequences like tuples and strings) is that you can add and multiply them. Also the `in` keyword will return `True` or `False` depending on whether that value is in the sequence.

```
[1,2,3] + [4,5] == [1,2,3,4,5]

(1,11) * 3  == (1,11,1,11,1,11)

"a" in "Parker" == True

```

#### Simple Exercise:
____________

Super simple. Open up your Python REPL, create a few lists, and access some values.

____________

## Slice Syntax of Sequences

The basic syntax for accessing any slice of a sequence (list, tuple, or string) is `my_sequence[begin:end]`. This will return a slice from the begin index up to, but not including, the end index. 

The `begin` and `end` parameters of the slice syntax are optional. By omitting one you are telling Python that you want to start at the beginning and/or go to the end of the sequence. Omitting both indicates that you want to slice the entire sequence. So, using the list `["Elie", "Matt", "Tim", "Parker", "Janey"]`, `list[:2]` will return `['Elie', 'Matt']`, `list[1:]` will return `['Matt', 'Tyler', 'Parker', 'Janey']`, and `list[:]` will return `['Elie', 'Matt', 'Tyler', 'Parker', 'Janey']`.

There is also an optional third argument that can be passed to the slice notation of sequences. It indicates a step by which you would like to increment by when accessing the values. That means that `list[0:len(list):2]` (or equivalently `list[::2]`) will return `['Elie', 'Tyler', 'Janey']`. Lets break that down. We start at the first index and add that to our output array. Then step two places (landing on Tyler) and add that to the output. We keep repeating that until we have reached the end index.

This can be useful when reversing any sequence. The simplest way to reverse a sequence in Python is `foo[::-1]`. This negative number tells us to step backwards from the end to the beginning and place every value in our output. Nifty, huh?

#### Another Simple Exercise 

_________
Create some more lists. Then think about which values you want to slice into a new variable. Try out this syntax and check to make sure you are slicing what you actually want to be slicing.
___________

## Python vs Javascript Methods

Here is a list of common methods in Javascript and their equivalent method in Python.


|                                                                                                                                                                                                                                                                                                                                                                                                                                Description | Javascript                                              | Python                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|--------------------------------------------|
| Return the length of the array or list                                                                                                                                                                                                                                                                                                                                                                                                     | `arr.length`                                              | `len(list)  `                                |
| Add an element to the end of an array or list                                                                                                                                                                                                                                                                                                                                                                                              | `arr.push(item)`                                          | `list.append(item)`                          |
| Remove an item from the end of an array or list                                                                                                                                                                                                                                                                                                                                                                                            | `arr.pop() `                                              | `list.pop()`                                 |
| Remove the first item of an array or list. Notice that you can use an index with the pop method in Python to pop off a specific value.                                                                                                                                                                                                                                                                                                     | `arr.shift()`                                             | `list.pop(0)`                                |
| Add an item to the front of an array or list. Notice that Python does not have native shift and unshift methods. From Stack Overflow this is because  "Python lists were optimized for fast fixed-length operations and incur O(n) memory movement costs for pop(0) and insert(0, v) operations which change both the size and position of the underlying data representation."                                                            | `arr.unshift(item)`                                       | `list.insert(0, item)`                       |
| Make a copy of the items in an array or list from a starting index up to, but not including an ending index.                                                                                                                                                                                                                                                                                                                               | `arr.slice(begin, end)`                                   | `list[begin:end]`                            |
| Destructive method that splices out a portion of an array or list and replaces it with different values. Notice the differences in implementation between the two languages. Javascript uses a deleteCount while Python uses its splice notation with a beginning and ending index. Also, the adding of new items is optional in Javascript whereas in Python you must replace the items with new values that are encapsulated in a list. | `arr.splice(start, deleteCount[, item1[, item2[, ...]]])` | `list[begin:end] = [ item1[,item2[, ...]] ]` |


Some more methods:

| Method  | Description     |
|------------------|----------------------------------------------------------|
| list.count(obj)  | Returns count of how many times obj occurs in list       |
| list.extend(seq) | Appends the contents of seq to list (like .concat in JS) |
| list.index(obj)  | Returns the lowest index in list that obj appears        |
| list.remove(obj) | Removes object obj from list                             |
| list.reverse()   | Reverses objects of list in place                        |
| list.sort()      | Sorts objects of list                                    |


Finally, we land on the `del` keyword. `del` is a way to remove an item from a list given its index instead of its value (as .remove() does). It can also use the slice syntax to delete multiple values in a list. Here are some examples of it in action:

```
list = ["Elie", "Matt", "Tim", "Parker", "Janey"]
del list[0]
# list is now ["Matt", "Tim", "Parker", "Janey"]

del list[:2]
# list is now ["Tim", "Parker", "Janey"]

del list[:]
# list is now []

a = [-1, 1, 66.25, 333, 333, 1234.5]
del a 
# a is now destroyed and trying to access it will throw a NameError (NameError: name 'a' is not defined)
``` 

#### Exercises

________
Create some lists and use each of these methods at least once. 
________


## Tuples

In Python, a tuple consists of a number of values separated by commas. The only exception is the empty tuple, which is created with (). Tuples are meant to contain short, heterogeneous sequences, or positionally relevant values. **Tuples are immutable**.

To create tuples, we just assign comma seperated values to a variable like so:

```
tuple = 1, "a", True, {"dog": "Fido"}
# tuple is now (1, 'a', True, {'dog': 'Fido'})

"""
Notice that printing to the console will automatically add parenthesis for you. You can add them yourself when creating tuples, but it is not necessary. 
"""
```

Like lists and Javascript arrays, tuples can be nested. While tuples themselves cannot be changed (as they are immutable), the values of lists inside of tuples can be changed.

```
# Using the variable tuple from above...
tuple[0] = "Parker"
This will result in TypeError: 'tuple' object does not support item assignment

# If we change tuple to a tuple with two lists inside of it:
tuple = [1,2,3],[4,5,6]
# We can't do this:

tuple[0] = 87
TypeError: 'tuple' object does not support item assignment
# But we can do this:

tuple[0][1] = 87

# and now tuple equals ([1, 87, 3], [4, 5, 6])

```
So, while **tuples are immutable**, if they contain lists or other mutable structures, those can be mutated using bracket notation.

#### Simple Exercise
_________
Create a few tuples and access values, use splice syntax, and try to change values in the tuple. If you are getting errors doing the last part, why?

_________

## Sequence Unpacking	

Tuples and lists can be "unpacked" into variables in this way:

```
list = [1,2,3]
a,b,c = list

# a now equals 1, b equals 2, and c equals 3

tuple = 4,5,6
x,y,z = tuple

# x now equals 4, y equals 5, and z equals 6
```
Sequence unpacking requires that there are as many variables on the left side of the equals sign as there are elements in the sequence. Otherwise you will get a ValueError:  `ValueError: too many values to unpack`

#### Excercise:
_____________
Create a few simple tuples and lists of various values and practice the syntax for unpacking those values into other variables
__________


## Dictionaries

The closest equivalent to Javascript objects in Python are called dictionaries. JavaScript code that builds objects with curly brackets looks very similar to Python dictionaries, but what’s going on behind the scenes is different. This is because dictionaries in Python are [hash-tables](https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-3/02-hash-tables.md). 

Nonetheless, curly brackets and colons together create dictionaries in Python just like they do in Javascript.

```
# Python Dictionaries are created like this:

dictionary = {"key": value, "otherkey": othervalue}
``` 

An important note: the keys in Python dictionaries must be hashable. **All immutable types in Python are hashable** so keys can be integers, strings, unicode characters, floats, and a few others. 

There is one other immutable data type that you know now that can be a key in a dictionary that I have left out. What is it?

__________________________
#### Exercises:
In your Python REPL: Create a few dictionaries and save them in to variables. Try to use a few different data types for the keys and variables. Hopefully you will run into errors along the way (something like `TypeError: unhashable`). 

Try to access the value of a key the way you would with Javascript. Then try the other way. (dot notation vs bracket notation). Any errors that you didn't expect?

Also try to change some values of various keys. Can you do it? What does this tell you about the mutability of dictionaries?

Try to add a key to a dictionary that you have already created the way you would in Javascript. Can you do it?

Do you think you can use the `del` to delete a key-value pair? Try it out and see!


_______________

Here are a few dictionary methods that you may find useful: 

| Method            | Description                                              |
|-------------------|----------------------------------------------------------|
| dict.clear()      | Removes all elements of dictionary dict                  |
| dict.copy()       | Returns a shallow copy of dictionary dict                |
| key in dict | Returns true if key in dictionary dict, false otherwisef |

Here is a good resource on [Python dictionaries](http://www.tutorialspoint.com/python/python_dictionary.htm)


## Sets

We will end with sets. In mathematics, a set is an unordered collection of **distinct** objects. It gets much more complicated than that but lets keep it simple. This simple definition of sets means that the set of first names of instructors in San Francisco would be Elie, Liz, Tyler, Parker, and Matt. Notice that there is only one Matt in the set even though we actually have Matt Lane and Matt Williams.

If we want to create a set, we can call the built-in set function with a sequence or another iterable object or use curly bracket notation.

So lets make some sets in Python:

```
adjectives = {"cheap","expensive","inexpensive","expensive","economical"}

# adjectives will now output {'cheap', 'economical', 'expensive', 'inexpensive'}

x = set("I love Python")
# x will now output {' ', 'I', 'P', 'e', 'h', 'l', 'n', 'o', 't', 'v', 'y'}

```

Notice that though there are muliples of the same values, they only appear once in the set.

Sets are implemented in such a way that they do not allow mutable objects (lists are the classic case that are not allowed) to be passed in. 

```
foo = {[1,2,3]}

# Trying to create a set this will will throw an error because lists are mutable. (TypeError: unhashable type: 'list')
```

However, sets themselves are mutable so we can **add** and **remove** objects from a set.

```
foo = {1,2,3}
foo.add(4)

# foo now outputs {1, 2, 3, 4}

foo.remove(2)

# foo now outputs {1,3,4}
```

A few more useful methods with sets:

| Method     | Description                                                                                                                                                                                                               |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| clear()     | All elements will removed from a set.                                                                                                                                                                                                               |
| copy()      | Creates a shallow copy, which is returned.                                                                                                                                                                                                          |
| discard(el) | An element el will be removed from the set, if it is contained in the set. If el is not a member of the set, nothing will be done. This is like remove(el) except that if el is not present in the set a KeyError will be raised when using remove. |
| pop()       | Removes and returns an arbitrary set element. The method raises a KeyError if the set is empty                                                                                                                                                      |


As stated before, sets are big in math. Python has some great methods to help with mathematical applications of sets:


| Method                    | Description                                         |
|---------------------------|-----------------------------------------------------|
| x in s                    | Test x for membership in s                          |
| x not in s                | Test x for non-membership in s                      |
| s.issubset(t)             | Test whether every element in s is in t             |
| s.issuperset(t)           | Test whether every element in t is in s             |
| s.union(t)                | New set with elements from both s and t             |
| s.intersection(t)         | New set with elements common to s and t             |
| s.difference(t)           | New set with elements in s but not in t             |
| s.symmetric_difference(t) | New set with elements in either s or t but not both |

__________

#### Exercise:

Create a set of a bunch of animals. Make sure to add a lot of different types of cats in that set (both domesticated and wild ones). Then make a set of domesticated animals and a set of wild animals (again focusing on types of cats for this example). Use these methods to find out the relationships between these sets.

Once you've done this, use the methods from the previous table to get some practice mutating your sets.
_________

### Frozen Sets

Frozen sets are like sets except that they cannot be changed, i.e. they are immutable. Simple as that.

```
cities = frozenset(("San Francisco", "Oakland"))
cities.add("Berekely")

# AttributeError: 'frozenset' object has no attribute 'add'

```
