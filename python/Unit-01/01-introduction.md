# Introduction

Welcome to Python for Javascript Developers! In this course, we'll cover the basics of Python and Flask, a microframework used to build web applications that's similar to Express in Node.

Since you're already a Javascript guru, we'll be referencing Javascript throughout the material here. Having one language under your belt should give you a familiarity with many of the concepts here, though each language has its own share of idiosyncrasies. 

But enough chit-chat. Let's get started.

## Installation

You should have Python already installed on your machine, but it's likely Python 2. We'll be using Python 3 throughout, so if you don't have it installed, head over to the [Python website](https://www.python.org/downloads/) to download the latest version.

Once it's installed, you should be able to type `python3` in the terminal to enter a Python REPL. Let's write our first line of Python!

```python
>>> print("Python is sweet!")
Python is sweet!
```

Sweet, right?

### IPython

The built-in REPL for Python is nice, but there are better tools out there. One of them is IPython. What's the difference between IPython and the built-in REPL? [Ask the internet!](https://www.quora.com/What-is-the-difference-between-IPython-and-Python)

To install IPython, we're going to use pip, Python's package manager. In the terminal, run

```bash
pip3 install ipython
```

If all goes well, you should be able to run `ipython` in the terminal. Now you're ready to do some coding.

## Some Familiar Datatypes

In Javascript, we learned that there are six primitive data types: string, number, boolean, null, undefined, and symbol (new as of ES2015). 

Python has a number of built-in data types which are similar to Javascript's primitives. These include

- Strings (`str`)
- Booleans (`bool`)
- None (`NoneType`)
- There's no Number data type, but there are three data types involving numbers: Integers (`int`), Floats (`float`), and Complex Numbers (`complex` - Math FTW!!!)

You can think of `None` as Python's analogue of Javascript's `null`.

### Comparing Data Types in Python and Javascript

Even though Javascript and Python both have strings, booleans, numbers, and null values, they don't behave in exactly the same way. We won't say much about these types in general (you can always check the docs), but here are some important differences worth highlighting:

1. Javascript is much looser than Python when it comes to combining values of different types:

	```javascript
	// Want to concatenate a string with a number? 
	// No Problem!
	> "hi" + 5
	'hi5' 
	> "4" + 5
	'45'
	```
	
	Try the same thing in Python, and you'll quickly get shot down:
	
	```python
	>>> "hi" + 5
	Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: Can't convert 'int' object to str implicitly
   ```
   
   Python won't implicitly do any type conversion for this type of operation. You need to tell it explicitly whether "+" refers to addition or string concatenation.
   
   ```python
   >>> "hi" + str(5)
   'hi5'
   ```
2. In both Javascript and Python, you can treat Booleans as though they were numbers: `true`/`True` has a value of 1, `false`/`False` has a value of 0.

3. Strings in both languages are immutable. However, trying to reassign a character in a string fails silently in Javascript; in Python, it throws an error:

	```python
	>>> "hello"[0] = "j"
	Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   TypeError: 'str' object does not support item assignment
   ```
   
4. Here's a quick comparison of a few common string methods implemented in the two languages:

	| Method Description | Javascript | Python |
	|----|----|----|
	| Return the length of the string | str.length | len(str) |
	| Uppercase the string | str.toUpperCase() | str.upper() |
	| Lowercase the string | str.toLowerCase() | str.lower() |
	
5. There list of methods for strings, numbers, etc is not identical between these two languages. To see the methods available on a particular instance in Python, call the `dir` function on it:

	```python
	>>> dir("hi")
	['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
	```
	
	Want to know what any of these do? You know the drill: play around with them, or check the docs!
	
### What About Arrays?

We haven't yet mentioned the analogues of Javascript's arrays, objects, or functions. We'll cover most of the details in later sections, but here's a quick overview for now.

In Python, the analogue of an array is called a list. Lists are very similar to arrays in javascript: they're just ordered collections of data, wrapped in square brackets. `[1, 2, "hi", "bye"]` is a valid list in Python, just as it's a valid array in Javascript.

If you think of an object in Javascript as just a collection of key-value pairs (ignoring the concept of a prototype), the analogue in Python is called a dictionary. `{1: "hi", a: "foo"}` is a valid object in Javascript, and a valid dictionary in Python. 

For more on these data types (including differences between Python and Javascript!), check out [Section 3](https://github.com/gSchool/python-curriculum/blob/master/Unit-01/03-data_structures.md) of this unit. If you'd like to dig into functions in Python, head over to [Section 4](https://github.com/gSchool/python-curriculum/blob/master/Unit-01/04-functions.md).

**Exercise** Take a look at the Python docs and read about three other data types that we haven't discussed. Then write down a sentence or two explaining each one in your own words, along with a simple example of its use. [This](https://docs.python.org/3/library/stdtypes.html) might be a helpful starting point. So might [this](https://docs.python.org/3/library/datatypes.html).

## Variables

Declaring variables in Python is easy:

```python
my_first_variable = "Hello, World!"
>>> my_first_variable
'Hello, World!'
```

Notice the absence of a keyword like `var`, `let`, or `const` before the declaration. Just name the variable, assign it a value, and you're good to go. 

Like Javascript, Python is dynamically typed: there's no need to declare what type of data you're storing into the variable name.

```python
a = 2 # totally cool
a = "hi" # still cool!
```

Also like Javascript, there are a few conventions and rules around variable names in Python:

1. Variable names *must* start with a letter or an underscore. Unlike Javascript, variable names cannot start with a dollar sign:

	```python
	$test = "i love jquery"
	File "<stdin>", line 1
     $test = "i love jquery"
     ^
   SyntaxError: invalid syntax
	```
2. After the first character, subsequent characters can be numbers.
3. Variable names are case sensitive!
4. By convention, variable names are typically written in snake_case, *not* camelCase. Coming from Javascript, this will probably take some getting used to.

Now that we know about variables in Python, let's talk quickly about string interpolation. In ES2015, we saw that we could interpolate using the following syntax:

```javascript
var name = "Matt"
var favColor = "Blue"
console.log(`Hi, my name is ${name} and my favorite color is ${favColor}!`)
```

In Python, we can use the `format` method on strings to do the same thing:

```python
print("Hi, my name is {name} and my favorite color is {fav_color}".format(name="Matt",fav_color="blue"))
```

The format method is much more powerful than this, however. Check out the [docs](https://docs.python.org/3/library/string.html#format-string-syntax) to read about all the stuff it can do!

Now that we know about the basics, let's move on to some simple [control flow and iteration](https://github.com/gSchool/python-curriculum/blob/master/Unit-01/02-control_flow_iterators.md).
