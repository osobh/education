from flask_wtf import Form
from wtforms import StringField
from wtforms.validators import DataRequired

class NewPostForm(Form):
    title = StringField('title', validators=[DataRequired()])
    body = StringField('body', validators=[DataRequired()])

class EditPostForm(Form):
    title = StringField('title', validators=[DataRequired()])
    body = StringField('body', validators=[DataRequired()])
