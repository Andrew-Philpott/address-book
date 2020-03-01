import { AddressBook } from "./js/address-book.js";
import { Contact } from "./js/contact.js";
import { Address } from "./js/address.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import addressBookImg from "./img/addressbook.jpg";

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    console.log(contact.firstName);
    htmlForContactInfo += `<li><span id='${contact.id}'>${contact.firstName} ${contact.lastName}</span></li>`;
  });
  contactsList.html(htmlForContactInfo);
}

function showContact(addressBook, contactId) {
  let contact = addressBook.findContact(contactId);
  let showContact = $("div#show-contact");
  showContact.empty();
  let htmlForShowingContactDetails = "";
  htmlForShowingContactDetails += `<h2>${contact.fullName()}</h2>`;
  htmlForShowingContactDetails += `<p>Phone Number: <span class='phone-number'>${contact.phoneNumber}</span></p>`;
  htmlForShowingContactDetails += `<p>Email: <span class='email'>${contact.email}</span></p>`;
  htmlForShowingContactDetails += `<p>Address: <span class='address'>${contact.address.street} ${contact.address.city} ${contact.address.state}, ${contact.address.zipcode}`;
  let backButton = $("#contacts-list-button");
  backButton.after(
    `<button id=${contact.id} class='delete-button btn btn-primary'>Remove Contact</button>`
  );
  showContact.html(htmlForShowingContactDetails);
}

function attachImages() {
  let addressHeader = $("#addressbook-header");
  let imageHtml = `<img src=${addressBookImg} >`;
  addressHeader.append(imageHtml);
}

function attachContactListeners(addressBook) {
  $("#home-link").on("click", function() {
    $("#add-contact-container").hide();
    $("#contacts-container").hide();
    $("#home-container").show();
  });
  $("#add-contact-link").on("click", function() {
    $("#contacts-container").hide();
    $("#home-container").hide();
    $("#add-contact-container").show();
  });
  $("#contacts-link").on("click", function() {
    $("#home-container").hide();
    $("#add-contact-container").hide();
    $("#contacts-container").show();
    if (addressBook.contacts.length === 0) {
      $("#contacts-list").append(
        "<h1 id='no-result-text'>There are no contacts in your addressbook yet.</h1>"
      );
    } else {
      $("#no-result-text").remove();
      displayContactDetails(addressBook);
    }
  });
  $("#contacts-container ul#contacts").on("click", "span", function() {
    $("#contacts-list").hide();
    showContact(addressBook, this.id);
    $("#show-contact").show();
    $("#contacts-list-button").show();
  });

  $("#contacts-container #contacts-list-button").on("click", function() {
    $("#show-contact").hide();
    $("#contacts-list-button").hide();
    $(".delete-button").remove();
    $("#contacts-list").show();
  });

  $("#contact-buttons").on("click", ".delete-button", function() {
    addressBook.deleteContact(this.id);
    $("#contacts-list-button").hide();
    $(this).remove();
    $("#show-contact").hide();
    $("#contacts-list").show();
    displayContactDetails(addressBook);
  });
}

$(document).ready(function() {
  let addressBook = new AddressBook();
  attachContactListeners(addressBook);
  attachImages();

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

    let inputtedAddressList = new Address(
      inputtedStreet,
      inputtedCity,
      inputtedState,
      inputtedZipcode
    );
    let newContact = new Contact(
      inputtedFirstName,
      inputtedLastName,
      inputtedPhoneNumber,
      inputtedEmail,
      inputtedAddressList
    );
    addressBook.addContact(newContact);
  });
});
