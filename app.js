const contentBox = document.querySelector(".content-box");
const errorIcon = document.querySelector(".content-box__error-icon");
const emailInput = document.querySelector(".content-box__email");
const emailSubmit = document.querySelector(".content-box__button");

const checkEmail = function (input) {
  const markup = `
  <p class="content-box__error">Please provide a valid email</p>`;

  console.log(contentBox.lastElementChild.classList.value);

  if (!input.validity.valid) {
    removeError();
    contentBox.insertAdjacentHTML("beforeend", markup);
    errorIcon.style.visibility = "visible";
  } else {
    location.reload();
  }
};

const removeError = function () {
  if (contentBox.lastElementChild.classList.value === "content-box__error") {
    contentBox.lastElementChild.remove();
    errorIcon.style.visibility = "hidden";
  }
};

emailInput.addEventListener("beforeinput", () => {
  removeError();
});

emailSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmail(emailInput);
});
