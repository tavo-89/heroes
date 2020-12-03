const express = require('express');
const herosRouter = require('./routes/heroes')
const mainRouter = require('./routes/main');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

app.get('/', mainRouter);

app.get('/heroes', herosRouter);

app.get('/heroes/detalle/:id', herosRouter);

app.get('/heroes/detalle/:id/:ok?', herosRouter);

app.get('/creditos', mainRouter)

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, tenemos un problemas!');
});