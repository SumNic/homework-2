create TABLE films (
    film_id SERIAL PRIMARY KEY,
    name_film VARCHAR(255) NOT NULL,
    production_year INT
);

create TABLE genre(
    genre_id SERIAL PRIMARY KEY,
    name_genre VARCHAR(255) NOT NULL
);

create TABLE genre_films(
    fk_film_id INT REFERENCES films(film_id),
    fk_genre_id INT REFERENCES genre(genre_id),
    CONSTRAINT genre_films_pkey PRIMARY KEY (fk_film_id, fk_genre_id) 
);