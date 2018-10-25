class ContactService {

    constructor() {
        this.data = {
            idConuter: 2,
            contacts: [
                { id: 1, name: 'Vinod', email: 'vinod@vinod.co', phone: '9731424784', city: 'Bangalore' },
                { id: 2, name: 'John Doe', email: 'jd@example.com', phone: '5551424722', city: 'Dallas' }
            ]
        };
    }

    getContactById(id) {
        if (!id || typeof id !== 'number') {
            throw new Error('id was not supplied or was not a number');
        }

        const contact = this.data.contacts.find(c => c.id === id);

        if (contact) return { ...contact };
        else return null;
    }

    addContact(contact) {
        if (!contact || typeof contact !== 'object') {
            throw new Error('contact was not supplied or was not an object!');
        }
        const requiredFields = ['name', 'email', 'phone', 'city'];
        const missingFields = [];

        requiredFields.forEach(function (field) {
            if (!(field in contact)) {
                missingFields.push(field);
            }
        });

        if (missingFields.length !== 0) {
            throw new Error('required fields missing: ' + missingFields.join());
        }

        contact.id = ++this.data.idConuter;
        this.data.contacts.push(contact);
        return { ...contact };
    }

    getAllContacts() {
        return [...this.data.contacts]; // spread operator
    }
}


module.exports = ContactService;