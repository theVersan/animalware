CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  id_contact_users INTEGER,
  name VARCHAR(50) NOT NULL DEFAULT 'NULL',
  email VARCHAR(50) NULL DEFAULT NULL,
  senha VARCHAR(30) NULL DEFAULT NULL,
  age INTEGER NOT NULL DEFAULT NULL,
  country VARCHAR(50) NOT NULL DEFAULT 'NULL',
  city VARCHAR(50) NOT NULL DEFAULT 'NULL',
  neighborhood VARCHAR(30) NULL DEFAULT NULL,
  gender VARCHAR(10) NOT NULL DEFAULT 'NULL',
  live_type VARCHAR(20) NOT NULL DEFAULT 'NULL',
  build_family VARCHAR(30) NOT NULL DEFAULT 'NULL',
  income VARCHAR(30) NOT NULL DEFAULT 'NULL',
  people_in_house VARCHAR(20) NOT NULL DEFAULT 'NULL',
  FOREIGN KEY (id_contact_users) REFERENCES contact_users(id)
);

CREATE TABLE contact_users (
  id SERIAL PRIMARY KEY,
  complete_name VARCHAR(50) NULL DEFAULT NULL,
  phone INTEGER NULL DEFAULT NULL,
  email VARCHAR(50) NULL DEFAULT NULL
);

CREATE TABLE have_dogs (
  id SERIAL PRIMARY KEY,
  id_contact_users INTEGER,
  id_users INTEGER NOT NULL,
  dog_name VARCHAR(60) NOT NULL DEFAULT 'NULL',
  dog_gender CHAR(1) NOT NULL DEFAULT 'NULL',
  owner BOOLEAN NOT NULL DEFAULT FALSE,
  neutered BOOLEAN NOT NULL DEFAULT FALSE,
  time_with_you VARCHAR(30) NOT NULL DEFAULT 'NULL',
  first_dog BOOLEAN NOT NULL DEFAULT FALSE,
  how_many_pets_in_home VARCHAR(30) NOT NULL DEFAULT 'NULL',
  dog_age VARCHAR(20) NOT NULL DEFAULT 'NULL',
  dog_breed VARCHAR(60) NOT NULL DEFAULT 'NULL',
  where_get VARCHAR(50) NOT NULL DEFAULT 'NULL',
  was_paid BOOLEAN NOT NULL DEFAULT FALSE,
  age_arrived VARCHAR(20) NOT NULL DEFAULT 'NULL',
  dog_personality TEXT NOT NULL DEFAULT 'NULL',
  id_dog_reason INTEGER NOT NULL,
  favorite_dog_traits TEXT NOT NULL DEFAULT 'NULL',
  people_in_decision VARCHAR(50) NOT NULL DEFAULT 'NULL',
  dog_not_home TEXT NOT NULL DEFAULT 'NULL',
  vet_frequency VARCHAR(50) NOT NULL DEFAULT 'NULL',
  dog_summary TEXT NOT NULL DEFAULT 'NULL',
  FOREIGN KEY (id_contact_users) REFERENCES contact_users(id),
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_dog_reason) REFERENCES dog_reason(id)
);

CREATE TABLE dog_reason (
  id SERIAL PRIMARY KEY,
  options TEXT NULL DEFAULT NULL
);

CREATE TABLE had_dogs_or_lived_with (
  id SERIAL PRIMARY KEY,
  id_users INTEGER NOT NULL,
  id_contact_users INTEGER NOT NULL,
  dog_name VARCHAR(60) NOT NULL DEFAULT 'NULL',
  dog_personality TEXT NOT NULL DEFAULT 'NULL',
  time_with_the_dog VARCHAR(60) NOT NULL DEFAULT 'NULL',
  first_dog_question BOOLEAN NOT NULL DEFAULT FALSE,
  pets_in_home VARCHAR(15) NOT NULL DEFAULT 'NULL',
  dog_arrived_age VARCHAR(50) NOT NULL DEFAULT 'NULL',
  neutered BOOLEAN NOT NULL DEFAULT FALSE,
  age_neutered VARCHAR(50) NOT NULL DEFAULT 'NULL',
  dog_breed VARCHAR(60) NOT NULL DEFAULT 'NULL',
  dog_origin VARCHAR(60) NULL DEFAULT NULL,
  dog_price VARCHAR(20) NULL DEFAULT NULL,
  Id_dog_reason INTEGER NOT NULL,
  first_impression_of_dog TEXT NOT NULL DEFAULT 'NULL',
  id_people_in_decision TEXT,
  most_like TEXT NULL DEFAULT NULL,
  dislike VARCHAR(200) NULL DEFAULT NULL,
  go_to_vet BOOLEAN NULL DEFAULT NULL,
  vet_frequency VARCHAR(60) NOT NULL DEFAULT 'NULL',
  last_contact VARCHAR(60) NULL DEFAULT NULL,
  dog_age_in_last_contatc VARCHAR(30) NULL DEFAULT NULL,
  reasons_of_last_contact VARCHAR(200) NOT NULL DEFAULT 'NULL',
  would_have_New_dog BOOLEAN NULL DEFAULT NULL,
  reason TEXT NOT NULL DEFAULT 'NULL',
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_contact_users) REFERENCES contact_users(id),
  FOREIGN KEY (Id_dog_reason) REFERENCES dog_reason(id),
  FOREIGN KEY (id_people_in_decision) REFERENCES people_in_decision(id)
);



CREATE TABLE dont_have_but_want (
  id SERIAL PRIMARY KEY,
  id_user INTEGER NULL DEFAULT NULL,
  dog_size VARCHAR(10) NULL DEFAULT NULL,
  dog_coat VARCHAR(10) NULL DEFAULT NULL,
  dog_breed VARCHAR(60) NULL DEFAULT NULL,
  dog_gender VARCHAR(10) NULL DEFAULT NULL,
  id_dog_reason INTEGER NULL DEFAULT NULL,
  thought_a_DogName BOOLEAN NULL DEFAULT NULL,
  dog_name VARCHAR(50) NULL DEFAULT NULL,
  prefer_Adopt_or_buy VARCHAR(10) NULL DEFAULT NULL,
  when_will_receive_the_dog VARCHAR(20) NULL DEFAULT NULL,
  personality_you_expect TEXT NOT NULL DEFAULT 'NULL',
  know_about_costs TEXT NULL DEFAULT null
);

CREATE TABLE dont_lived_and_dont_want (
  id SERIAL PRIMARY KEY,
  id_users INTEGER NULL DEFAULT NULL,
  why_dont_want TEXT NULL DEFAULT NULL,
  FOREIGN KEY (id_users) REFERENCES users(id)
);