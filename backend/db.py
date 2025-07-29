import json
from datetime import datetime
import csv
import os


def save_answers(data):

    timestamp = datetime.utcnow().isoformat()

    entry = {
        "timestamp": timestamp,
        "answers": data
    }

    # Append to JSON log
    with open("responses.json", "a") as f:
        f.write(json.dumps(entry) + "\n")

    # Append to CSV
    csv_file = "responses.csv"
    file_exists = os.path.isfile(csv_file)

    with open(csv_file, "a", newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)

        # First time: write header
        if not file_exists:
            header = ["timestamp"] + list(data.keys())
            writer.writerow(header)

        # Write data row
        row = [timestamp] + list(data.values())
        writer.writerow(row)