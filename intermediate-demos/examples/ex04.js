const ContactService = require('../service/contact-service-mongodb');

const cs = new ContactService();

var c1 = { name: 'Kiran', email: 'krian@example.com', city: 'Mumbai', phone: '7636363333' };

const pr = cs.addContact(c1);
// pr.then() --> handler for promise-resolved state
// pr.catch() --> handler for promise-rejected state

pr.then(id => {
    console.log('Promise is resolved');
    console.log('New id is', id);
})
.catch(err => {
    console.log('Promise is rejected: ', err)
})

console.log('End of ex04.js script');