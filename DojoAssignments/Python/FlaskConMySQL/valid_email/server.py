from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "KeepItSimpleStupid"
mysql = MySQLConnector(app,'valid_email')
@app.route('/')
def index():
    print "*"*10,'in index'   
    query = "SELECT * FROM users"
    users = mysql.query_db(query) 
    return render_template('index.html', all_users=users)

@app.route('/email_check', methods=['POST'])
def email_check():
    
    if len(request.form['email']) < 5:
        print "got into if statement" * 4
        flash("Please enter a valid email address.") 
    else:
        print "got into else statement" * 4
        flash('Need to redirect to valid.html')
        query = "INSERT INTO users (email, created_at, updated_at) VALUE (:email, NOW(), NOW())"
        data = {
            'email': request.form['email']
        }
        mysql.query_db(query, data)    
    return redirect('/valid')

@app.route('/valid')
def valid_user():
    print '%'*15,"in Valid"
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('valid.html', all_users=users)

@app.route('/delete')
def delete_record():
    query = "DELETE FROM users WHERE id = :id"
    data = {
                'id': user_id
            }    
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)    