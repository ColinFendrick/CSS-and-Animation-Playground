const express = require('express');
const app = express();
const port = 3030;

const previewData = require('./preview');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.get('/healthcheck', (req, res) => {
	res.send('Healthy');
});

app.get('/:country', previewData);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
