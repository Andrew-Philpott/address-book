// Business Logic for AddressBook ---------
export class AddressBook {
  constructor() {
    this.contacts = [],
    this.currentId = 0;
  }

  addContact(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  }

  findContact(id) {
    for (let i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      }
    }
    return false;
  }

  deleteContact(id) {
    for (let i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          delete this.contacts[i];
          return true;
        }
      }
    }
    return false;
  }
}

// function AddressBook() {
//   this.contacts = [],
//   this.currentId = 0
// }
//
// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// }

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   };
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }

// Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber, email, address) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.phoneNumber = phoneNumber,
//   this.email = email,
//   this.address = address
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

// Business Logic for Address
// function Address(street, city, state, zipcode) {
//   this.street = street,
//   this.city = city,
//   this.state = state,
//   this.zipcode = zipcode
// }

// User Interface Logic
// var addressBook = new AddressBook();
//
// function displayContactDetails(addressBookToDisplay) {
//   var contactsList = $("ul#contacts");
//   var htmlForContactInfo = "";
//   addressBookToDisplay.contacts.forEach(function(contact) {
//     htmlForContactInfo += `<li><span id='${contact.id}'>${contact.firstName} ${contact.lastName}</span></li>`;
//   });
//   contactsList.html(htmlForContactInfo);
// };
//
// function showContact(contactId) {
//   var contact = addressBook.findContact(contactId);
//   var showContact = $("div#show-contact");
//   showContact.empty();
//   var htmlForShowingContactDetails = "";
//   htmlForShowingContactDetails += `<p>First Name: <span class='first-name'>${contact.firstName}</span></p>`;
//   htmlForShowingContactDetails += `<p>Last Name: <span class='last-name'>${contact.lastName}</span></p>`;
//   htmlForShowingContactDetails += `<p>Phone Number: <span class='phone-number'>${contact.phoneNumber}</span></p>`;
//   htmlForShowingContactDetails += `<p>Email: <span class='email'>${contact.email}</span></p>`;
//   htmlForShowingContactDetails += `<p>Address: <span class='address'>${contact.address.street} ${contact.address.city} ${contact.address.state}, ${contact.address.zipcode}`;
//   showContact.html(htmlForShowingContactDetails);
//   showContact.toggle();
// };
//
// function attachContactListeners() {
//   $("ul#contacts").on("mouseover mouseout", "span", function() {
//     showContact(this.id);
//   });
//
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// };
//
// function resetFields(inputArray) {
//   for (var i = 0; i < inputArray.length; i++) {
//     inputArray[i] = "";
//   }
//   return inputArray;
// }
// function resetAddAddressButton() {
//   $(".dropdown-content a").show();
// }
//
// $(document).ready(function() {
//   attachContactListeners();
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedPhoneNumber = $("input#new-phone-number").val();
//     var inputtedEmail = $("input#new-email").val();
//     var inputtedStreet = $("input#new-street").val();
//     var inputtedCity = $("input#new-city").val();
//     var inputtedState = $("#new-state").val();
//     var inputtedZipcode = $("input#new-zipcode").val();
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-phone-number").val("");
//     $("input#new-email").val("");
//     $("input#new-street").val("");
//     $("input#new-city").val("");
//     $("#new-state").val("");
//     $("input#new-zipcode").val("");
//
//     var inputtedAddressList = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZipcode);
//     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedAddressList);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook);
//     resetFields(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPhoneNumber);
//     resetAddAddressButton();
//   })
// })
