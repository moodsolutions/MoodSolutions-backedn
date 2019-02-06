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
  lon DOUBLE PRECISION

);
INSERT INTO customers
  (name, email, phone,lon,lat)
VALUES
  ('hamoud', 'alano@gmail.com', '0554040', 46.75280525511687, 24.658938094581643),
  ('Ibrahim', 'ibrao@gmail.com', '0506624', 46.719846270787116, 24.69013561957955),
  ('Sara', 'sarah21o@gmail.com', '0548234', 46.664225025464816, 24.70043312245636),
  ('Khalid', 'kld_s@gmail.com', '05553053', 46.719846270787116, 24.658938094581643);



CREATE TABLE providers
(
  id serial primary key,
  name varchar,
  email varchar,
  password_digest VARCHAR NOT NULL,
  phone VARCHAR,
  category VARCHAR,
  img varchar,
  placeID int
  -- offer_id int,
  -- FOREIGN KEY (offer_id)REFERENCES offers
);




INSERT INTO providers
  (name, email, password_digest, phone,type, img , placeID)
VALUES
  ('Alanoud', 'noudi.mss@gmail.com', 'anoud@95', '0554040','mall','https://resizer-aw.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/KC-1.jpg&size=650x0&force_jpg=1',1),
  ('HAmoud', 'hamou@gmail.com', 'hammd@21', '0554040','restaurant','https://images.zawya.com/images/cia/zXlarge/180502052754EUWU.jpg',2),
  ('Muhrah', 'muhrah01@gmail.com', 'mugra@112', '0554040','entertainment','https://aswatpost.com/wp-content/uploads/2018/07/The-Globe-Restaurant.jpg',3),
  ('Jumanah', 'juharbi@gmail.com', 'jharbi@019', '0554040','services', 'https://i.ytimg.com/vi/zybgfvVUYbU/maxresdefault.jpg',4),
  ('Marwa', 'marwa12o@gmail.com', 'skdfnksj', '0554040','mall', 'https://img.theculturetrip.com/768x/images/56-265400-elements-1.jpg',5);


CREATE TABLE offers
(
  id serial primary key,
  offer varchar,
  img varchar,
  provider_id int,
  customer_id int,
  place_id int,
  FOREIGN KEY(provider_id) REFERENCES providers,
  FOREIGN KEY(customer_id) REFERENCES customers,
  FOREIGN KEY(place_id) REFERENCES providers
);

-- fetch the Places APi and get the id 

INSERT INTO offers
  (offer, img, provider_id, customer_id )
VALUES
  ('50%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png', 1, 4),
  ('40%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png', 5, 3),
  ('35%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png', 3, 2),
  ('20%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png', 4, 1),
  ('10%', 'https://static.giantbomb.com/uploads/scale_small/13/135472/1891758-001bulbasaur.png', 2, 3);



