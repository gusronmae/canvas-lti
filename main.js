const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const LISTEN_PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));

// The path for 'Account Navigation'
app.get('/', (req, res) => res.send('Magnus är så go och gla, när han äter chokela'));
app.post('/helloworld', (req, res) => {

    res.send('Testing, Testing');
});

// The path for when a user clicks course menu item on the left
app.post('/launch', (req, res) => {
    console.log(JSON.stringify(req.body));

    res.send('Hejsan svejsan');
});

app.listen(LISTEN_PORT, () => console.log('Listening on port ' + LISTEN_PORT));