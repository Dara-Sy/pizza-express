\c pizza_dev

DROP TABLE IF EXISTS pizza; 

CREATE TABLE pizza (
  id BIGSERIAL PRIMARY KEY,
  flavor VARCHAR(255),
  description VARCHAR(1024),
  location VARCHAR(255)
);