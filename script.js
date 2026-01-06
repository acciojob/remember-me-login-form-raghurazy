//your JS code here. If required.
// Get references to elements
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

// Check for saved credentials on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  }
});

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingButton.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingButton.style.display = "none";
  }
});

// Handle existing user login
existingButton.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
