from flask import Flask, request, redirect, url_for, render_template
from flask_modus import Modus

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
