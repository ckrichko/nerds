var open = document.querySelector(".write-us");
var form = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content__close");
var yourname = form.querySelector("[name=yourname]");
var email = form.querySelector("[name=email]");
var message = form.querySelector("[name=message");
var storename = localStorage.getItem("yourname");
var storemail = localStorage.getItem("email");

open.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.add("modal-content-show");
  yourname.focus();

  if (storename) {
    yourname.value = storename;
  } else {
    (storemail)
    email.value = storemail;
  }
});

close.addEventListener("click", function(evt) {
  form.classList.remove("modal-content-show");
  if (form.classList.contains("modal-content-error")) {
    form.classList.remove("modal-content-error");
  }
});

form.addEventListener("submit", function(evt) {
  if (!yourname.value || !email.value || !message.value) {
    evt.preventDefault();
    form.classList.add("modal-content-error");
  } else {
    localStorage.SetItem("yourname", yourname.value);
    localStorage.SetItem("email", email.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains("modal-content-show")) {
      form.classList.remove("modal-content-show");
    }
  }
  if (form.classList.contains("modal-content-error")) {
    form.classList.remove("modal-content-error");
  }
});
