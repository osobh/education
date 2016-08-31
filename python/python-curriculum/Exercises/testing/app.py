from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.debug = True

instructors_list = ["Elie", "Tim", "Matt", "Parker", "Janey"]

@app.route('/instructors', methods=["GET"])
def index():
    return render_template('index.html', instructors_list=instructors_list)

@app.route('/instructors', methods=["POST"])
def create():
    instructors_list.append(request.form["instructor"])
    return redirect(url_for('index'))

# This is another option, but it does involve more code in one method and makes it difficult to stay RESTful with the names of your functions 

@app.route('/instructors/new')
def new():
    return render_template('new.html')

if __name__ == '__main__':
    app.run()