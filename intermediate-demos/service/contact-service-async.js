const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, 'contacts.json');

// All the functions of this class are supposed to be aysnc functions.
// Async functions do not return any value, but always receive a callback function as parameter
class ContactService {

    constructor() {
        try {
            this.data = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        } catch (error) {
            this.data = {
                idConuter: 2,
                contacts: [
                    { id: 1, name: 'Vinod', email: 'vinod@vinod.co', phone: '9731424784', city: 'Bangalore' },
                    { id: 2, name: 'John Doe', email: 'jd@example.com', phone: '5551424722', city: 'Dallas' }
                ]
            };
        }
    }

    // id is a numerical type
    // callback is a function, which is supposed to be executed
    // 1. if there is an error, callback is called using the error object
    // 2. if there is no error, callback is called with null (for error) and data as parameter
    // Do not throw exceptions for any kind of error, but communicate using the callback.
    // Only time when you throw an exception is when callback is not supplied or not function
    getContactById(id, callback) {
        if (!callback || typeof callback !== 'function') {
            throw new Error('Expected callback to be a function, but got ' + typeof (callback));
        }

        setTimeout(() => {
            if (!id || typeof id !== 'number') {
                let err = {};
                err.code = 1001;
                err.message = 'Id was not supplied or was not a number';
                callback(err); // no second argument (data)
                return;
            }

            let contact = this.data.contacts.find(c => c.id === id);
            if (!contact) contact = null;

            callback(null, contact); // no first argument (error)
        }, 0);
    }

    addContact(contact, callback) {
        if (!callback || typeof callback !== 'function') {
            throw new Error('Expected callback to be a function, but got ' + typeof (callback));
        }

        setTimeout(() => {
            if (!contact || typeof contact !== 'object') {
                let err = {};
                err.code = 1002;
                err.message = 'contact was not supplied or was not an object!';
                callback(err);
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
                let err = {};
                err.code = 1003;
                err.message = 'required fields missing: ' + missingFields.join();
                callback(err);
                return;
            }

            contact.id = ++this.data.idConuter;
            this.data.contacts.push(contact);

            fs.writeFile(filename, JSON.stringify(this.data), 'utf-8', (err, data)=>{
                if(err) {
                    callback(err);
                    return;
                }
                callback(null, contact);
            });

        }, 0);
    }
}

module.exports = ContactService;