# Modules

Until ES2015 (and it is still not completely supported), we did not have the concept of modules built into Javascript. In Python we have built in module support which means that we can import functionality from one script right to another:

```py
# import the built in os module 
import os
# from users.py import EVERYTHING attached to the users object
import users
# from users.py import EVERYTHING as its own object
from users import *
# from user.py import something called User (probably a class)
from user import User
```

For core modules, it is not a big deal to import the whole thing, but for external modules we should always strive to only import what we need. This means that importing `*` is usually not a good idea.

### __name__ and __main__

Very commonly in python modules you will see this line of code: `if __name__ == '__main__':`. What does it mean? This trick exists in Python so that our Python files can act as either reusable modules, or as standalone programs. Let's take a look at an example:

Lets imagine we have a file called - `learn.py`

```py
# let's see what this __name__ thing is...
print("__name__ inside of learn.py is {}".format(__name__)) # we see that it is '__main__'

def main():
    pass

if __name__ == '__main__':
    main()
```

And a file called - `hello.py`

```py

print("__name__ inside of hello.py is {}".format(__name__))

def hello():
    print('hello!')
```

But what happens when we start importing other files? Let's change our learn.py to look like this:

```py

import hello # this runs ALL the code in hello.py including the print statement - look at what it prints out!

# let's see what this __name__ thing is...
print('__name__' inside of learn.py is {}).(__name__) # we see that it is '__main__'

def main():
    pass

if __name__ == '__main__':
    main()
```

When we are importing from another file, the value of __name__ changes to the actual file name and not '__main__'! So using this check is a really nice way of making sure we only run certain code when necessary. Sometimes there is code we only want to run when imported and vice versa. This is also a very good reason why we should wrap our main functionality inside of a function called `main` - here is a better refactor for `learn.py`:

```py
import hello as test

def main():
    test.hello()
    # or even test.main()

if __name__ == '__main__':
    main()
```

And here is `hello.py`

```py
def hello():
    print("hi!")

def main():
    print("hello from main!")

if __name__ == '__main__':
    main()
```

You can read more about modules [here](https://docs.python.org/3/reference/import.html) and [here](https://docs.python.org/3/tutorial/modules.html)

If you are still struggling with the `__name__ == '__main__'` check out [this](https://www.youtube.com/watch?v=sugvnHA7ElY) video or [this](http://stackoverflow.com/questions/419163/what-does-if-name-main-do) or [this](https://www.quora.com/Why-would-you-use-if-__name__-__main__) post

# Classes

Unlike JavaScript, we are now working in a language that has classes built in! Let's get started with our first class!

```py
class Animal():
    def bark(self):
        print "Woof!"

a = Animal()
a.bark()
```

#### Initializing instances

Notice from above, all of our methods must take in as a first parameter the value of `self`. Fortunately `self` is much easier to understand than `this`. Unless we are creating a class method, `self` will refer to the instance we are creating. Why do we HAVE to use self? You can read that [here](http://stackoverflow.com/questions/2709821/what-is-the-purpose-of-self-in-python)

```py
class Animal():
    def __init__(self)
```

#### Instance and class methods

In order to add instance methods, we simply define functions inside of our class and make sure our first argument is `self`. To define a class method we use the `@classmethod` decorator.

```py
class Animal():
    # this property can be accessed by BOTH the class and instance!
    count = 0
    animals = []

    def __init__(self,name):
        self.name = name
        # why is this different than animals above?
        self.data = []
        # here we reference the class because self is the instance
        Animal.count += 1
        # this line of code will not throw an error - but what might be wrong?
        # self.count += 1

    # don't worry too much about this @, it is called a decorator and we will discuss it more later
    @classmethod
    def display_count(self):
        # since we are using the classmethod decorator, self is Animal
        print("The number of animals are {}".format(self.count))

    @classmethod
    def who_am_i(self):
        # what do you think these will output?
        print(type(self))
        print(self) 

    def who_am_i_now(self):
        # what do you think these will output?
        print(type(self))
        print(self)

b = Animal('bob')
g = Animal('george')
b.animals.append(b)
g.animals.append(g)
b.data.append(b)
g.data.append(g)

b.animals # what is this?
b.data # is this different
Animal.display_count() # what should this display?
```

### Inheritance and super

In Python we can make a class inherit from another (we will see we can do even more later!) and use `super` to reduce duplication in our child instance methods:

```py
class Parent():
    def __init__(self,first_name,last_name,fav_color):
        self.first_name = first_name
        self.last_name = last_name
        self.fav_color = fav_color

    def full_name(self):
        return "Hi my name is {} {}".format(self.first_name, self.last_name)

# Inheritance....it's that easy!
class Child(Parent):
    def __init__(self,first_name,last_name,fav_color,new_prop):
        # How can we reduce all of this duplication!
        # self.first_name = first_name
        # self.last_name = last_name
        # self.fav_color = fav_color

        # we can use super()! (this is python3 specific code)
        super().__init__(first_name,last_name,fav_color)
        self.new_prop = new_prop

    def full_name(self):
        return super().full_name() + " and my new prop is {}".format(self.new_prop)

child = Child("a","b","c", "something new!")
print(child.full_name())
```

### Multiple Inheritance

In python we have ALSO the ability for one class to inherit from **Multiple** classes, which we call Multiple inheritance! This is quite powerful and gives us a great deal of flexibility when defining our classes!

```py

class Parent():

    def __init__(self,parent_name):
        self.parent_name = parent_name

    def hello(self):
        print("hello")

class Uncle():

    def __init__(self,uncle_name):
        self.uncle_name = uncle_name

    def hi(self):
        print("hi")

class Aunt():

    def __init__(self,aunt_name):
        self.aunt_name = aunt_name

    def hey(self):
        print("hey")

class Child(Parent,Uncle,Aunt):
    def __init__(self,name, parent_name='papa',uncle_name='uncle',aunt_name='aunt'):
        self.name = name
        # we can access ALL of these parent classes!
        # using super here is challenging because there is not 1 base class!
        Parent.__init__(self, parent_name)
        Uncle.__init__(self, uncle_name)
        Aunt.__init__(self, aunt_name)


child = Child('Child')
# check out everything our instance has! 
print(dir(child))
```

You can read more about multiple inheritance [here](http://www.python-course.eu/python3_multiple_inheritance.php) and super [here](https://docs.python.org/3/library/functions.html#super)

### Exercise

- Work through [http://learnpythonthehardway.org/book/ex40.html](http://learnpythonthehardway.org/book/ex40.html) to [http://learnpythonthehardway.org/book/ex44.html](http://learnpythonthehardway.org/book/ex44.html)

- Complete the Data Structures and Algorithms Exercises 
