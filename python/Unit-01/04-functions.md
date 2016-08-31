# Functions in Python

We've come surprisingly far in our Python knowledge without writing any functions. But without a solid understanding of functions, your Python skills will plateau fairly quickly. So let's dig into functions.

## Function Syntax

Here's our first function in Python:

```python
def my_first_function():
	return "Wahoo!"
```

To begin writing a function, use the keyword `def` (because you're `def`ining the function). Unlike a language like Ruby, you don't need to tell Python when a function ends; the indentation makes it clear.

As with our control flow statements, you need to use a colon to end the line defining your function. Also, as with Javascript, make sure you use the `return` keyword in conjunction with the value you want the function to output.

**Exercise** If you don't `return` anything out of your function, what will it return?

## Functions with Arguments

Our first function was pretty lame. Let's get some more practice by creating functions that accept arguments:

```python
def multiply(factor1, factor2):
	return factor1 * factor2

def divide(dividend, divisor): 
	return dividend / divisor
	
multiply(3, 8) # 24
multiply(8, 3) # 24
divide(8, 3) # 2.6666666666666665
divide(3, 8) # 0.375	
```

As you can see, this works as it does in Javascript. When you define a function with arguments, you can then invoke the function and pass in values for those arguments. In general, the order matters: the first value you pass in corresponds to the first argument in the function definition, the second value you pass in corresponds to the second argument, and so on.

**Exercise** In Javascript, if you pass in more or fewer arguments than are in the function definition, Javascript will still try to run the code inside of the function with the arguments you've provided. What happens in Python if you supply too many arguments? Too few?

### Default Values and Named Arguments

As with Javacript (as of ES2015), you can also supply default values for any of your arguments:

```python
def divide(dividend, divisor=1): 
	return dividend / divisor
	
divide(4) # 4.0
divide(4, 2) # 2.0
```

You can also name the arguments when you invoke the function. In this case, the names you use must match the names in the function definition:

```python
divide(dividend = 4, divisor = 2) # 2.0
divide(divisor = 2, dividend = 4) # 2.0
divide(dividend = 4, foo = 2) # TypeError: divide() got an unexpected keyword argument 'foo'
```

See what we there? In the second line, we swapped the order of the arguments! In Python, when you use named arguments, you can pass them into the function in any order you like.

An important feature of using named arguments is that once you name one argument, you must name every subsequent argument:

```python
divide(3, divisor=2) # 1.5
divide(dividend = 3, 2) # SyntaxError: invalid syntax
```

### Unknown Number of Arguments

What if you don't know how many arguments will get passed into your function? Don't worry, Python's got you covered here too. 

If you have an unknown number of unnamed arguments, you can refer to those arguments as a tuple by using the `*` character in your function definition:

```python
def unknown_args(*args):
	print("Number of arguments you passed in: {}".format(len(args)))
	for val in args:
		print(val)

unknown_args("hi", "bye")

# should print:
# Number of arguments passed in: 2
# hi
# bye

unknown_args(["hi", "bye"])

# should print:
# Number of arguments passed in: 1
# ['hi', 'bye']
```

To pass in an known number of named arguments, you can use `**`:

```python
def all_args(*args, **kwargs):
	print(args, kwargs)

all_args(1, 2, 3, name='Matt', job='Instructor')

# should print: 
# (1, 2, 3) {'name': 'Matt', 'job': 'Instructor'}
```

## Some Common Keywords

When you're reading Python documentation (or solving Code Wars problems!), there are a few keywords you may come across. We won't cover all of them here -- you can find a more exhaustive list [here](http://learnpythonthehardway.org/book/ex37.html) -- but let's highlight a few.

### pass

The `pass` keyword basically function as a no-op. It doesn't do anything. You can see some examples of when this might be useful in the [docs](https://docs.python.org/3/tutorial/controlflow.html); you may want to use it, for example, if you want to put some placeholder code in a function that you'll plan to come back to later.

```python
def complicated_function():
	pass
```

### try/except

Similar to a `try/catch` in Javascript, a `try/except` block in Python lets you try to handle potential errors in your application. For example, we could rewrite our `multiply` function from earlier to handle Type Errors as follows:

```python
def multiply(factor1, factor2):
	try:
		return factor1 * factor2
	except TypeError:
		return "Oops, I don't understand what you're trying to do. Check your inputs and try again?"
		
multiply(3,4) # 12
multiply(3,'hi') # 'hihihi'
multiply('hi','hi') # "Oops, I don't understand what you're trying to do. Check your inputs and try again?"
```

### global

You may occasionally see the global keyword in Python code. As you might expect, this word is used to pass a variable from a function's inner scope into the outer scope:

```python
function dont_do_this():
	global x
	y = 2
	x = 3

x # NameError: name 'x' is not defined
y # NameError: name 'y' is not defined

dont_do_this()

x # 3
y # NameError: name 'y' is not defined
```

As you can imagine, this is generally frowned upon, for the same reason that declaring variables without the `var` keyword is frowned upon in Javascript: for a number of reasons, we shouldn't be polluting our global scope!

## Scope in Python

While we're on the subject, let's chat briefly about scope. As you can see from the above example, variables that you declare inside of functions in Python are not accessible from outside of the function's scope. You can override this behavior by using the `global` keyword, but you should really try to avoid doing this.

As with Javascript, functions in Python can be passed around inside of other functions, be returned by other functions, etc. This means that we can have a chains of scope, just as in Javascript. Take a look at this example:

```python
def outer():
	msg1 = "I live in the outer function!"
	def inner():
		msg2 = "I live in the inner function!"
		print(msg1, "I'm inside of inner now!")
		def superInner():
			global gross
			gross = "Don't do this."
			msg3 = "woah, so much nesting."
			print(msg3)
			print(msg2, "From the depths...")
			print(msg1, "From the depths...")
		return superInner
	return inner
```

Invoke this function a few times and see what happens. Notice that if you call `outer()()()`, you should have access to `gross`. In other words, `global` doesn't just place `gross` up one level in the scope chain; instead, it bubbles up all the way to the top. `msg1`, `msg2`, and `msg3`, however, should be unavailable.

## What's Up With Hoisting?

Now that we know about variables and functions, it's natural to ask about hoisting. In Javascript, we saw that function and variable declarations were always hoisted to the top of their scope. Is the same true in Python? Let's see:

**Example 1**

```python
print(x)
x = 2

# File "playground.py", line 1, in <module>
#   print(x)
# NameError: name 'x' is not defined
```

**Example 2**

```python
greet()

def greet():
	print('hi!')

# File "playground.py", line 4, in <module>
#     greet()
# NameError: name 'greet' is not defined
```

Based on these examples, it seems like hoisting isn't a thing in Python. But let's not be too hasty. Here are some examples involving function scope:

**Example 3**

```python
def test1():
	print(x)

test1()
# NameError: name 'x' is not defined
```

This makes total sense; after all, we haven't declared a variable called x anywhere.

The code below should also give a `NameError`, right?

**Example 4**

```python
def test2():
	print(x)
	x = 2	

test2()
```	

You may be surprised to see that when you run _this_ code, you don't get a `NameError`! Instead you should see: `UnboundLocalError: local variable 'x' referenced before assignment`.

That's weird. What if we try the same thing with an inner function?

**Example 5**

```python
def test3():
	greet()
	def greet():
		print('hi!')
		
test3()

# UnboundLocalError: local variable 'greet' referenced before assignment
```

What's going on here? In both of these examples, Python seems to know that the variable exists because it isn't throwing a name error.

It's clear that the Python interpreter knows that these inner variables exist, so something akin to hoisting is going on. The challenge with Python is that, unlike Javascript, variables can't be declared without being assigned. But if you understand Javascript hoisting, you should be able to explain conceptually why some of these examples yield different types of errors.

For more on this behavior, check out [this blog post](http://foreigngods.com/blog/2013/09/14/26/python-exhibits-behavior-similar-to-javascripts-variable-hoisting/), and/or [this one](http://eli.thegreenplace.net/2011/05/15/understanding-unboundlocalerror-in-python).

## Closure

Since you can define a function inside another function, this means you can also create closures in Python, as in Javascript. One of the major differences, though, is that for the most part the inner functions that you define must be named; returning anonymous functions is not so straightforward.

Take a look at this example:

```python
def adder(num1):
	def innerAdder(num2):
		return num1+num2
	return innerAdder

adder(2)(6) # 8

addBy2 = adder(2)
addBy2(5) # 7

addBy5 = adder(5)
addBy5(5) # 10
```

Let's compare the definition of adder above to how it might look in Javascript:

```javascript
function adder(num1) {
    function innerAdder(num2) {
      return num1 + num2;
    }
    return innerAdder;
}
```

Of course, in Javascript we can return the inner function and define it in the same step:

```javascript
function adder(num1) {
	return function innerAdder(num2) {
		return num1 + num2;
	}
}
```

Unfortunately, in Python we can't do this: having a `return` and a `def` on the same line results in a syntax error.

So is there any way to refactor this code in Python? It turns out that the answer is yes, depending on the complexity of the inner function.

## lambda Functions

The solution to the problem outline above lies in the use of a lambda function. You can think of a lambda function in Python as analogous to a simple arrow function in Javascript. For example, in Javascript you might write 

```javascript
const double = x => 2 * x;
```

In Python, you can implement such a simple anonymous function as a lambda function:

```python
double = lambda x: 2 * x
```

Unlike arrow function in Javascript, however, lambda functions must involve only a single expression; multi-line lambdas aren't a thing. 

So, if your inner function is simple enough, you could write it as an anonymous (i.e. lambda) function, and return it on one line. In particular, we could refactor our `adder` example as follows:

```python
def adder(num1):
	return lambda num2: num1 + num2
```

### List comprehensions revisited

Now that you know about functions in Python, let's quickly return to list comprehensions. You can use a named function or a lambda to map over a list and create a new list. For example:

```python
def sign(num):
	if num > 0:
		return "Positive"
	elif num < 0:
		return "Negative"
	else:
		return 0
		
square = lambda x: x ** 2

arr = [-1, 4, 0, 2, -3]

[sign(num) for num in arr] # ['Negative', 'Positive', 0, 'Positive', 'Negative']
[square(num) for num in arr] # [1, 16, 0, 4, 9]
```

## Exercises

Now that you know the basics of Python syntax, it's time to practice writing code. Here's a list of Codewars problems; try to solve them all:

- [Sum of Positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)
- [Sorted Union](https://www.codewars.com/kata/5729c30961cecadc4f001878)
- [altERnaTIng cAsE <=> ALTerNAtiNG CaSe](https://www.codewars.com/kata/56efc695740d30f963000557)
- [Parts of a list](https://www.codewars.com/kata/56f3a1e899b386da78000732)
- [Nested List Depth](https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e)
- [Find the vowels](https://www.codewars.com/kata/5680781b6b7c2be860000036)

Bonus: [Squarefree Part of a Number](https://www.codewars.com/kata/567cd7da4b9255b96b000022)
