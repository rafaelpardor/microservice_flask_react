from flask import Blueprint, jsonify, request
from sqlalchemy import exc

from project.api.models import User
from project import db

users_blueprint = Blueprint('users', __name__)

@users_blueprint.route('/users/ping', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong'
    })

@users_blueprint.route('/users', methods=['POST'])
def add_user():
    post_data = request.get_json()
    response_object = {
        'status': '',
        'message': ''
    }
    if not post_data or post_data.get('username') == None:
        response_object['status'] = 'fail'
        response_object['message'] = 'Invalid payload.'
        return jsonify(response_object), 400

    username = post_data.get('username')
    email = post_data.get('email')
    try:
        user = User.query.filter_by(email=email).first()
        if user:
            response_object['status'] = 'fail'
            response_object['message'] = 'Email already exist.'
            return jsonify(response_object), 400

        db.session.add(User(username=username, email=email))
        db.session.commit()
        response_object['status'] = 'success',
        response_object['message'] = f'{email} was added!'
        return jsonify(response_object), 201

    except exc.IntegrityError as e:
        db.session.rollback()
        response_object['status'] = 'fail'
        response_object['message'] = f'{e}'
        return jsonify(response_object), 400

