from flask import Flask, render_template, redirect, session, flash, request
# from myconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "shhh...it's secret"

import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# mysql = MySQLConnector(app, 'friends')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def registration():
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    username = request.form["username"]
    password = request.form["password"]
    confirm_password = request.form["confirm_password"]
    print'*'*40
    print first_name
    print last_name
    print email
    print username
    print password
    print confirm_password
    valid = True
    errors = []
    if first_name == "" or len(first_name) < 3:
        flash("first name can not be empty, must have three letters")
        valid = False
    if last_name == "" or len(last_name) < 3:
        flash("invalid last name" )  
        valid = False 
    if email == "":
        flash("enter email and in valid format")
        valid = False
    elif not EMAIL_REGEX.match(email):
        flash('enter email and in valid format')
        valid = False    
    if username == "" or len(username) < 3:
        flash("user name can not be less than three letters")
        valid = False  
    if password == "":
        flash("invalid password")
        valid = False
    if confirm_password != password:
        flash(" password and confirm password must match " )
        valid = False        
    if valid == True:
        return "data is valid"
    elif valid == False:
        return redirect('/')

     
    

@app.route('/success')
def success():
    return 'hit success route'
app.run(debug=True)            