import { db } from "./db.js";
import {
  createAccountsTable,
  showView,
  addAccount,
  saveEditedAccount,
  save,
} from "./functions.js";

window.addEventListener("beforeunload", () => {
  save(db);
});

let allLink = document.querySelectorAll(".nav-link");

let nameInput = document.querySelector("#accNameAdd");
let lastNameInput = document.querySelector("#accLastnameAdd");
let emailInput = document.querySelector("#accEmailAdd");
let phoneInput = document.querySelector("#accPhoneAdd");
let addAccBtn = document.querySelector("#addAcc");
let editAccBtn = document.querySelector("#editAcc");

addAccBtn.addEventListener("click", () => {
  addAccount(db, nameInput, lastNameInput, emailInput, phoneInput);
  createAccountsTable(db);
  showView("accountsView", addAccBtn);
});

allLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    showView(e, element);
  });
});

editAccBtn.addEventListener("click", () => {
  saveEditedAccount(db);
});
createAccountsTable(db);
