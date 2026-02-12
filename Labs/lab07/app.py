from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<h1>Hello CSE2102 student, from Flask & Docker</h2>'

@app.route('/get_example')
def handle_request():
    my_value = request.args.get('myvalue')
    return f"The value is {my_value}"

@app.route("/post_example", methods = ["POST"])
def post_example():
    postparm = request.json['mypostparm']
    parm2 = request.json["parm2"]
    return f"The values are {postparm} and {parm2}"

if __name__ == "__main__":
    app.run(debug=True)