const ContactService = require('../service/contact-service');
const assert = require('assert');
const expect = require('chai').expect;

// test suite (may consists of other test suites or spces)
describe('Testing ContactService functionalities: ', function () {

    let service;

    beforeEach(function () {
        service = new ContactService();
    });

    // nested test suite
    describe('Testing addContact() function: ', function () {

        // test spec (contains one or more assertions)
        it('should add a contact for valid inputs', function () {

            let n1 = service.getAllContacts().length;
            let contact = {
                name: 'Vinod', email: 'vinod@vinod.co',
                city: 'Bangalore', phone: '9731424784'
            };
            service.addContact(contact);
            let n2 = service.getAllContacts().length;
            assert.equal(n2, n1 + 1);
        });

        // test spec (contains one or more assertions)
        it('should add a contact for valid inputs', function () {
            let contact = {
                name: 'Shyam', email: 'shyam@exapmle.com',
                city: 'Bangalore', phone: '9731424784'
            };
            service.addContact(contact);
            let n = service.getAllContacts().length;
            assert.equal(n, 3);
        });


        it('should throw error if nothing is supplied to addContact() function', function () {
            assert.throws(function () {
                service.addContact(); // should throw an exception for the test to pass.
            });
        });

    });

    describe('Testing getContactById() function', function () {
        it('should fetch an existing contact', function () {
            const c = service.getContactById(1);
            expect(c).to.be.a('object');
            expect(c).to.have.property('name').to.equal('Vinod');
            expect(c).to.have.property('email').to.equal('vinod@vinod.co');
        });

    });
});