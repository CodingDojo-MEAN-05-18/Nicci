from flask import Flask, render_template, redirect, session, request
app.secret_key = "weekend demo secret key"

@app.route('/')
def index():
    return "got it"

app.run(debug=True)    