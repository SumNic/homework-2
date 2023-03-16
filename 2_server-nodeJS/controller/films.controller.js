const db = require('../db');
class FilmsController {
    async createFilms(req, res) {
        
        const {name_film, production_year} = req.body;
        const newFilm = await db.query('INSERT INTO films (name_film, production_year) VALUES ($1, $2) RETURNING *', 
            [name_film, production_year]);
    
        res.json(newFilm.rows[0])
    }
    async getFilms(req, res) {
        const films = await db.query('SELECT * FROM films');
        res.json(films.rows);
    }
    async getOneFilm(req, res) {
        const id = req.params.id;
        const film = await db.query(`SELECT f.name_film, f.production_year, g.name_genre FROM films AS f 
                                        JOIN genre_films AS gf ON f.film_id = gf.fk_film_id AND gf.fk_film_id = $1
                                        JOIN genre AS g ON g.genre_id = gf.fk_genre_id`, [id]);
        res.json(film.rows);
    }
    async updateFilms(req, res) {
        const {film_id, name_film, production_year} = req.body;
        const newFilm = await db.query('UPDATE films set name_film = $1, production_year = $2 WHERE  film_id = $3 RETURNING *', 
            [name_film, production_year, film_id]);
    
        res.json(newFilm.rows[0])
    }
    async deleteFilms(req, res) {
        const id = req.params.id;
        const film = await db.query('DELETE FROM films WHERE film_id = $1', [id]);
        res.json(film.rows[0]);
    }
}

module.exports = new FilmsController();