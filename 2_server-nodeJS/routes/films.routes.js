const Router = require('express');
const router = new Router();
const filmsController = require(`../controller/films.controller`);

router.post('/film', filmsController.createFilms);
router.get('/film', filmsController.getFilms);
router.get('/film/:id', filmsController.getOneFilm);
router.put('/film', filmsController.updateFilms);
router.delete('/film/:id', filmsController.deleteFilms);




module.exports = router;