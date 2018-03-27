const express = require('express');
const bodyParser = require('body-parser');
const lti = require('ims-lti');
const app = express();

const LISTEN_PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));

// The path for account menu item (the one furthest to the left) (account navigation)
// Only visible by administrators
app.get('/', (req, res) => {
    console.log('fsdufds');

    res.send('Magnus är så go och gla, när han äter chokela')
});

// The path for when a user clicks course menu item on the left (course navigation)
app.post('/launch', (req, res) => {
    const { 
        oauth_nonce,
        oauth_consumer_key,
        oauth_signature,
        oauth_signature_method,
        oauth_timestamp,
        oauth_callback,
     } = req.body;
 
    const provider = new lti.Provider(oauth_consumer_key, 2);
    
    provider.valid_request(req, (err, isValid) => {
        if(!isValid) {
            console.log('Error in validating request');
            res.send(err.message);
        } else {
            console.log('Request is validated!!');
            const roles = getRolesList(req.body.roles);
            const message = `You have the following roles: ${req.body.roles}`;
            res.send(message);
        }
    });
});

app.listen(LISTEN_PORT, () => console.log('Listening on port ' + LISTEN_PORT));

function getRolesList(rolesStr) {
    let result = rolesStr.split(',');

    return result.map((role) => {
        let rolName = role.split('/')[role.length-1];

        return rolName;
    });
}