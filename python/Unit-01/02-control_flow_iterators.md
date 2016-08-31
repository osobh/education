# Control Flow and Iterators

## Basic if/else Statements

Let's talk about control flow in Python. Here's our first if statement:

```python
if True:
	print("True expression!")
else:
	print("False expression!")
```

Put this in the console, and, as expected, you should see "True expression!" print to the console.

There are two main syntax differences here compared to Javascript. The first is a lack of curly braces: because Python forces you to indent consistently, the indentation dictates which statements are inside of any given piece of control flow. The second difference is the colon ":", which indicates the start of a control flow block. When you're first learning Python, you'll forget about this colon all the time. Don't sweat it, it'll come with practice.

Simple if/else statements like the one above can be consolidated into Python's version of a ternary:

```python
print("True expression!") if True else print("False expression!")
# prints "True expression!"

print("True expression!" if True else "False expression!")
# also prints "True expression!"
```

Notice that Python avoid's Javascript's `expression ? do this if true : do this if false` syntax. As we'll continue to see below, Python strives to be a little more readable in its control flow syntax.

Note also that variables defined conditionally are available outside of the block of control flow:

```python
big_number = 1000

if big_number > 500:
	small_number = 10
	true_message = "The expression evaluated to true!"
else:
	small_number = big_number / 2
	false_message = "The expression evaluated to false!"
	
print(small_number) # 10
print(true_message) # 'The expression evaluated to true!'
print(false_message) # NameError: name 'false_message' is not defined
```

## elif

Need more than two branches in your control flow? Rather than Javascript's `else if` syntax, Python uses the key word `elif`:

```python
from datetime import date
day_of_week = date.weekday(date.today())

if day_of_week == 0:
	print("Manic Monday")
elif day_of_week == 1:
	print("Ruby Tuesday")
elif day_of_week == 2:
	print("Waiting For Wednesday")
elif day_of_week == 3: 
	print("Thursday's Child")
elif day_of_week == 4:
	print("Friday I'm In Love")
elif day_of_week == 5: 
	print("Saturday Night’s Alright For Fighting") 
else:
	print("Sunday Bloody Sunday")
```

Python doesn't use switch statements like Javascript, so if you need to check several different conditions, just use an `if...elif...else` block.

## Comparisons in Python vs. Javascript

Many of the comparisons you'll see should look familiar. Python uses a double-equals (`==`) for value comparison, like Javascript. It also has `>`, `<`, `>=`, `<=` and `!=`. 

Unlike Javascript, Python has no triple-equals comparison operator. The `==` in Python just checks whether two objects have the same value; it does not do type coersion in the way that Javascript does. This leads to some behavior that you might not expect coming from Javascript:

```python
2 == '2' # False, but is true in Javascript
'' == False # False, but is true in Javascript
1 == True # True, like in Javascript
0 == False # True, like in Javascript
```

Note also that the `==` operator behaves differently than Javascript on more complex data types:

```python
{'foo': 'bar', 'baz': 42} == {'foo': 'bar', 'baz': 42} # True in Python, false in Javascript!
[1, 2, 3] == [1, 2, 3] # True in Python, false in Javascript!
[1,[2,3],{'b': 'foo', 'a': 'bar'}] == [1, [2,3], {'a': 'bar', 'b': 'foo'}] # True in Python, false in Javascript! Notice the order of key-value pairs in the dictionary. Cool, right?
```

If you need to check whether two objects in Python are really the same, and don't just have the same value, you can use the `is` operator instead of `==`:

```python
arr1 = [1, 2, 3]
arr1 == [1, 2, 3] # True
arr1 is [1, 2, 3] # False, these objects have different references
arr2 = arr1
arr2 == [1, 2, 3] # True
arr2 is [1, 2, 3] # False
arr2 is arr1 # True
```

Make sure you only use `is` when you want to check that the two objects have the same reference! Since everything in Python is an object, `is` can behave somewhat unexpectedly if you're not careful:

```python
a = 2 ** 10 # a is 1024
b = 2 ** 10 # so is b
a == b # True
a is b # False...???
id(a) # Should be some number...
id(b) # Which is different than this one!
```

## truthy vs falsy

Note that even though expressions such as `'' == False` return `False` in Python, an empty string can still be considered falsy in the following sense: 

```python
print('Truthy' if '' else 'Falsy') # prints 'Falsy'
```

Just like in Javascript, certain expressions will evaluate to False if they're part of an if statement.

**Exercise** Find six expressions (`exp`) such that `print('Truthy' if exp else 'Falsy')` prints `'Falsy'`.

## not, and, or

In Javascript, when operating on booleans we used `&&` to represent and, `||` to represent or, and `!` to represent not.

In Python, things are even more straightforward: we use `and` to represent and, `or` to represent or, and `not` to represent not.

**Exercise** What is stored in each of the following variables?

```python
a = 1 if not True else 0
b = 1 if 1 and '' or not False else 0
c = False or 0 or 6
```

# Iteration

Let's talk about loops. Like Javascript, Python has `for` and `while` loops. The syntax looks like this:

```python
numbers = [3, 8, 4, 5, 10]
for num in numbers:
	print(num)
	
# should print:
# 3
# 8
# 4
# 5
# 10
```

Notice that a `for` loop in Python is closer to a `forEach` in Javascript, in the sense that the variable `num` corresponds to the element in the list, not the index. If you need the index as well, you can use the `enumerate` function:

```python
numbers = [3, 8, 4, 5, 10]
for idx, num in enumerate(numbers):
	print(idx, num)
	
# should print:
# 0 3
# 1 8
# 2 4
# 3 5
# 4 10
```

The syntax for while loops is similar.

## Iteration with `range`

In the examples above, we used a `for` loop to iterate through a list. But you can also iterate through a dictionary, a set, a tuple, or even a custom iterator that you create! (Not yet, though... you'll need to learn about classes first.)

Also, very often you'll see `for` loops used in conjunction with the `range` function, which takes in either a stop value, or a start, stop, and step, and returns an object representing a sequence. The `range` object isn't a list (in python 3, it is a list in python 2.x), though you can easily turn it into one:

```python
r1 = range(5)
r2 = range(3, 11)
r3 = range(3, 11, 3)

l1 = list(r1) # [0, 1, 2, 3, 4]
l2 = list(r2) # [3, 4, 5, 6, 7, 8, 9, 10]
l3 = list(r3) # [3, 6, 9]
```

You can pass a `range` object into a `for` loop just as you would a list:

```python
for num in range(4):
	print(num)
	
# should print:
# 0
# 1
# 2
# 3
```

## List comprehensions

Say you want to use one list to create a new list. One way to do this would be to create an empty list and add to it inside of a for loop:

```python
doubles = []
for num in [3, 8, 4, 5, 10]:
	doubles.append(2 * num)
	
# doubles should now be [6, 16, 8, 10, 20]
```

If we were writing Javascript code, this would be a perfect use-case to refactor using the `.map` array method. In Python, a common refactor is to use what's called a [list comprehension](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions).

The syntax for a list expression looks like a one-line for loop inside of list brackets:

```python
doubles = [2 * num for num in [3, 8, 4, 5, 10]]

# doubles should still be [6, 16, 8, 10, 20]
```

We can use list comprehensions as a replacement for Javascript's `map` iterator. We can also use them as a replacement for `filter`!

```python
evens = [num for num in [3, 8, 4, 5, 10] if num % 2 == 0]

# evens should be [8, 4, 10]
```

As you might expect, we can also combine these two operations to get a sort of map-and-filter functionality in a single line:

```python
doubled_evens = [2 * num for num in [3, 8, 4, 5, 10] if num % 2 == 0]

# doubled_evens should be [16, 8, 20]
```

Ready to learn more about lists, tuples, dictionaries and sets? [Read on](https://github.com/gSchool/python-curriculum/blob/master/Unit-01/03-data_structures.md)!
