drop table if exists stocks cascade;
CREATE TABLE parks (
    Park varchar   NOT NULL,
    Latitude int ,
    Longitude int ,
    url varchar,
    Park_Id varchar   NOT NULL,
    Park_Code varcahr  NOT NULL,
    Park_Type varchar NOT NULL,
    State varchar,
	Coord varchar,
    Primary key (Park_Id)
);

drop table if exists articles cascade;
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