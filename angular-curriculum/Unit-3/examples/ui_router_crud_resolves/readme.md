# Resolves w/ ngRoute and ngResource

This simple application uses MongoDB and ngResource to create a very simple interface for a fullstack CRUD application. In addition to ngRoute and ngResource, this example uses the resolve feature of ngRoute.

Resolve lets us wait until some resources are available to render the controller. In our case -- we wait for our server data (Todos) to return from the server before instantiating our controllers, and rendering the page. 

## Setup

```
npm install
```

Additionally, you'll need an instance of mongodb running:

```
mongod
```

If you don't have Mongo installed you can get up and running fast enough:

```
brew install mongodb
mkdir -p /data/db
mongod
```

## Run it

```
nodemon
```