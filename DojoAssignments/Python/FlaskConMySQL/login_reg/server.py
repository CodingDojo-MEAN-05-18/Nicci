from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)

app.secret_key = "KeepItSimpleStupid"

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

mysql = MySQLConnector(app,'login_reg')
@app.route('/')
def index():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('index.html', all_users = users)

@app.route('/register', methods=['POST'])
def reg():    
    first_name = request.form["first_name"]
    last_name = request.form["last_name"]
    email = request.form["email"]
    password = request.form["password"]
    confirm_password = request.form["confirm_password"]
    pw_hash = bcrypt.generate_password_hash(password) #is hash just a dictionary?-no
    print'*'*40
    print first_name
    print last_name
    print email
    print password
    print confirm_password
    valid = True
    errors = []

    if first_name == '' or len(first_name) < 2:
        flash('first name cannot be blank, must have two characters')
        valid = False
    if last_name == '' or len(last_name) < 2:
        flash('last name cannot be blank, must have two characters') 
        valid = False
    if len(request.form['email']) < 1 or not EMAIL_REGEX.match(request.form['email']):
        flash("email can not be blank and must be valid")
        valid = False
    if password == "" or len(password) < 8:
        flash('password must be 8 characters and match confirm password') 
        valid = False
    if confirm_password != password:
        flash('password must be 8 characters and match confirm password')  
        valid = False 

    if valid == True:
        return "User is Registered!"  
        # i want to flash "user is registered" but have a button to display registered users and a button to get back to register more users or log in 
    elif valid == False:
        return redirect('/')
    #the Bcrypt example inserts created_at - do I need to do this and why or why not both timestamps?
    insert_query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password,  NOW(), NOW())"   
    query_data = { 'first_name': first_name, 'last_name': last_name, 'email': email, 'password': password } 
    mysql.query_db(insert_query, query_data)


@app.route('/login', methods=["POST"])
def login():
    #how do i make this work for first_name and last_name??
    first_name = request.form['first_name']
    # last_name = request.form['last_name']
    password = request.form['password']
    query = 'SELECT * FROM users WHERE first_name=:one'    
    data = {
        'one':first_name
    }
    user = mysql.query_db(query, data)
    if len(user) == 0:
        flash("need a user name with characters")
        return redirect('/')
    else:
        user = user[0]    
        if user['password'] == password:
            flash['Logged into to application']
            session['id'] = user['id']
            return redirect('/logged_in')
        else:
            flash('invalid password')
            return redirect('/')
            # user = user[0]
            # if user['password'] == password:
    return 'end of else statement'

@app.route('/logged_in')
def logged_in():
    query = 'SELECT username FROM users WHERE id=:inject_one'
    data = {
        'inject_one':session['id']
    }
    logged_user = mysql.query_db(query, data)[0]
    return logged_user['first_name']    

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')    

app.run(debug=True)     