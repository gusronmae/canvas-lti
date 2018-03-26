const express = require('express');
const app = express();

const LISTEN_PORT = 4567;

app.get('/', (req, res) => res.send("Hello bajs, how very nice of you to drop in"));


app.listen(LISTEN_PORT, () => console.log('Listening on port ' + LISTEN_PORT));