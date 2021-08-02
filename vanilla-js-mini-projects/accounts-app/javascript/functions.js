let views = document.querySelectorAll(".view");
let accountsTableBody = document.querySelector("#accountsTableBody");

let nameEdit = document.querySelector("#accNameEdit");
let lastNameEdit = document.querySelector("#accLastnameEdit");
let emailEdit = document.querySelector("#accEmailEdit");
let phoneEdit = document.querySelector("#accPhoneEdit");

let id;

const deleteAccount = (node, array) => {
  let id = node.getAttribute("data-id");
  array.splice(id, 1);
  console.log(array);
  createAccountsTable(array);
  showView("accountsView");
};

const editAccount = (node, array) => {
  id = node.getAttribute("data-id");
  let selectedAccount = array[id];
  nameEdit.value = selectedAccount.name;
  lastNameEdit.value = selectedAccount.lastname;
  emailEdit.value = selectedAccount.email;
  phoneEdit.value = selectedAccount.phone;
  showView("editAccountsView");
};

const saveEditedAccount = (array) => {
  console.log(array);
  console.log(id);
  const editedAccount = {
    id: array[id].id,
    name: nameEdit.value,
    lastname: lastNameEdit.value,
    email: emailEdit.value,
    phone: phoneEdit.value,
  };
  array[id] = editedAccount;
  createAccountsTable(array);
  showView("accountsView");
};

const createAccountsTable = (array) => {
  let htmlAccounts = ``;
  array.forEach((element, index) => {
    const account = element;
    htmlAccounts += `
    <tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.lastname}</td>
        <td>${account.email}</td>
        <td>${account.phone}</td>
        <td><button data-id="${index}" class="edit-btn btn btn-sm btn-warning form-control">Edit</button></td>
        <td><button data-id="${index}" class="delete-btn btn btn-sm btn-danger form-control">Delete</button></td>
    </tr>`;
  });
  accountsTableBody.innerHTML = htmlAccounts;
  let allEditBtns = document.querySelectorAll(".edit-btn");
  let allDeleteBtns = document.querySelectorAll(".delete-btn");

  [...allEditBtns].forEach((element) => {
    element.addEventListener("click", () => {
      editAccount(element, array);
    });
  });
  [...allDeleteBtns].forEach((element) => {
    element.addEventListener("click", () => {
      deleteAccount(element, array);
    });
  });
};

const showView = (e, nodeHandler) => {
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }
  if (e instanceof Event) {
    e.preventDefault();
    id = `#${nodeHandler.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
  } else {
    document.querySelector(`#${e}`).style.display = "block";
  }
  console.log(id);
};

const addAccount = (arr, name, lastname, email, phone) => {
  let accName = name.value;
  let accLastname = lastname.value;
  let accEmail = email.value;
  let accPhone = phone.value;
  const newAccount = {
    id: arr.length + 1,
    name: accName,
    lastname: accLastname,
    email: accEmail,
    phone: accPhone,
  };
  arr.push(newAccount);
  name.value = "";
  lastname.value = "";
  email.value = "";
  phone.value = "";
};

const save = (array) => {
  localStorage.db = JSON.stringify(array);
};

export { createAccountsTable, showView, addAccount, saveEditedAccount, save };
