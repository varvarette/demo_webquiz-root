# demo version for a webquiz (from scratch)

project-root/
├── frontend/
│   ├── index.html         # HTML structure of the quiz
│   ├── style.css          # Styling for layout and buttons
│   └── script.js          # Handles question loading and answer submission
├── backend/
│   ├── app.py             # Flask API for serving questions and receiving answers
│   └── db.py              # Database interaction (e.g., save answers)
├── data/
│   └── questions.json     # Sample questions with choices and correct answers
├── requirements.txt       # Python dependencies (Flask, etc.)
└── README.md              # Project overview and setup instructions


# Quiz App (Vanilla JS + Flask)

## Description
A basic quiz app built with HTML/CSS/JavaScript on the frontend, and Python Flask on the backend. It loads questions from a JSON file and stores anonymous answers.

## Setup Instructions

1. **Frontend**
   - Open `frontend/index.html` in your browser (use a local server if needed)

2. **Backend**
   ```bash
   cd backend
   pip install -r ../requirements.txt
   python app.py
   ```

3. **Data**
   - Quiz questions are stored in `data/questions.json`
   - User answers are saved in `backend/responses.json`

## Notes
- No login or personal data collection
- For educational use only
- Cross-origin enabled for local testing
