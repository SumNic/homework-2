const express = require('express');
const filmsRouter = require('./routes/films.routes');
const genresRouter = require('./routes/genres.routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', filmsRouter);
app.use('/api', genresRouter);

app.listen(PORT, function() {
    console.log(`Server started: http://localhost:${PORT}`);
});