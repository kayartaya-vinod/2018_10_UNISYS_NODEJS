const ContactService = require('../service/contact-service-async');

console.log('Start of ex01.js')
const cs = new ContactService();

// cs.getContactById(); // throws exception
cs.getContactById("asd", (err, data) => {
    if (err) {
        console.log('There was an error: ', err);
    }
    else {
        console.log('Contact info: ', data);
    }
});

console.log('End of ex01.js execution.')