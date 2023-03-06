from flask import Flask

app = Flask(__name__)
f = open("text.txt","r")    #change to rev img report text file
output = f.read()


@app.route("/output")
def members():
    return {"output": [output]}

if __name__ == "__main__":
    app.run(debug=True)

f.close()