var submitButton = document.getElementById("btn");
submitButton.addEventListener("click", handleClick);

const email = document.getElementById("inputemail");
const passWord = document.getElementById("inputpass");
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var showPass = document.getElementById("checkbox");
var labelShow = document.getElementById("onpass");
labelShow.innerText = "Show password";
passWord.type = "password";

checkbox.addEventListener("change", function () {
  if (this.checked) {
    passWord.type = "text";
    labelShow.innerText = "Hide password";
  } else {
    passWord.type = "password";
    labelShow.innerText = "Show password";
  }
});

var formData = JSON.parse(localStorage.getItem("formData"));
console.log(formData);

JSON.parse(localStorage.getItem("formData")).some((data) =>
  console.log(data.pwd)
);

function signIn(e) {
  let email = document.getElementById("inputemail").value,
    pwd = document.getElementById("inputpass").value;

  let exist =
    formData.length >= 0 &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email.toLowerCase() && data.pwd == pwd
    );
  if (!exist) {
    alert("Incorrect login credentials");
   
  } if(exist) {
    window.location.href = "../HomePage.html";
  }
}

function handleClick(e) {
  var invalidEmail = document.getElementById("invalidemail");
  var invalidPass = document.getElementById("invalidpass");

  if (email.value == "") {
    invalidEmail.innerText = "Email is empty";
  } else if (!filter.test(email.value)) {
    invalidEmail.innerText = "Wrong email";
  } else {
    invalidEmail.innerText = "";
  }

  if (passWord.value == "") {
    invalidPass.innerText = "Password is empty";
  } else if (passWord.value.length < 6) {
    invalidPass.innerText = "Passwords must be at least 6 characters";
  } else {
    invalidPass.innerText = "";
  }

  if (
    !email.value == "" &&
    email != null &&
    filter.test(email.value) &&
    !passWord.value == "" &&
    passWord != null &&
    passWord.value.length >= 6
  ) {
    signIn(e);
  } else {
    e.preventDefault();
  }
}