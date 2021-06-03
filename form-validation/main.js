var username = document.querySelector("input[type='text']");
var userPassword = document.querySelector("input[type='password']");
var userEmail = document.querySelector("input[type='email']");
var submitBtn = document.querySelector("input[type='submit']");
var myForm = document.querySelector("form");
var errorBox = document.querySelector("#errorBox");

function formValidation(e) {
  e.preventDefault();
  var userData = {
    uv: username.value,
    pv: userPassword.value,
    ev: userEmail.value,
  };
  var errors = [];

  if (userData.uv.length > 20 || userData.uv.length < 4) {
    username.style.border = "1px solid tomato";
    errors.push("Username is too short, or too long!");
  }
  if (userData.pv != "12345") {
    userPassword.style.border = "1px solid tomato";
    errors.push("Incorrect password!");
  }
  if (userData.ev.indexOf("@gmail.com") == -1) {
    userEmail.style.border = "1px solid tomato";
    errors.push("Only gmail users allowed!");
  }
  if (errors.length === 0) {
    myForm.submit();
  } else {
    errors.forEach((element) => {
      errorBox.innerHTML += "<p class='text-center'>" + element + "</p>";
    });
  }
}

submitBtn.addEventListener("click", formValidation);
