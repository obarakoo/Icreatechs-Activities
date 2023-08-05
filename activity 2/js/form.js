document.addEventListener("DOMContentLoaded", function () {
  
    let loginContainer = document.querySelector(".loginContainer");
    let surveyContainer = document.querySelector(".surveyContainer");
    let contactContainer = document.querySelector(".contactContainer");

   
    function surveyClick() {
      surveyContainer.classList.remove("disabled");
      loginContainer.classList.add("disabled");
      contactContainer.classList.add("disabled");
    }

    function loginClick() {
      loginContainer.classList.remove("disabled");
      surveyContainer.classList.add("disabled");
      contactContainer.classList.add("disabled");
    }

    
    function contactClick() {
      contactContainer.classList.remove("disabled");
      loginContainer.classList.add("disabled");
      surveyContainer.classList.add("disabled");
    }

   
    let survey = document.getElementById("survey");
    survey.onclick = surveyClick;

   
    let login = document.getElementById("login_form");
    login.onclick = loginClick;

    
    let contact = document.getElementById("Contact-from");
    contact.onclick = contactClick;
  });