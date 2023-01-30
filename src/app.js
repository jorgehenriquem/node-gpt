const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('OK');
})

var routes = require('./api/routes/routes');

routes(app);

app.listen(3000); 