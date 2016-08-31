from flask import Flask, request
from flask_restful import Resource, Api
from marshmallow import Schema, fields, post_load
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/flask_pirates_class'
app.url_map.strict_slashes = False

db = SQLAlchemy(app)

class Pirate(db.Model):

  __tablename__ = "pirates"

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
    print("getting data")
    pirates = Pirate.query.all()
    print("got data!")
    return schema.dump(pirates, many=True)

  def post(self):
    new_pirate = schema.load(request.get_json()).data
    db.session.add(new_pirate)
    db.session.commit()
    return schema.dump(new_pirate)

class PiratesApi(Resource):
  def get(self, id):
    return schema.dump(Pirate.query.get_or_404(id))

  def put(self, id):
    pirate_to_update = Pirate.query.get_or_404(id)
    updated_info = request.get_json()
    pirate_to_update.name = updated_info.get('name')
    pirate_to_update.poison = updated_info.get('poison')
    pirate_to_update.accessory = updated_info.get('accessory')
    pirate_to_update.image_url = updated_info.get('image_url')
    db.session.add(pirate_to_update)
    db.session.commit()
    return schema.dump(pirate_to_update)

  def delete(self, id):
    pirate_to_delete = Pirate.query.get_or_404(id)
    db.session.delete(pirate_to_delete)
    db.session.commit()
    return schema.dump(pirate_to_delete)  

api.add_resource(PiratesListApi, '/api/pirates')
api.add_resource(PiratesApi, '/api/pirates/<int:id>')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

if __name__ == '__main__':
  app.run(debug=True, port=3000, threaded=True)
