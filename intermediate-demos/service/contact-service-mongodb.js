const mc = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://localhost';
const dbname = 'unisysdb';
const collection = 'contacts';

// helper function that gives a mongo-client and the collection as callback params
function getContactsCollection(callback) {
    // parameters for the callback function:
    // 1. err --> if any error exists
    // 2. client --> reference to the mongodb-client (for closing after work)
    // 3. contacts --> reference to the contacts collection in unisysdb
    mc.connect(url, (err, client) => {
        if (err) {
            callback(err); // no client and contacts since there is an error!
            return;
        }
        const db = client.db(dbname);
        const contacts = db.collection(collection);
        callback(null, client, contacts); // 1st arg is null because there is no error!
    });
}

class ContactService {

    addContact(contact) {
        return new Promise((resolve, reject) => {
            if (!contact || typeof contact !== 'object') {
                reject('contact was not supplied or was not an object!');
                return;
            }

            const requiredFields = ['name', 'email', 'phone', 'city'];
            const missingFields = [];

            requiredFields.forEach(function (field) {
                if (!(field in contact)) {
                    missingFields.push(field);
                }
            });

            if (missingFields.length !== 0) {
                reject('required fields missing: ' + missingFields.join());
                return;
            }

            // using the helper function
            getContactsCollection((err, client, contacts) => {
                if (err) {
                    reject(err);
                    client.close();
                    return;
                }

                contacts.insertOne(contact, (err, doc) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(doc.insertedId);
                    }
                    client.close();
                });
            });
        });
    }

    getAllContacts() {
        return new Promise((res, rej) => {
            getContactsCollection((err, client, contacts) => {
                if (err) {
                    rej(err);
                    client.close();
                    return;
                }

                contacts.find().toArray((err, data) => {
                    if (err) {
                        rej(err);
                    }
                    else {
                        res(data);
                    }
                    client.close();
                });
            });
        });
    }

    getContactById(id) {
        return new Promise((resolve, reject) => {
            if (!id || typeof id !== 'string') {
                reject('id was not supplied or was not a number');
                return;
            }

            // use the helper function
            getContactsCollection((err, client, contacts) => {
                if (err) {
                    reject(err);
                    client.close();
                    return;
                }

                try{
                    id = new ObjectId(id);
                }
                catch(err) {
                    reject(err);
                    client.close();
                    return;
                }

                contacts.findOne({ _id: id }, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                    client.close();
                });
            });
        });
    }
}

module.exports = ContactService;