DROP DATABASE checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE forms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name TINYTEXT,
  email TINYTEXT,
  password TINYTEXT,
  line1 TINYTEXT,
  line2 TINYTEXT,
  city TINYTEXT,
  state TINYTEXT,
  zip INT,
  phoneNumber INT,
  creditCardNum INT,
  expDate INT,
  CVV INT,
  cardZip INT,
  PRIMARY KEY (id)
);