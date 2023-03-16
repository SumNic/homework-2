-- фильмы
create TABLE films (
    film_id SERIAL PRIMARY KEY,
    film_name VARCHAR(255) NOT NULL,
    production_year INT NOT NULL,
    country VARCHAR(255) NOT NULL,
    tegline TEXT NOT NULL,
    butget INT NOT NULL,
    marketing INT NOT NULL,
    us_fees INT NOT NULL,
    world_fees INT NOT NULL,
    release_dvd DATE,
    age INT NOT NULL,
    rating_mpaa VARCHAR(255) NOT NULL,
    time_film TIME
);

-- все участники создания фильма (по профессиям)
create TABLE person(
    person_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    profession VARCHAR(255) NOT NULL,
    fk_film_id INT REFERENCES films(film_id)
);

-- все актеры (главные роли и роли дубляжа)
create TABLE actors(
    actors_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    actors_role VARCHAR(255) NOT NULL
);

create TABLE actors_films(
    fk_film_id INT REFERENCES films(film_id),
    fk_actors_id INT REFERENCES actors(actors_id),
    CONSTRAINT actors_films_pkey PRIMARY KEY (fk_film_id, fk_actors_id) 
);

-- жанры
create TABLE genre(
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);

create TABLE genre_films(
    fk_film_id INT REFERENCES films(film_id),
    fk_genre_id INT REFERENCES genre(genre_id),
    CONSTRAINT genre_films_pkey PRIMARY KEY (fk_film_id, fk_genre_id) 
);

-- зрители по странам + премьеры в разных странах
create TABLE spectators(
    spectators_id SERIAL PRIMARY KEY,
    premiere_date_world  DATE,
    premiere_country VARCHAR(255) NOT NULL,
    number_of_spectators INT NOT NULL
);

create TABLE spectators_films(
    fk_film_id INT REFERENCES films(film_id),
    fk_spectators_id INT REFERENCES spectators(spectators_id),
    CONSTRAINT spectators_films_pkey PRIMARY KEY (fk_film_id, fk_spectators_id) 
);

-- прокатчик в России + премьера в России
create TABLE rental(
    rental_id SERIAL PRIMARY KEY,
    rental_name VARCHAR(255) NOT NULL,
    premiere_rus DATE
);

create TABLE rental_films(
    fk_film_id INT REFERENCES films(film_id),
    fk_rental_id INT REFERENCES rental(rental_id),
    CONSTRAINT rental_films_pkey PRIMARY KEY (fk_film_id, fk_rental_id) 
);