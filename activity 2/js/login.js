let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let tittle = document.getElementById("tittle");

signinbtn.onclick = function () {
  nameField.style.maxHeight = "0";
  tittle.innerHTML = "Sign in";
  signupbtn.classList.add("disable");
  signinbtn.classList.remove("disable");  
  
};

signupbtn.onclick = function () {
  nameField.style.maxHeight = "65px";
  tittle.innerHTML = "Sign up";
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");
  
};





