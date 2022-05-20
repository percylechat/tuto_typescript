from typing_extensions import dataclass_transform
from flask import Flask, request
from flask import render_template
import requests
import json
import secrets


app = Flask(__name__)

global data_cred


@app.route("/")
def hello():
    secret_random = secrets.token_hex(32)
    code = request.args.get("code", default="", type=str)
    print(code)
    return render_template(
        "index.html",
        client_id=data_cred["client_id"],
        redirect_uri=data_cred["redirect_uri"],
        secret_random=secret_random,
    )


@app.route("/done/")
def callback():
    code = request.args.get("code", default="", type=str)
    print(code)
    if code != "toto":
        print(code)
    return render_template("done.html")


@app.route("/callback/")
def callback():
    code = request.args.get("code", default="", type=str)
    print(code)
    if code != "toto":
        print(code)
    return render_template("index.html")


if __name__ == "__main__":
    with open("credential.json") as f:
        data_cred = json.load(f)
    app.run()
