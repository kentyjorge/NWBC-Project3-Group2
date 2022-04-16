drop table if exists parks cascade;
CREATE TABLE parks (
    Park varchar   NOT NULL,
    Latitude decimal(20) ,
    Longitude decimal(20) ,
    url varchar,
    Park_Id varchar   NOT NULL,
    Park_Code varchar  NOT NULL,
    Park_Type varchar NOT NULL,
	image varchar,
    State varchar,
	Coord varchar,
    Primary key (Park_Id)
);

drop table if exists webcams cascade;
CREATE TABLE webcams (
    Park varchar  NOT NULL,
    Park_Code varchar NOT NULL,
    Park_Type varchar NOT NULL,
    Coord varchar,
    Webcam_URL varchar,
    Images varchar,
    Information varchar,
	ID Serial,
	Primary key (ID)
);