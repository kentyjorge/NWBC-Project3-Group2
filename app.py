from flask import Flask, render_template, redirect
#import other.data_get as data_get

#################################################
# Flask Setup
#4 routes - index, parks, cams, attendance
# 
# 
#################################################
app = Flask(__name__)

# title page with differnt links
@app.route("/")
def index():
    return render_template('index.html')

# click on link to Parks
# reference interactive template
# reference json
@app.route("/parks")
def parks():
    return render_template('interactive_map.html')

# using the attendance data from Jason, total visitors and do heatmap across US
@app.route("/heatmap")
def heatmap():
    return render_template('heatmap.html')

# show attendance by month by park
@app.route("/attendance")
def attendance():
    return render_template('attendance_plot.html')


if __name__ == "__main__":
    app.run(debug=True)