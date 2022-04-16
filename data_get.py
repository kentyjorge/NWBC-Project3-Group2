import sqlalchemy as sa
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from pprint import pprint

engine = sa.create_engine('postgresql://localhost:5432/group_2_project_3')
connection = engine.connect()

parks_df = pd.read_sql_table('parks', engine)
parks_dict = parks_df.to_dict('records')
pprint(parks_dict)


# return(parks_dict, webcams_dict)