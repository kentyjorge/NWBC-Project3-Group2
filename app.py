from flask import Flask, render_template, redirect
import data_get

#################################################
# Flask Setup
#4 routes - index, parks, cams, attendance
# 
# 
#################################################
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/parks")
def parks():
    return render_template('index.html')

@app.route("/webcams")
def webcams():
    return render_template('index.html')

@app.route("/attendance")
def attendance():
    return render_template('visitor_plot.html')


if __name__ == "__main__":
    app.run(debug=True)