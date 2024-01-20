document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");
  const subjectInput = document.getElementById("subject");

  const contactButton = document.getElementById("contact-submit");
  const errorMessage = document.querySelector(".error-message");
  const errorName = document.querySelector(".error-name");
  const errorMail = document.querySelector(".error-mail");
  const successMessage = document.querySelector(".success-message");
  const failMessage = document.querySelector(".fail-message");

  console.log("test");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function sendContactMail() {
    const templateParams = {
      mail: emailInput.value,
      name: nameInput.value,
      message: messageInput.value,
      subject: subjectInput.value,
    };

    const serviceId = "service_i67j1hf";
    const templateId = "template_u7ixlz9";

    emailjs.send(serviceId, templateId, templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        successMessage.style.display = "block";
        failMessage.style.display = "none";
        resetForm();
      },
      function (error) {
        console.log("FAILED...", error);
        failMessage.style.display = "block";
      }
    );
  }

  function resetForm() {
    nameInput.value = "";
    messageInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    if (nameInput.value === "") {
      hideErrors();
      showError(nameInput, errorName, "Bitte trage einen Namen ein!");
    } else if (!validateEmail(emailInput.value)) {
      hideErrors();
      showError(emailInput, errorMail, "Bitte trage eine richtige E-Mail ein!");
    } else if (messageInput.value === "") {
      hideErrors();
      showError(messageInput, errorMessage, "Bitte trage eine Nachricht ein!");
    } else {
      sendContactMail();
      resetForm();
      hideErrors();
    }
  }

  function showError(input, errorElement, errorMessage) {
    input.style.border = "solid 2px red";
    errorElement.style.display = "block";
    errorElement.innerText = errorMessage;
  }

  function hideErrors() {
    nameInput.style.border = "none";
    emailInput.style.border = "none";
    messageInput.style.border = "none";
    errorName.style.display = "none";
    errorMail.style.display = "none";
    errorMessage.style.display = "none";
    failMessage.style.display = "none";
    successMessage.style.display = "none";
  }

  contactButton.addEventListener("click", handleFormSubmission);
});
