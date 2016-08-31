## File IO + Web Scraping

## Setup

First make sure dependencies are installed:

`pip3 install bs4`
`pip3 install ipython` (for easier debugging)

### Libraries

We will be using the following libraries today:

* [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) (HTML/XML parsing)
* [urllib](https://docs.python.org/3.0/library/urllib.request.html) (HTTP request library) or you can use curl

## Parsing - Counting Reviews

We're going to start by using BeautifulSoup to parse the contents on a single restaurant page on Yelp.

We will be working with the following Yelp page: [http://www.yelp.com/biz/fat-angel-san-francisco](http://www.yelp.com/biz/fat-angel-san-francisco). Our goal is to start using Python to count the number of 5 star reviews for Fat Angel and work our way up to printing out review information

1. We're going to start by downloading the contents of the [yelp page](http://www.yelp.com/biz/fat-angel-san-francisco) and saving into an html file.  You could `view page source` in chrome and copy and paste the source into an empty file, but that's pretty lame :( How can you download the contents of a webpage and save it to a file using the command line?

1. Next, create the actual Python file where we'll write our code.  Let's call it `review.py`

1. First things first, we need to get our HTML file into a BeautifulSoup object to parse. Use Python's file I/O capabilities to read in the HTML file as a single gigantic string of HTML.

2. Make a BeautifulSoup object with the string of HTML that you just read in.

    Now that we have our HTML file as a BeautifulSoup HTML object, we can begin to have some fun!  This will be easiest to do interactively in a python or ipython shell.
    
2. Try targeting specific elements in the BeautifulSoup HTML Object using CSS selector syntax. I'll leave it up to you to find the BeautifulSoup method that you need to use! To get some practice targeting elements using BeautifulSoup, write code to print out the following:

    * The page's title
    * The restaraunt's price(how many `$`'s)
    * The restaurant's address
    * The restaurant's hours(for every day of the week, not just one!)
    
3. Write a function called `extract_content` which extracts the first review (grab everything contained within the `<li>`). _HINT: Use the [Chrome Web inspector](https://developer.chrome.com/devtools) to find out how to navigate and select the review_. This will give you an idea of where to start with your web scraping. 

4. Now that we have extracted one review, let's structure the information contained within. Create a `Review` class where each instance contains the:
 * Date of review
 * Number of stars
 * Username of the review author
 * Text content of review


### Next Steps

1. Write an instance method `is_five_star` on the Review class that returns whether or not the review is a 5 star review.

2. Now that we have structured a single review, write code to turn every review in the HTML file (first page of reviews only) into instances of the `Review` class and store them in an array.

### End Goal

1. Write all of your results to a file called `data.txt` - you can use [this file](https://github.com/gSchool/python-curriculum/blob/master/Exercises/file_io_web_scraping/data.txt) as a reference for what it should look like.

1. Write only the five star results to a file called `fivestar.txt` - you can use [this file](https://github.com/gSchool/python-curriculum/blob/master/Exercises/file_io_web_scraping/fivestar.txt) as a reference.
