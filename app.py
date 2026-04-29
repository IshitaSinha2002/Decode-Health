from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from models import db, User

import jwt
import datetime

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
bcrypt = Bcrypt(app)

# 🔥 Create DB
with app.app_context():
    db.create_all()


#  SIGN UP
@app.route('/signin', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(email=email, password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"})


#  LOGIN
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode({
        'user_id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({"token": token})


if __name__ == "__main__":
    app.run(debug=True)