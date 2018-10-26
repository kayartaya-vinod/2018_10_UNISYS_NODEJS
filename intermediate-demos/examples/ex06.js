const ContactService = require('../service/contact-service-mongodb');
const cs = new ContactService();

const id = '5bd29c96282fd7d0a8542502';

cs.getContactById(id)
    .then(data => console.log('contact details:', data))
    .catch(err => console.error(err));

console.log('End of script ex06.js');
