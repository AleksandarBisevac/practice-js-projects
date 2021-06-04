/*
obrada podataka po sistemu CRUD.
CRUD -> Create, Read, Update & Delete
*/
/*
Task needs refactoring done, and some additional styling.
*/
(function () {
  var accBtn = document.querySelector("#accBtn");
  var addAccBtn = document.querySelector("#addAccBtn");
  var editDelBtn = document.querySelector("#editDelBtn");
  var mainView = document.querySelector("#mainView");
  var mainBody = document.querySelector("#mainBody");
  var formView = document.querySelector("#formView");
  var saveBtn = document.querySelector("#saveBtn");
  var accId = document.querySelector("#accID");
  var accName = document.querySelector("#accName");
  var accDeposit = document.querySelector("#accDeposit");
  var accCard = document.querySelector("#accCard");
  var editView = document.querySelector("#editView");
  var editBody = document.querySelector("#editBody");
  var editFormView = document.querySelector("#editFormView");
  var eaccId = document.querySelector("#eaccID");
  var eaccName = document.querySelector("#eaccName");
  var eaccDeposit = document.querySelector("#eaccDeposit");
  var eaccCard = document.querySelector("#eaccCard");
  var editBtn = document.querySelector("#editBtn");
  var id;
  var dataBase = [
    {
      id: "1",
      name: "Aleksandar",
      deposit: 12000,
      cCard: "Master",
    },
    {
      id: "2",
      name: "Marija",
      deposit: 17850,
      cCard: "Visa",
    },
  ];

  function Account(id, name, deposit, card) {
    this.id = id;
    this.name = name;
    this.deposit = deposit;
    this.cCard = card;
  }

  addAccBtn.addEventListener("click", showForm);
  accBtn.addEventListener("click", showMainView);
  saveBtn.addEventListener("click", saveAccount);
  editDelBtn.addEventListener("click", showEditView);
  editBtn.addEventListener("click", changeAccount);

  createTable();

  function createTable() {
    var text = "";
    dataBase.forEach((element) => {
      text += "<tr>";
      text += "<td>" + element.id + "</td>";
      text += "<td>" + element.name + "</td>";
      text += "<td>" + element.deposit + "</td>";
      text += "<td>" + element.cCard + "</td>";
      text += "</tr>";
    });
    mainBody.innerHTML = text;
  }

  function createEditTable() {
    var text = "";
    dataBase.forEach((element, index) => {
      text += "<tr>";
      text += "<td>" + element.id + "</td>";
      text += "<td>" + element.name + "</td>";
      text += "<td>" + element.deposit + "</td>";
      text += "<td>" + element.cCard + "</td>";
      text +=
        "<td><button data-id='" +
        index +
        "' class='btn btn-warning edit'>Edit</button></td>";
      text +=
        "<td><button id='" +
        index +
        "'class='btn btn-danger delete'>Delete</button></td>";
      text += "</tr>";
    });
    editBody.innerHTML = text;
    var deleteBtns = document.querySelectorAll(".delete");
    var editBtns = document.querySelectorAll(".edit");
    deleteBtns.forEach((element) => {
      element.addEventListener("click", deleteAccount);
    });
    editBtns.forEach((element) => {
      element.addEventListener("click", editAccount);
    });
  }

  function editAccount() {
    formView.style.display = "none";
    mainView.style.display = "none";
    editView.style.display = "none";
    editFormView.style.display = "block";
    //global var id, can be seen through global scope
    id = this.getAttribute("data-id");
    eaccId.value = dataBase[id].id;
    eaccName.value = dataBase[id].name;
    eaccDeposit.value = dataBase[id].deposit;
    eaccCard.value = dataBase[id].cCard;
  }

  function changeAccount() {
    var accId = eaccId.value;
    var accName = eaccName.value;
    var accDeposit = eaccDeposit.value;
    var accCard = eaccCard.value;
    dataBase[id] = new Account(accId, accName, accDeposit, accCard);
    createTable();
    showMainView();
  }

  function deleteAccount() {
    var id = this.id;
    dataBase.splice(id, 1);
    createTable();
    showMainView();
  }

  function showForm() {
    formView.style.display = "block";
    mainView.style.display = "none";
    editView.style.display = "none";
    editFormView.style.display = "none";
  }
  function showMainView() {
    formView.style.display = "none";
    editView.style.display = "none";
    editFormView.style.display = "none";
    mainView.style.display = "block";
  }
  function showEditView() {
    createEditTable();
    mainView.style.display = "none";
    formView.style.display = "none";
    editFormView.style.display = "none";
    editView.style.display = "block";
  }

  function saveAccount() {
    var id = accId.value;
    var name = accName.value;
    var deposit = accDeposit.value;
    var card = accCard.value;

    var newAccount = new Account(id, name, deposit, card);
    dataBase.push(newAccount);
    createTable();
    showMainView();
  }
  console.log(dataBase);
})();
