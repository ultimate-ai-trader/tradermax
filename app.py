
from flask import Flask, render_template
from ultra_logic import generate_ultra_signal

app = Flask(__name__)

@app.route("/")
def index():
    signal = generate_ultra_signal()
    return render_template("index.html", signal=signal)

if __name__ == "__main__":
    app.run(debug=False)
