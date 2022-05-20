from flask import Flask,request
from flask import render_template

app = Flask(__name__)


@app.route('/')
def hello():
     code = request.args.get("code", default="", type=str)
     print(code)
     return render_template("index.html")


@app.route('/callback/')
def callback():
     return render_template("index.html")