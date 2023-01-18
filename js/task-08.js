const form = document.querySelector(".login-form");

function handleFormSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  };

const formData = {
  email,
  password,
};

  console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleFormSubmit);