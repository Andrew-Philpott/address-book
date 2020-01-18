export class Contact {
  constructor(firstName, lastName, phoneNumber, email, address) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.phoneNumber = phoneNumber,
    this.email = email,
    this.address = address;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
