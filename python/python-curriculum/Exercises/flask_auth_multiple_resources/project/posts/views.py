from flask import render_template, Blueprint, url_for, request, redirect, flash
from flask_login import login_required, current_user
from functools import wraps
from project import db
from project.posts.models import Post
from project.users.models import User
from project.posts.forms import NewPostForm, EditPostForm

posts_blueprint = Blueprint('posts', __name__, template_folder="templates")

# Helper for authorization
def ensure_correct_user():
    def wrapper(f):
        @wraps(f)
        def wrapped(*args, **kwargs):
            if current_user.id != request.view_args['user_id']:
                flash("Not Authorized")
                return redirect(url_for('posts.all', user_id=current_user.id))
            return f(*args, **kwargs)
        return wrapped
    return wrapper


@posts_blueprint.route('/posts', methods = ["GET"])
@login_required
def all():
    posts = Post.query.all()
    return render_template('all.html', posts=posts)

@posts_blueprint.route('/users/<int:user_id>/posts', methods = ["GET"])
@login_required
def index(user_id):
    user = User.query.get(user_id)
    return render_template('index.html', user=user)

@posts_blueprint.route('/users/<int:user_id>/posts/new', methods = ["GET"])
@login_required
@ensure_correct_user()
def new(user_id):
    user = User.query.get(user_id)
    form = NewPostForm(request.form)
    return render_template('new.html', user=user, form=form)

@posts_blueprint.route('/users/<int:user_id>/posts/<int:id>', methods = ["GET"])
@login_required
def show(user_id, id):
    post = Post.query.get(id)
    return render_template('show.html', user=post.user, post=post)

@posts_blueprint.route('/users/<int:user_id>/posts/<int:id>/edit', methods = ["GET"])
@login_required
@ensure_correct_user()
def edit(user_id, id):
    form = EditPostForm(request.form)
    post = Post.query.get(id)
    return render_template('edit.html', form=form, user= post.user, post=post)

@posts_blueprint.route('/users/<int:user_id>/posts', methods = ["POST"])
@login_required
@ensure_correct_user()
def create(user_id):
    user = User.query.get(user_id)
    form = NewPostForm(request.form)
    if form.validate_on_submit():
        new_post = Post(form.title.data, form.body.data, user.id)
        db.session.add(new_post)
        db.session.commit()
        flash("Post Successfully Added")
        return redirect(url_for('posts.index', user_id=user.id))
    else:
        return render_template('new.html', user=user, form=form)

@posts_blueprint.route('/users/<int:user_id>/posts/<int:id>', methods = ["PATCH"])
@login_required
@ensure_correct_user()
def update(user_id, id):
    error = None
    post = Post.query.get(id)
    form = EditPostForm(request.form)
    # VALIDATE ON SUBMIT ONLY WORKS WHEN THERE IS A POST!
    if form.validate():
        post.title = form.title.data
        post.body = form.body.data
        db.session.commit()
        return redirect(url_for('posts.index', user_id=post.user.id))
    else:
        return render_template('edit.html', form=form, user= post.user, post=post, error=error)

@posts_blueprint.route('/users/<int:user_id>/posts/<int:id>',methods=["DELETE"])
@login_required
@ensure_correct_user()
def destroy(user_id, id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for('posts.index', user_id=post.user.id))

