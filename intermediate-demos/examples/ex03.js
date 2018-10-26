const mc = require('mongodb').MongoClient;

const url = 'mongodb://localhost';

mc.connect(url, (err, client) => {
    if (err) {
        console.error('There was an error while connecting to MongoDB.');
        throw err;
    }

    const db = client.db('unisysdb');

    console.log('DB Connection successful!');
    const contacts = db.collection('contacts');

    contacts.find().toArray((err, data) => { 
        if(err) {
            console.log('There was an error while getting contacts data.');
            throw err;
        }

        console.log('Here are the contacts: ');
        console.log(data);
        client.close();
    });

});

console.log('End of ex03.js');