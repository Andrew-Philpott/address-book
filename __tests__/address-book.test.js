import { AddressBook } from './../src/js/address-book.js';

describe('AddressBook', () =>{
  let addressBook;

  beforeEach(() => {
    addressBook = new AddressBook();
  });

  test('Should correctly create an AddressBook object with an empty contacts array and its current id set at 0', () =>{
    expect(addressBook.currentId).toEqual(0);
    expect(addressBook.contacts.length).toEqual(0);
  });
});
