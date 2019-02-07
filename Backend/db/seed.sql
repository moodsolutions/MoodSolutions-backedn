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
  password VARCHAR NOT NULL,
  phone VARCHAR,
  category VARCHAR,
  
  img varchar

  -- offer_id int,
  -- FOREIGN KEY (offer_id)REFERENCES offers
);


  INSERT INTO providers
  (name, email, password, phone, category, img)
VALUES
  ('Kingdom Center', 'kigdomCenter@gmail.com', '12345' , '0554040', 'mall' , 'https://resizer-aw.devops.arabiaweather.com/resize?url=https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/KC-1.jpg&size=650x0&force_jpg=1'),
  ('Riyadh Park' , 'riyadh_parck@gmail.com'    , '1@457', '0554040', 'mall' , 'https://images.zawya.com/images/cia/zXlarge/180502052754EUWU.jpg'),
  ('Alfaisaliah' , 'faisaliah@gmail.com' , '45a@3', '0554040', 'restaurant' , 'https://aswatpost.com/wp-content/uploads/2018/07/The-Globe-Restaurant.jpg'),
  ('Easy store', 'easy-store@gmail.com'   , 'jharbi@019', '0554040', 'services', 'https://hrdiscussion.com/imgcache/29326.imgcache'),
  ('Elements'  , 'elements@gmail.com', 'skdfnksj', '0554040', 'restaurant', 'https://img.theculturetrip.com/768x/images/56-265400-elements-1.jpg'),
  ('Matic', 'Matic@gmail.com', 'skdfnksj', '0554040', 'services', 'https://pbs.twimg.com/media/Cx-U2e7XAAA2U-B.jpg'),
  ('Diamond', 'diamond@gmail.com', 'skdfnksj', '0554040', 'restaurant', 'https://pbs.twimg.com/media/C0GvS8iXUAAy7N3.jpg'),
  ('Hayat mall', 'hayatmall@gmail.com', 'skdfnksj', '0554040', 'mall', 'http://www.alandalus.com.sa/portals/0/images/Alandalus-Arabic/hayatmall-2.jpg'),
  ('Ezhalha', 'hayatmall@gmail.com', 'skdfnksj', '0554040', 'services', 'https://pbs.twimg.com/media/DO2WurTW0AAJ2eD.jpg');
  
CREATE TABLE offers
(
  id serial primary key,
  offer varchar,
  provider_id int,
  customer_id int,
  FOREIGN KEY(provider_id) REFERENCES providers,
  FOREIGN KEY(customer_id) REFERENCES customers
  
);

-- fetch the Places APi and get the id 

INSERT INTO offers
  (offer, provider_id, customer_id )
VALUES
  ('50%', 1, 4),
  ('40%', 5, 3),
  ('35%', 3, 2),
  ('20%', 4, 1),
  ('10%', 2, 3);
