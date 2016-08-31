# Building Flask APIs

So far, we've been using Flask similar to the way we used Express in Unit 2. In particular, using Jinja we've been able to write templates which are then compiled into HTML files on the server before being sent over to the client.

But as we saw with Angular, we don't always want the server to be responsible for rendering HTML. In a single-page application, we may just want our server to be responsible only for fetching and sending data between the client and the database. Instead of rendering HTML, then, we might want it to just send JSON back to the client.

We've seen how to do this using Express, but how can we do this in Flask? The simplest way to get started is by using a module called [Flask-RESTful](http://flask-restful-cn.readthedocs.io/en/0.3.5/index.html).

## Our First Flask-RESTful app

Let's create a new directory, `flask-api`. cd into it, create a new virtual environment, and run `pip install flask-restful`. (Note: we don't need to explicitly install Flask in this virtual environment, as it's a dependency for `flask-api`.)

Next, create an `api.py` file, and type the following into it:

```py
from flask import Flask
from flask_restful import Resource, Api

# Resource - base class from which all RESTful resources should inherit
# Api - main entry point for our application (see below)

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
	def get(self):
		return {'hello': 'world'}
		
api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
	app.run(debug=True)
```

Spin up your server and head over to `localhost:5000`, and you should get some JSON back. We've built our first Flask API!

It's worth pointing out that you can pass in multiple URLs to the `add_resource` method. For example, if you change the line in your above API from 

```py
api.add_resource(HelloWorld, '/')
```

to 

```py
api.add_resource(HelloWorld, '/', '/hello')
```

you should find that you get the same JSON back when you visit either `localhost:5000` or `localhost:5000/hello`.

## Our First Flask-RESTful app that isn't super lame

The API we just built is totally functional, but doesn't do a whole lot. Let's build an API to perform CRUD on a pirates resource.

Eventually we'll want our API to communicate with a database, but for now let's just use a list to hold our pirate instances.

Let's start by setting our Flask app along with a Pirate class and a few instances:

```py
from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Pirate:

  id = 1
  pirate_list = []
  
  def __init__(self, name=None, poison=None, accessory=None, image_url=None):
    self.name = name
    self.poison = poison
    self.accessory = accessory
    self.image_url = image_url
    self.id = Pirate.id
    Pirate.id += 1
    Pirate.pirate_list.append(self)

  @classmethod
  def find_by_id(cls, id):
    return next((pirate for pirate in Pirate.pirate_list if pirate.id == id), None)

Pirate('Blackbeard', 'Whiskey', 'Peg Leg', 'http://vignette2.wikia.nocookie.net/disney/images/d/d7/Blackbeard_McShane_Potc_Ost_Concept_Art_IV.jpg/revision/latest?cb=20140416185120')
Pirate('Anne Bonny', 'Rum', 'Parrot', 'http://41.media.tumblr.com/tumblr_lzdalaxyUx1qgh7y6o1_1280.jpg')
Pirate('Hector Barbossa', 'Rum', 'Monkey', 'http://vignette1.wikia.nocookie.net/piratesonline/images/b/be/Barbossachina.jpg/revision/latest?cb=20121204193400')
```

Note that we've passed default arguments to most of the variables in our `__init__` method. Why do you think this might be helpful?

Now let's start setting up our API. Recall that from our first example, the `add_resource` method takes two arguments: a class and a path. For our RESTful routing, we'll need two different paths: `/api/pirates/` and `/api/pirates/<int:id>`. Let's call the two related classes `PiratesListApi` and `PiratesApi`, respectively.

**Exercise** Write the two classes needed for the 5 RESTful routes we'll want to build for this API. Which routes won't we need, and why? 

(Hint: For routes where you're sending data to the server, you'll need to convert JSON to a Python dictionary. Thankfully, Flask has got your back. Just import `request` and call `request.get_json()` inside of the relevant routes. Note that you'll have to set the `Content-Type` on the request header to `application/json` as well.)

One solution is below. But try this on your own first! Here are some pirates to keep you from looking at the code prematurely:

![pirate 1](https://media.giphy.com/media/wxe9dHaItOvnO/giphy.gif)
![pirate 2](https://media.giphy.com/media/5E9f2Roz0Tf1u/giphy.gif)
![piarte 3](https://media.giphy.com/media/miOqNxChND5WE/giphy.gif)

Here's some code you can add after the definition of the `Pirate` class:

```py
class PiratesListApi(Resource):
  def get(self):
    return Pirate.pirate_list

  def post(self):
    new_pirate = Pirate(**request.get_json())
    return new_pirate

class PiratesApi(Resource):
  def get(self, id):
    return Pirate.find_by_id(id)

  def put(self, id):
    pirate_to_update = Pirate.find_by_id(id)
    updated_pirate_dict = request.to_json()
    pirate_to_update.name = updated_pirate_dict['name']
    pirate_to_update.poison = updated_pirate_dict['poison']
    pirate_to_update.accessory = updated_pirate_dict['accessory']
    pirate_to_update.image_url = updated_pirate_dict['image_url']
    return pirate_to_update

  def delete(self, id):
    deleted_pirate = Pirate.find_by_id(id)
    return Pirate.pirate_list.pop(Pirate.pirate_list.index(deleted_pirate))

api.add_resource(PiratesListApi, '/api/pirates')
api.add_resource(PiratesApi, '/api/pirates/<int:id>')

if __name__ == '__main__':
  app.run(debug=True)
```

Unfortunately, if you try to test your API (say, using `curl`), you'll quickly run into a problem. For example, when you issue a GET to `/api/pirates`, you'll find that Python throws a `TypeError`, telling you that instances of your `Pirate` class aren't serializable. 

### Serializing our data

Going from a dictionary to an instance of the Pirate class isn't too bad, as evidenced by the `post` method up above. Going the other way, though, is trickier. There are a few ways we can try to fix this, including some tools supplied by `Flask-RESTful`. However, some of these tools (e.g. `reqparse`) are basically deprecated. 

Because of this, let's take a look at [Marshmallow](http://marshmallow.readthedocs.io/en/latest/), a library for serializing and deserializing data. To get started:

`pip install marshmallow`

In your api file, add the following:

`from marshmallow import Schema, fields`

`fields` lets us tell our server what data types it should use when serializing the attributes on our instances. We wrap this logic inside of a class which inherits from the imported `Schema` class. In this case, we have the following. 

```py
class PirateSchema(Schema):
  id = fields.Integer()
  name = fields.String()
  poison = fields.String()
  accessory = fields.String()
  image_url = fields.String()
  
schema = PirateSchema()  
```

Our `schema` object has a few methods that will let us serialize and deserialize data. `schema.dump()` takes in a pirate object and returns (in its `data` attribute) a dictionary version of the original object. Similarly, `schema.dumps()` does the same thing, but its data attribute returns a stringified version of the dictionary. Here's an example:

```py
In [1]: p = Pirate('captain test', 'rum', 'eye patch', '')

In [2]: p
Out[2]: <__main__.Pirate at 0x10441b0f0>

In [3]: schema.dump(p)
Out[3]: MarshalResult(data={'name': 'captain test', 'accessory': 'eye patch', 'poison': 'rum', 'image_url': '', 'id': 4}, errors={})

In [4]: pdict = schema.dump(p).data

In [5]: type(pdict)
Out[5]: dict

In [6]: schema.dumps(p)
Out[6]: MarshalResult(data='{"name": "captain test", "accessory": "eye patch", "poison": "rum", "image_url": "", "id": 4}', errors={})

In [7]: pstr = schema.dumps(p).data

In [8]: type(pstr)
Out[8]: str
```

We can now fix our class definitions as follows:

```py
class PiratesListApi(Resource):
  def get(self):
    return schema.dump(Pirate.pirate_list, many=True)

  def post(self):
  	 new_pirate_dict = request.get_json()
    Pirate(**new_pirate_dict)
    return new_pirate_dict

class PiratesApi(Resource):
  def get(self, id):
    return schema.dump(Pirate.find_by_id(id))

  def put(self, id):
    pirate_to_update = Pirate.find_by_id(id)
    updated_pirate_dict = request.to_json()
    pirate_to_update.name = updated_pirate_dict['name']
    pirate_to_update.poison = updated_pirate_dict['poison']
    pirate_to_update.accessory = updated_pirate_dict['accessory']
    pirate_to_update.image_url = updated_pirate_dict['image_url']
    return schema.dump(pirate_to_update)

  def delete(self, id):
    deleted_pirate = Pirate.find_by_id(id)
    return schema.dump(Pirate.pirate_list.pop(Pirate.pirate_list.index(deleted_pirate)))
```

A couple of things worth pointing out:

1. See the `many=True` argument in the `get` method for `PiratesListApi`? This is telling marshmallow that we are passing in multiple Pirate objects (as a list, in this case), rather than just a single instance.)
2. The pattern of passing a dictionary into the resource class to create an instance of the class (as we did with `Pirate(**new_pirate_dict)` is common enough that marshmallow lets you overwrite the `schema.load` function to automatically store an instance of the resource's class in its data attribute. To get this to work, import `post_load` from `marshmallow` and modify your `PirateSchema` as follows: 

```
class PirateSchema(Schema):
  id = fields.Integer()
  name = fields.String()
  poison = fields.String()
  accessory = fields.String()
  image_url = fields.String()

  @post_load
  def make_pirate(self, kwargs):
    return Pirate(**kwargs)
```

With this, anytime you call `schema.load` on a dictionary, you'll automatically get access to an instance of the `Pirate` class defined by the values in that dictionary.

### Quick curl review

With these changes in places, you should see that your routes work. Try out these curl commands to confirm!

```bash
curl http://localhost:5000/api/pirates
# should send back all pirates' info

curl http://localhost:5000/api/pirates/1
# should send back info on just pirate 1

curl http://localhost:5000/api/pirates -d '{"name":"foo","poison":"rum"}' -H "Content-Type: application/json"

# should add a new pirate to the list and send back the new pirate

curl http://localhost:5000/api/pirates/3 -d '{"name":"updated name","poison":"updated poison"}' -H "Content-Type: application/json"

# should update the pirate with an id of 3 and send back the updated pirate to you

curl http://localhost:5000/api/pirates/1 -X DELETE
# should send back info on pirate 1, but a subsequent get to /api/pirates should show that pirate 1 has been removed
```

### Some Error Handling

What happens when you issue a GET request to `/api/pirates/100`? You should see that your API just returns `{}`. However, if you don't have a pirate with an id of 100, you might want to send more information back to the user. Moreover, you may not want to send a 200 status code.

To do more sophisticated error handling, we can use `flask_restful`'s `abort` method. Here's an example of how we could use `abort` to handle requests to invalid ids:

```py
def abort_if_invalid_id(id):
	if id not in [pirate.id for pirate in Pirate.pirate_list]:
      abort(404, message="Sorry friend, there's no pirate with an id of {}".format(id))
```

If you place this function inside of some of your route methods, you should see error messages when you make requests to urls with invalid ids. (Make sure to import `abort` from `flask_restful` as well!)

**Exercise** refactor the `abort_if_invalid_id` method into a decorator!

## Connecting to a Database

Storing data in lists is lame. Let's refactor our app to use a database. Try it on your own first; below these beautiful pirates is one possible solution. 

![pirate 4](https://media.giphy.com/media/l2R0bzV7KQIYhZ5SM/giphy.gif)
![pirate 5](https://media.giphy.com/media/26tPlDCH5a5t50NOM/giphy.gif)
![pirate 6](https://media.giphy.com/media/SUeUCn53naadO/giphy.gif)

```py
from flask import Flask, request
from flask_restful import Resource, Api, abort
from marshmallow import Schema, fields, post_load
from functools import wraps
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask_pirates'
app.url_map.strict_slashes = False

class Pirate(db.Model):

  __tablename__ = 'pirates'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.Text)
  poison = db.Column(db.Text)
  accessory = db.Column(db.Text)
  image_url = db.Column(db.Text)

  def __init__(self, name=None, poison=None, accessory=None, image_url=None):
    self.name = name
    self.poison = poison
    self.accessory = accessory
    self.image_url = image_url

db.create_all()

def abort_if_invalid_id(f):
  @wraps(f)
  def inner(*args, **kwargs):
    id = kwargs.get('id')
    if not Pirate.query.get(id):
      abort(404, message="Sorry friend, there's no pirate with an id of {}".format(id))
    return f(*args, **kwargs)
  return inner

class PirateSchema(Schema):
  id = fields.Integer()
  name = fields.String()
  poison = fields.String()
  accessory = fields.String()
  image_url = fields.String()

  @post_load
  def make_pirate(self, kwargs):
    return Pirate(**kwargs)

schema = PirateSchema()

class PiratesListApi(Resource):
  def get(self):
    return schema.dump(Pirate.query.all(), many=True)

  def post(self):
    new_pirate_dict = request.get_json()
    db.session.add(schema.load(new_pirate_dict).data)
    db.session.commit()
    return schema.dump(new_pirate_dict)

class PiratesApi(Resource):
  @abort_if_invalid_id
  def get(self, id):
    return schema.dump(Pirate.query.get(id))

  @abort_if_invalid_id
  def put(self, id):
	 pirate_to_update = Pirate.query.get(id)
    updated_pirate_dict = request.get_json()
    pirate_to_update.name = updated_pirate_dict['name']
    pirate_to_update.poison = updated_pirate_dict['poison']
    pirate_to_update.accessory = updated_pirate_dict['accessory']
    pirate_to_update.image_url = updated_pirate_dict['image_url']
    db.session.add(pirate_to_update)
    db.session.commit()
    return updated_pirate_dict

  @abort_if_invalid_id
  def delete(self, id):
    pirate_to_delete = Pirate.query.get(id)
    db.session.delete(pirate_to_delete)
    db.session.commit()
    return schema.dump(pirate_to_delete)

api.add_resource(PiratesListApi, '/api/pirates')
api.add_resource(PiratesApi, '/api/pirates/<int:id>')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == '__main__':
  app.run(debug=True)

```

**Exercise** Refactor your code so that it's not all in a single file. Also, use a migration!

**Exercise** Refactor [this pirates app](https://github.com/gSchool/angular-curriculum/tree/master/Unit-3/examples/pirates_app) to have a Flask backend! (Hint: you'll need to research how to enable CORS on your Flask server, but otherwise you shouldn't have to do much do your server code.)