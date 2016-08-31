from flask import Flask, request
from flask_restful import Resource, Api, abort
from marshmallow import Schema, fields
from functools import wraps

app = Flask(__name__)
api = Api(app)

class Pirate:

  id = 1
  pirate_list = []
  
  def __init__(self, name, poison, accessory, image_url):
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

def abort_if_invalid_id(f):
  @wraps(f)
  def inner(*args, **kwargs):
    id = kwargs.get('id')
    if id not in [pirate.id for pirate in Pirate.pirate_list]:
      abort(404, message="Sorry friend, there's no pirate with an id of {}".format(id))
    return f(*args, **kwargs)
  return inner

class PirateSchema(Schema):
  id = fields.Integer()
  name = fields.String()
  poison = fields.String()
  accessory = fields.String()
  image_url = fields.String()

schema = PirateSchema()

class PiratesListApi(Resource):
  def get(self):
    return schema.dump(Pirate.pirate_list, many=True)

  def post(self):
    new_pirate = Pirate(
      request.form['name'], 
      request.form['poison'],
      request.form['accessory'],
      request.form['image_url']
    )
    return schema.dump(new_pirate)

class PiratesApi(Resource):
  @abort_if_invalid_id
  def get(self, id):
    return schema.dump(Pirate.find_by_id(id))

  @abort_if_invalid_id
  def put(self, id):
    current_pirate = Pirate.find_by_id(id)
    current_pirate.name = request.form['name']
    current_pirate.poison = request.form['poison']
    current_pirate.accessory = request.form['accessory']
    current_pirate.image_url = request.form['image_url']
    return schema.dump(current_pirate)

  @abort_if_invalid_id
  def delete(self, id):
    deleted_pirate = Pirate.find_by_id(id)
    return schema.dump(Pirate.pirate_list.pop(Pirate.pirate_list.index(deleted_pirate)))

api.add_resource(PiratesListApi, '/api/pirates')
api.add_resource(PiratesApi, '/api/pirates/<int:id>')

if __name__ == '__main__':
  app.run(debug=True)
