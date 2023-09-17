from flask import Flask

from flask_vite import Vite

app = Flask(__name__)
vite = Vite(app)
