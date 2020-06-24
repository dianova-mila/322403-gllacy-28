/. feedback ./

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

/. slider ./

var page = document.querySelector(".page-body");
var slider1 = document.querySelector(".slider__item_1");
var slider2 = document.querySelector(".slider__item_2");
var slider3 = document.querySelector(".slider__item_3");
var button1 = document.querySelector(".slider__button_1");
var button2 = document.querySelector(".slider__button_2");
var button3 = document.querySelector(".slider__button_3");

button1.addEventListener("click", function () {
    if(button2.classList.contains("slider__button_active")) {
        button2.classList.remove("slider__button_active");
    } else if(button3.classList.contains("slider__button_active")) {
        button3.classList.remove("slider__button_active");
    }
    button1.classList.add("slider__button_active");
    
    if(page.classList.contains("page-body_bg_blue")) {
        page.classList.remove("page-body_bg_blue");
    }
    if(page.classList.contains("page-body_bg_brown")) {
        page.classList.remove("page-body_bg_brown");
    }

    if(slider2.classList.contains("slider__item_active")) {
        slider2.classList.remove("slider__item_active");
    } else if (slider3.classList.contains("slider__item_active")) {
        slider3.classList.remove("slider__item_active");
    } 
    if (!slider1.classList.contains("slider__item_active")) {
        slider1.classList.add("slider__item_active");
    }
});

button2.addEventListener("click", function () {
    if(button1.classList.contains("slider__button_active")) {
        button1.classList.remove("slider__button_active");
    } else if(button3.classList.contains("slider__button_active")) {
        button3.classList.remove("slider__button_active");
    }
    button2.classList.add("slider__button_active");
    
    if(page.classList.contains("page-body_bg_brown")) {
        page.classList.remove("page-body_bg_brown");
    }
    if(!page.classList.contains("page-body_bg_blue")) {
        page.classList.add("page-body_bg_blue");
    }

    if(slider1.classList.contains("slider__item_active")) {
        slider1.classList.remove("slider__item_active");
    } else if (slider3.classList.contains("slider__item_active")) {
        slider3.classList.remove("slider__item_active");
    }

    if(!slider2.classList.contains("slider__item_active")) {
        slider2.classList.add("slider__item_active");
    } 
    
});

button3.addEventListener("click", function () {
    if(button2.classList.contains("slider__button_active")) {
        button2.classList.remove("slider__button_active");
    } else if(button1.classList.contains("slider__button_active")) {
        button1.classList.remove("slider__button_active");
    }
    button3.classList.add("slider__button_active");
    
    if(page.classList.contains("page-body_bg_blue")) {
        page.classList.remove("page-body_bg_blue");
    }
    if(!page.classList.contains("page-body_bg_brown")) {
        page.classList.add("page-body_bg_brown");
    }

    if(slider2.classList.contains("slider__item_active")) {
        slider2.classList.remove("slider__item_active");
    } else if (slider1.classList.contains("slider__item_active")) {
        slider1.classList.remove("slider__item_active");
    } 

    if (!slider3.classList.contains("slider__item_active")) {
        slider3.classList.add("slider__item_active");
    }
});