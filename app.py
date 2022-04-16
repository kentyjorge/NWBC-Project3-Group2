from email.mime import base
from os import name
import sqlalchemy as sa
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

import numpy as np
import pandas as pd
import datetime as dt

from flask import Flask, jsonify
from sqlalchemy.orm.session import make_transient

#################################################
# Database Setup
#################################################

engine = sa.create_engine('postgresql://localhost:5432/group_2_project_3')
connection = engine.connect()

# reflect an existing database into a new model
# reflect the tables
Base = automap_base()
Base.prepare(engine, reflect=True)

park = Base.classes.parks
webcams = Base.classes.webcams

#################################################
# Flask Setup
#################################################
app = Flask(__name__)