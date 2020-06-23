var feedbackButton = document.querySelector(".map__button");
var feedback = document.querySelector(".feedback");
var feedbackClose = document.querySelector(".feedback__cross");
var feedbackForm = document.querySelector(".feedback__form");
var feedbackName = document.querySelector("#feedback-name-field");
var feedbackEmail = document.querySelector("#feedback-email-field");
var feedbackText = document.querySelector("#feedback-text-field")

var isStorageSupport = true;
var storageName = "";
var storageEmail = ""

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("feedback_show");

    if (storageName && storageEmail) {
        feedbackName.value = storageName;
        feedbackEmail.value = storageEmail;
        feedbackText.focus();
      } else {
        feedbackName.focus();
      } 
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("feedback_show");
    feedback.classList.remove("feedback_error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if(!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
        evt.preventDefault();
        feedback.classList.remove("feedback_error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("feedback_error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("email", feedbackEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedback.classList.contains("feedback_show")) {
        evt.preventDefault();
        feedback.classList.remove("feedback_show");
        feedback.classList.remove("feedback_error");
      }
    }
  });
