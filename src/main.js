import { AddressBook } from './js/address-book.js';
import { Contact } from './js/contact.js';
import { Address } from './js/address.js';
// import { displayContactDetails } from './js/interface.js';
// import { attachContactListeners } from './js/interface.js';
// import { resetFields } from './js/interface.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += `<li><span id='${contact.id}'>${contact.firstName} ${contact.lastName}</span></li>`;
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(contactId) {
  let contact = addressBook.findContact(contactId);
  let showContact = $("div#show-contact");
  showContact.empty();
  let htmlForShowingContactDetails = "";
  htmlForShowingContactDetails += `<p>First Name: <span class='first-name'>${contact.firstName}</span></p>`;
  htmlForShowingContactDetails += `<p>Last Name: <span class='last-name'>${contact.lastName}</span></p>`;
  htmlForShowingContactDetails += `<p>Phone Number: <span class='phone-number'>${contact.phoneNumber}</span></p>`;
  htmlForShowingContactDetails += `<p>Email: <span class='email'>${contact.email}</span></p>`;
  htmlForShowingContactDetails += `<p>Address: <span class='address'>${contact.address.street} ${contact.address.city} ${contact.address.state}, ${contact.address.zipcode}`;
  showContact.html(htmlForShowingContactDetails);
  showContact.toggle();
}

function attachContactListeners() {
  $("ul#contacts").on("mouseover mouseout", "span", function() {
    showContact(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
}

// function resetFields(inputArray) {
//   for (let i = 0; i < inputArray.length; i++) {
//     inputArray[i] = "";
//   }
//   return inputArray;
// }

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    let inputtedFirstName = $("input#new-first-name").val();
    let inputtedLastName = $("input#new-last-name").val();
    let inputtedPhoneNumber = $("input#new-phone-number").val();
    let inputtedEmail = $("input#new-email").val();
    let inputtedStreet = $("input#new-street").val();
    let inputtedCity = $("input#new-city").val();
    let inputtedState = $("#new-state").val();
    let inputtedZipcode = $("input#new-zipcode").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("#new-state").val("");
    $("input#new-zipcode").val("");

    let inputtedAddressList = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZipcode);
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedAddressList);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
    //resetFields(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPhoneNumber);
    // resetAddAddressButton();
  });
});
