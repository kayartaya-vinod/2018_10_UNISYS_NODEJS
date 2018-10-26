const ContactService = require('../service/contact-service-mongodb');
const cs = new ContactService();

cs.getAllContacts()
    .then(data => console.log(data))
    .catch(err => console.error(err));

console.log('End of script ex05.js');