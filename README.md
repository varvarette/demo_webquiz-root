
# Vanilla JS + Flask Quiz App 

This project is a basic quiz app using a **vanilla HTML/CSS/JavaScript frontend** and a **Flask backend**.
It's designed for educational use and lightweight deployment.

---

## 🧩 Project Structure

```
demo_webquiz-root/
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

---

## Prerequisites

### 1. Install Python (if not yet installed)
- https://www.python.org/downloads/
- Check: `python --version`

---

## How to Run the App (Locally)

### 1. Start the Flask Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # or venv\Scripts\activate on Windows
pip install -r ../requirements.txt
python app.py
```

Backend will run at: `http://localhost:5000`

---

### 2. Serve the Frontend with a Simple HTTP Server

From the root or frontend directory:

```bash
cd frontend
python -m http.server 5500
```

Frontend is now available at: `http://localhost:5500`

---

## How It Works

- The frontend JavaScript (`script.js`) fetches questions via:
  ```
  GET http://localhost:5000/api/questions
  ```
- The user selects answers and clicks **Submit**, triggering:
  ```
  POST http://localhost:5000/api/submit
  ```
- Answers are stored:
  - Line-by-line in `backend/responses.json`
  - Tabular format in `backend/responses.csv`

---

## Notes

- The app uses **CORS** to allow frontend and backend to communicate on different ports.
- `db.py` handles writing to both JSON and CSV formats.
- This setup is useful for understanding how a full-stack app works without frameworks.

