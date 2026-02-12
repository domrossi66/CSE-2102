from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return '<h1>Hello CSE2102 student, from Flask & Docker</h2>'
if __name__ == "__main__":
    app.run(debug=True)