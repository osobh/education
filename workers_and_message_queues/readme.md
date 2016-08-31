# Workers and Message Queues

### Objectives
* Write a worker that processes enqueued tasks
* Set up a message queueing server to enqueue tasks
* Create an express server that can enqueue messages
* Send text messages with Twilio


## What are workers?

Workers are a pattern in service-based applications that allow us to factor out diverse workloads into different processes. What that means in plain english is that any work that doesn't necessarily have to be done by the webserver should be done by a different script. This work might include sending email or text messages, making an API request to gather and cache data, clearing a server cache, or scraping a website.

A common task is sending emails based on user actions. When a user changes their password or creates a new order, often we want to send an email. Without a worker we would have to create that email on the server, initiate a network request to send it, and wait for a message back indicating success. None of that has anything to do with responding to the user's request. The way that we would handle that with a worker is by communicating with another server (such as a database server) to request that another process handle that work. This is called _enqueueing a task_, or _sending a message_. This allows our app to scale it's workload properly- if sending email is slowing down the webserver, but the webserver could otherwise handle lots of HTTP requests, waiting around to send email isn't the best way for our server to spend it's time.

Take a moment and read these articles:  
[Processes](http://12factor.net/processes)
[Process Scaling](http://12factor.net/concurrency)
[Backing Services](http://12factor.net/backing-services)

Now check your understanding of these Key Terms:

- Define "Process" in terms of a 12 factor app, give 3 examples of a process.
- Define "Backing Service", give 3 examples of a backing service.

## App Setup

### Adding Backing Services
To add a backing service, you'll need an environment variable containing a URI that points to the service. You've added backing services before by setting `DATABASE_URL` in your `.env` file. You'll need to set up a `REDIS_URL` and point it at your local redis server. Your server's URL should be `redis://localhost:6379/`


### Installing Redis
Run this in your `~/Downloads` folder:

```
wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make
```

Once Redis is successfully made, run `sudo make test`, which will test Redis to make sure it works properly. The use of sudo is so that an external process is able to test your Redis process.

**To set up the tools so that you can run them from terminal** run `make install`.

### Redis Operations

[This short tutorial](http://try.redis.io/) is great for getting started with Redis. Run through it to understand how to use Redis commands.

### Setting up a queue

First, start your server by running `redis-server` in a terminal window. Keep this terminal tab open, and open a new one.

Open a Redis client in a new terminal by running `redis-cli`.


### Adding Redis to your Express server

In the `server` directory, Redis is set up for you. Ensure that you have the following in your `.env` file.

```
DATABASE_URL=postgres://localhost:5432/reminders
REDIS_URL=redis://localhost:6379
```

In the `db/redis.js` file, the connection is instantiated and configured, similar to `knex.js`. This will export an instance of a redis client.


### Running a worker process

Running `heroku local worker` should start your worker process.

### Scheduling a worker

Read this [crontab how to](http://www.thesitewizard.com/general/set-cron-job.shtml) and set up a job that runs at 9AM, Noon, 6PM, and 10PM.

### Deploying to Heroku with Redis as a Backing Service

Take a look at [Heroku's documentation on this.](https://devcenter.heroku.com/articles/heroku-redis)

### Twilio
You'll need to make sure `.env` has a `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` and `TWILIO_REMINDER_NUMBER=+16674013836`
