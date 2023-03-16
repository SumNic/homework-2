const db = require('../db');
class GenreController {
    async createGenre(req, res) {
        
        const {name_genre} = req.body;
        const newGenre = await db.query('INSERT INTO genre (name_genre) VALUES ($1) RETURNING *', 
            [name_genre]);
    
        res.json(newGenre.rows[0])
    }
    async getGenre(req, res) {
        const genres = await db.query('SELECT * FROM genre');
        res.json(genres.rows);
    }
    async getOneGenre(req, res) { 
        const id = req.params.id;
        const genre = await db.query(`SELECT f.name_film, f.production_year, g.name_genre FROM genre AS g 
                                        JOIN genre_films AS gf ON g.genre_id = gf.fk_genre_id AND gf.fk_genre_id = $1
                                        JOIN films AS f ON f.film_id = gf.fk_film_id`, [id]);
        res.json(genre.rows);
    }
    async updateGenre(req, res) {
        const {name_genre, genre_id} = req.body;
        const newGenre = await db.query('UPDATE genre set name_genre = $1 WHERE  genre_id = $2 RETURNING *', 
            [name_genre, genre_id]);
    
        res.json(newGenre.rows[0])
    }
    async deleteGenre(req, res) {
        const id = req.params.id;
        const genre = await db.query('DELETE FROM genre WHERE genre_id = $1', [id]);
        res.json(genre.rows[0]);
    }
}

module.exports = new GenreController(); 