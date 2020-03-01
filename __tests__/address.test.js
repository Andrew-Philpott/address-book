import { Address } from './../src/js/address.js';

describe('Address', () =>{

  test('Should correctly create an Address object with its street, city, state, and zipcode set', () =>{
    let address = new Address("Olive Way", "Bellevue", "WA", 222);
    expect(address.street).toEqual("Olive Way");
    expect(address.city).toEqual("Bellevue");
    expect(address.state).toEqual("WA");
    expect(address.zipcode).toEqual(222);
  });
});
