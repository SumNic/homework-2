const Router = require('express');
const router = new Router();
const genreController = require(`../controller/genres.controller`);

router.post('/genre', genreController.createGenre);
router.get('/genre', genreController.getGenre);
router.get('/genre/:id', genreController.getOneGenre);
router.put('/genre', genreController.updateGenre);
router.delete('/genre/:id', genreController.deleteGenre);




module.exports = router;