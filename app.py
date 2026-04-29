from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
import jwt
import datetime

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'your_secret_key'

bcrypt = Bcrypt(app)

# Temporary DB (replace later with real DB)
users = {}

#  SIGN IN
@app.route('/signin', methods=['POST'])
def signin():
    data = request.json

    email = data.get('email')
    password = data.get('password')

    if email in users:
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')

    users[email] = hashed_pw

    return jsonify({"message": "User created successfully"}), 201


# LOGIN
@app.route('/login', methods=['POST'])
def login():
    data = request.json

    email = data.get('email')
    password = data.get('password')

    if email not in users:
        return jsonify({"error": "User not found"}), 404

    if not bcrypt.check_password_hash(users[email], password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode({
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({"token": token})


if __name__ == "__main__":
    app.run(debug=True)