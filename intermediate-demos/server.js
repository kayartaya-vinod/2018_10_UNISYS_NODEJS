const express = require('express');
const port = 4321;
const ContactService = require('./service/contact-service-mongodb');
const cs = new ContactService();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // reads+converts the request payload (JSON) into a JS object

// ENABLE CORS 
app.use((req, resp, next) => { 
    resp.header('Access-Control-Allow-Origin', '*');
    resp.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    resp.header('Access-Control-Allow-Headers', '*');
    next();
});


// HTTP GET method handler for a specific URI (uniform resource identifier)
app.get('/api/contacts/', async (req, resp) => {

    try {
        const data = await cs.getAllContacts();
        resp.json(data);
    } catch (error) {
        resp.json(error);
    }

});

app.get('/api/contacts/:id', async (req, resp) => {
    const id = req.params.id;
    try {
        const contact = await cs.getContactById(id);
        resp.json(contact);
    } catch (error) {
        resp.json(error);
    }
});

// app.get('/api/contacts/:id', (req, resp) => {
//     const id = req.params.id;
//     cs.getContactById(id)
//         .then(data => resp.json(data))
//         .catch(err => resp.json(err));
// });

app.post('/api/contacts/', (req, resp) => {
    cs.addContact(req.body)
        .then(data => {
            let output = {};
            output.id = data;
            output.address = `http://localhost:${port}/api/contacts/${data}`;
            resp.json(output);
        })
        .catch(err => resp.json(err));
});



app.listen(port, () => console.log(`Server started at http://localhost:${port}/`));

console.log('Starting the server, kindly wait...');