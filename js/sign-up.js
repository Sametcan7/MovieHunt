const navLogin = document.querySelector(".nav-login");
const loginSection = document.querySelector(".login-section");
const loginFormClose = document.querySelector(".login-form-close");
navLogin.addEventListener("click", () => {
  loginSection.classList.toggle("d-f");
  loginSection.classList.toggle("d-n");
});

loginFormClose.addEventListener("click", () => {
  loginSection.classList.toggle("d-f");
  loginSection.classList.toggle("d-n");
});

function goBack() {
  window.history.back();
}
