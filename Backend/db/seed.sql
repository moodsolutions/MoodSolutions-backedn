DROP DATABASE IF EXISTS mood_db;
CREATE DATABASE mood_db;

\c mood_db



CREATE TABLE customers
(
  id serial primary key,
  name varchar,
  email varchar,
  phone int,
  lat DOUBLE PRECISION,
  lon DOUBLE PRECISION,
  img varchar
);
INSERT INTO customers
  (name, email, phone)
VALUES
  ('hamoud', 'alano@gmail.com', '0554040'),
  ('Ibrahim', 'ibrao@gmail.com', '0506624'),
  ('Sara', 'sarah21o@gmail.com', '0548234'),
  ('Khalid', 'kld_s@gmail.com', '05553053');



CREATE TABLE providers(
  id serial primary key,
  name varchar,
  email varchar,
  password_digest VARCHAR NOT NULL,
  phone VARCHAR,
  img varchar
  -- offer_id int,
  -- FOREIGN KEY (offer_id)REFERENCES offers
);

INSERT INTO providers(name, email,password_digest, phone, img)
VALUES
  ('Alanoud', 'noudi.mss@gmail.com','anoud@95' , '0554040', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png'),
  ('HAmoud' , 'hamou@gmail.com'    ,'hammd@21', '0554040', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png'),
  ('Muhrah' , 'muhrah01@gmail.com' ,'mugra@112', '0554040', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png'),
  ('Jumanah', 'juharbi@gmail.com'   ,'jharbi@019', '0554040', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png'),
  ('Marwa'  , 'marwa12o@gmail.com','skdfnksj', '0554040', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png');


CREATE TABLE offers
(
  id serial primary key,
  offer varchar,
  img varchar,
  provider_id int,
  customer_id int,
  FOREIGN KEY(provider_id) REFERENCES providers, 
  FOREIGN KEY(customer_id) REFERENCES customers 
);

INSERT INTO offers(offer, img, provider_id, customer_id)VALUES
  ('50%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png',1,4),
  ('40%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png',5,3),
  ('35%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png',3,2),
  ('20%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png',4,1),
  ('10%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png',2,3);



