# Testing Angular and Node

Testing is an important part of any application, but it becomes increasingly important when the complexity of our application gets higher.

## Testing Setup

The testing lesson focuses on testing a todo app with auth.  You can look at the [Example Auth Application](./examples/auth_example) for starter code.  An implementation of a todo app with auth and testing is [here](./examples/auth_todos_and_testing).

#### System Dependencies

Protactor requries a newer version of NodeJS to function as well as a recent install of java.  In your terminal, type the following:

```
java -version
```

The result should be something like the following:

```
java version "1.8.0_11"
Java(TM) SE Runtime Environment (build 1.8.0_11-b12)
Java HotSpot(TM) 64-Bit Server VM (build 25.11-b03, mixed mode)
```

If you see a number less than 1.8, you need to install the java jdk.  Go to the [oracle website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) to download and install the latest version of the jdk.

Also, type the following in your terminal:

```
node --version
```

You should see at least `4.2`.  If you do not, go to the [NodeJS](https://nodejs.org/en/) website to get the latest version and install it.  You should see an option to download either 4.2.x or 5.1.x.  You can stick with 4.2.x for now since some programs don't support node 5 yet.

#### Tools For the Job

We are going to be making two types of tests, server side request specs with [jasmine](http://jasmine.github.io/2.0/introduction.html) and [supertest](https://github.com/visionmedia/supertest) and end to end integration tests with [protractor](https://angular.github.io/protractor/#/). 

#### Folder Structure

The first thing we'll want to do is set up a top level test folder. In the root of your project, make the `test` directory.  Inside of `test`, we want to separate `server` tests and `integration` tests, so make a folder for each.  This can be accomplished with the following commands in the root of your project:

```
mkdir -p test/server
mkdir -p test/integration
```

#### NPM Dependencies

Next, let's install the npm packages for the frameworks we'll be using.  The `--save-dev` flag tells npm to store the dependencies in a different group in our `package.json` file.


```
npm install --save-dev jasmine supertest protractor webdriver-manager
```

**QUESTION**: Why do we want to install our testing frameworks as developer dependencies?  Why is there a distinction?

#### NPM Scripts - Protractor

NPM scripts in `package.json` are a useful tool for making our lives as developers easier.  We can make shortcuts for tasks that we do often, like run tests.  In the [Example Auth Application](./examples/auth_example) code, look in the `package.json` file.  Under scripts, there is already a property for test.  

**Question**: What will happen when you run `npm test` in your terminal?  If you're not sure, try it and see what happens.

Let's create a new script for running protractor.  In the `package.json`, add the following:

```json
    "protractor": "./node_modules/protractor/bin/protractor ./test/protractor-conf.js"
```

To run protractor, make sure your node server is running first.  Type `nodemon` in the terminal, then in a separte terminal tab, type `npm run protractor`.  The script is using the version of protractor that we have npm installed into our node_modules.  This is a good practice because  the user is guarenteed to have protractor installed in this directory as long as they have run `npm install`

At this point, the `npm run protractor` command will give you an error about protractor-conf.js not exiting.  Create the file:


**test/protractor-conf.js**:

```
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'integration/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
```

The important part of the config here is that we are telling protractor to look in the `integration` directory for all files ending in .js.  Those are the test specs.

#### NPM Scripts - pre

Protractor is based on [selenium](http://www.seleniumhq.org/).  We want to make sure the latest version of selenium is installed whenever protractor is run.  To do that, we'll add another script named `preprotractor`.  Since the script has the same name as protractor plus a pre in front, npm knows to run the `preprotractor` script before the `protractor` script automatically.  Your `preprotractor` script looks like this:

```
"preprotractor": "./node_modules/webdriver-manager/bin/webdriver-manager update",
```

Now do `npm run protractor` again from the terminal.  Notice that the selenium webdriver gets updated first because of the `preprotractor` script.

#### Simple Protractor Test

Now that we have all the setup done for protractor, let's write a test.  As you may have noticed from the `protractor-conf.js` file, protractor uses `jasmine` as a testing framework, so your protractor tests have access to all the jasmine methods you are used to.

Add a file in `test/integration` called `login.js`.  In the file, add the following code:

```js
'use strict';

describe('Users', function() {
  describe('login', function() {
    it('should have username and password form', function() {
      browser.get('/login');
      var emailInput = element(by.id('username'));
      var passwordInput = element(by.id('password'));

      expect(emailInput.isPresent()).toBeTruthy();
      expect(passwordInput.isPresent()).toBeTruthy();
    });
  });
});
```

Make sure your server is running, `nodemon`.  Then in a separate tab, run `npm run protractor`.  If everything went well, you should have a passing test!

**EXERCISE**: Write a test that verifies the login page also has a link for signup on the page.  HINT, you may have to add an id to the link.

**EXERCISE**: Write a test that validates an existing user in the db can login by going to `/login` an then filling in the form.

**EXERCISE**: Write a test that validates an existing user in the db who supplies the wrong password at `/login` will not be logged in and will see an error message.

#### Server Side Testing Setup

Now that we have protractor up and running, lets set up some server side request specs.  First, add a jasmine.json file to the test directory.

**test/jasmine.json**

```json
{
    "spec_dir": "test/server",
    "spec_files": [
      "**/*[sS]pec.js"
    ],
    "helpers": [
      "helpers/**/*.js"
    ]
}
```

#### NPM Test Script

Next we want to update `npm test` command to run our server side tests.  In a perfect world, our test script would be as easy as something like this:

```
"test": "./node_modules/jasmine/bin/jasmine.js",
```

However, there are a few problems with that.  Jasmine by default looks in the `spec/support` directory for `jasmine.json`.  But you can override this behavior by providing jasmine with an environment variable telling it where to look for `jasmine.json`.  We are going to specify that environment variable in our test script:

```
"test": "JASMINE_CONFIG_PATH=test/jasmine.json ./node_modules/jasmine/bin/jasmine.js",
```

That gets us most of the way towards getting jasmine up and running. We have one other problem.  It would be nice to have a test database that the tests can use which is separate from our development database.  Let's achieve this by adding a line of code to `models/index.js`:

```
var databaseName = process.env.AUTH_DB_NAME || "angular_auth";
mongoose.connect("mongodb://localhost/" + databaseName);
```

Now our node app uses the environment variable `AUTH_DB_NAME` for the database name if the environment variable is defined.  If it is not defined, we fall back to the original database name of `angular_auth`.

Now we have to specify the `AUTH_DB_NAME` environment variable in our test script as well:

```
"test": "JASMINE_CONFIG_PATH=test/jasmine.json AUTH_DB_NAME=angular_auth_test ./node_modules/jasmine/bin/jasmine.js",
```

Now, add a file in the `test/server` folder called `users-spec.js`.  Add the following code to get our inital test setup:

```js
var app = require('../../server/app')
var db = require('../../server/models');
var request = require('supertest')(app)


describe("users", function() {
  describe("signup", function() {
    it("should return 400 if there is no username", function(done) {
      request.post('/api/users/signup')
        .set('x-requested-with', 'XMLHttpRequest')
        .send({password: "testing"})
        .expect(400)
        .end(function(err, res) {
          if (err) return done.fail(err);
          done();
        });
    });
  });
});
```

Try running `npm test`.  What happens?  What error are you getting?

#### Separating the App From Listening

There is an error because our `app.js` sets up the express app and also starts listening on a port.  For testing, it would be nice if those two things were separate.  Let's achieve that by creating a directory called `server/bin`.  In the directory, add a file called `www`.  In `www`, add the following:

```js
var app = require('../app');

app.listen(3000, function() {
  console.log("listening on 3000");
});
```

Now in `server/app.js`, remove the code for listening and add the following to the end of `server/app.js`:

```
module.exports = app;
```

Finally, we have to update package.json to tell it how to start the server.

**package.json**:

```
"main": "server/bin/www",
```

Now the app and the listening logic are separate!  Run `npm test` again.  You should see a passing test!

**EXERCISES**:  Add more protractor integration tests and supertest request specs.  The goal is to get total coverage on the api, and a reasonable amount of certainty that your front end behaves properly.

