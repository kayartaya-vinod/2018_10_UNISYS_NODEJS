const ContactService = require('../service/contact-service-async');

console.log('Start of ex01.js')

const cs = new ContactService();
let cnt = {
    name: 'James',
    email: 'james@exmaple.com',
    phone: '9844083934',
    city: 'Bengaluru'
};

cs.addContact(cnt, (err, contact) => {
    if (err) {
        console.log('There was an error: ', err);
    }
    else {
        console.log('Here is the newly added contact: ', contact)
    }
});

console.log('End of ex01.js execution.')
