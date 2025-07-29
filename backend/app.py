from flask import Flask, jsonify, request
from flask_cors import CORS
import json
from db import save_answers

app = Flask(__name__)
CORS(app)

@app.route('/api/questions')
def get_questions():
    with open('../data/questions.json') as f:
        questions = json.load(f)
    return jsonify(questions)

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.get_json()
    save_answers(data)
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
