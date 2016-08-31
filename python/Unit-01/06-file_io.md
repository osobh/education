# File IO 

In node we have the `fs` module which allows us access to the file system. In python we can do something very similar!

#### Reading files

From the docs - `open()` returns a file object, and is most commonly used with two arguments: `open(filename, mode)`. The mode argument is optional; 'r' will be assumed if it’s omitted. What do we mean by mode? That means either

- `r` - opens only for reading
- `r+` - opens the file for both reading and writing. 
- `a` - opens the file for appending; any data written to the file is automatically added to the end.
- `w` - opens only for writing (an existing file with the same name will be erased)

To read a file's contents we use the `read()` or `readline()` methods. f.readline() reads a single line from the file; a newline character (\n) is left at the end of the string, and is only omitted on the last line of the file if the file doesn’t end in a newline. This makes the return value unambiguous; if f.readline() returns an empty string, the end of the file has been reached, while a blank line is represented by '\n', a string containing only a single newline.

#### Writing to files

f.write(string) writes the contents of string to the file, returning the number of characters written.

When you’re done with a file, call f.close() to close it and free up any system resources taken up by the open file. After calling f.close(), attempts to use the file object will automatically fail.

#### With block

It is good practice to use the with keyword when dealing with file objects. This has the advantage that the file is properly closed after its suite finishes, even if an exception is raised on the way. It is also much shorter than writing equivalent try-finally blocks:

```py
with open('testfile.txt', 'r') as file:
    read_data = file.read()
file.closed # True
```

You can read more about file IO [here](https://docs.python.org/3/tutorial/inputoutput.html)

#### Practice

Work through - [http://learnpythonthehardway.org/book/ex16.html](http://learnpythonthehardway.org/book/ex16.html)

## Web Scraping

#### Introduction

Sometimes we are not able to get the data we want from an API either because a provider does not give/grant us that data or because the API does not exist publically! To get around this we often resort to web scraping or pulling data from HTML pages. While this is a bit of a grey area, it is quite common and websites like Craigslist that do not have public facing APIs are commonly scraped.

To get started with web scraping, let's use the popular BeautifulSoup module. We can see more at their site [https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/). Do remember though, that this is ONLY a tool for HTML parsing, so we need to use a different tool like `urllib` or `curl` to retrieve the HTML. Also note that we can not trigger events on webpages with BeautifulSoup, for that we need to use a crawler like MechanicalSoup (Mechanize is popular, but not supported in Python 3 for now...)

### Exercise

Complete the File IO + Web Scraping Exercise.