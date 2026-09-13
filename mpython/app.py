from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def home():

    return """
    <html>
    <body>

    <h1>Python Flask Application</h1>

    <h2>Running inside Docker</h2>

    <p>Deployed on AWS EC2</p>

    <p>Application Port: 5000</p>

    </body>
    </html>
    """


@app.route("/health")
def health():

    return jsonify({
        "status": "UP",
        "application": "Python Flask"
    })


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000
    )
