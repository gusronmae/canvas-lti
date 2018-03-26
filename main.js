const express = require('express');
const app = express();

const LISTEN_PORT = 4567;
// const appId = 'dd5b310b-2655-4037-8f16-847f16a585eb';

app.get('/', (req, res) => res.send("Is this working?"));
app.post('/helloworld', (req, res) => {

    res.send('Testing, Testing');
});
app.post('/launch', (req, res) => res.send('Testing again'));


app.listen(LISTEN_PORT, () => console.log('Listening on port ' + LISTEN_PORT));