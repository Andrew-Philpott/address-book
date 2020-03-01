import { Contact } from './../src/js/contact.js';
import { Address } from './../src/js/address.js';

describe('Contact', () =>{

  test('Should correctly create a Contact object with its firstname, lastname, phonenumber, email, and address set', () =>{
    let address = new Address("Olive Way", "Bellevue", "WA", 222);
    let contact = new Contact("Bob", "Joel", 222, "bob_joel@gmail.com", address);

    expect(contact.firstName).toEqual("Bob");
    expect(contact.lastName).toEqual("Joel");
    expect(contact.phoneNumber).toEqual(222);
    expect(contact.email).toEqual("bob_joel@gmail.com");
    expect(contact.address).toEqual(address);
  });
});
