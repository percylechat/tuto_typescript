from flask import Flask, request
from flask import render_template
import requests
import json
import secrets
import urllib.parse


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
        redirect_uri=urllib.parse.quote(data_cred["redirect_uri"], safe=""),
        secret_random=secret_random,
    )


@app.route("/done/")
def done():
    code = request.args.get("code", default="", type=str)
    print(code)
    if code != "toto":
        print(code)
        data_42 = {
            "grant_type": "authorization_code",
            "client_id": data_cred["client_id"],
            "client_secret": data_cred["client_secret"],
            "code": code,
            "redirect_uri": data_cred["redirect_uri"],
        }
        r = requests.post(data_cred["url_42_token"], data=data_42)
        print("result query token 42")
        data_response_42_token = r.json()
        print(data_response_42_token)
        if (
            "access_token" in data_response_42_token.keys()
            and "error" not in data_response_42_token.keys()
        ):
            print("success loggued")
        else:
            print("failed loggin")
    return render_template("done.html")


@app.route("/callback_ext/")
def callback_ext():
    code = request.args.get("code", default="", type=str)
    print(code)
    if code != "toto":
        print(code)
    return render_template("index.html")


@app.route("/callback/")
def callback():
    code = request.args.get("code", default="", type=str)
    print(code)
    if code != "toto":
        print(code)
    return render_template("index.html")


if __name__ == "__main__":
    with open("../credential.json") as f:
        data_cred = json.load(f)
    app.run()
