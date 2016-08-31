# node-http-file-server
In this exercise, you'll use the `fs` module and the `http` module to create an HTTP file server.

## Setup
- Fork and clone this repository. A skeleton server has been defined for you in [`server.js`](server.js) and should serve as the basis for your application. 
- Start your server with the command `node server.js`.

## Instructions
- Open a browser to [localhost:8000](http://localhost:8000/).
- You should see the greeting, "Hello, World!"
- Add code inside of `handleRequest` that will display the phrase "I can change the response."
- Open a browser to [localhost:8000](http://localhost:8000/) and view the updated text.
- Add a file named `about.html` to your repository.
- Add inside of `about.html` the text "I'm a response inside of a file!"
- Require the `fs` module inside of `server.js`
- Use the `fs` module to serve `about.html` when visiting `http://localhost:8000/about.html`.
- Repeat what you did with `about.html` and do the same for a file named `faq.html`.

## Bonus
- Add an anchor tags that connect both pages. `about.html`, for instance, should include a link to `faq.html` and vice versa.
- Create a third page named `index.html`. This page should include anchor tags to `about.html` and `faq.html`.
- Serve `index.html` when visiting `http://localhost:1337`
- Add CSS to all pages.
- Create a `404 Not Found` page for any route that's not `/`, `/about.html`, or `/faq.html`. You could use an appropriate image from [cat status codes](https://http.cat/).
- Refactor your code to find a general way to handle requests for all files in this directory. For instance, remove the routes from `server.js` and place them in a file named `routes.js`.
