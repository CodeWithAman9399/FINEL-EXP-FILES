// Select the form and its elements
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("ph");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");
const genderSelect = document.getElementById("gender");
const termsCheckbox = document.getElementById("terms");
const commentsTextarea = document.getElementById("comments");

// Add a listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent form submission for validation
  let isValid = true;
  let errorMessage = "";

  // Validate Name
  if (nameInput.value.trim() === "") {
    isValid = false;
    errorMessage += "Name is required.\n";
  }

  // Validate Phone (10 digits)
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    isValid = false;
    errorMessage += "Phone number must be 10 digits.\n";
  }

  // Validate Email
  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    isValid = false;
    errorMessage += "Please enter a valid email address.\n";
  }

  // Validate Password (Minimum 6 characters)
  if (passwordInput.value.length < 6) {
    isValid = false;
    errorMessage += "Password must be at least 6 characters long.\n";
  }

  // Validate Date of Birth
  if (!dobInput.value) {
    isValid = false;
    errorMessage += "Date of Birth is required.\n";
  }

  // Validate Gender
  if (!genderSelect.value) {
    isValid = false;
    errorMessage += "Please select a gender.\n";
  }

  // Validate Terms and Conditions
  if (!termsCheckbox.checked) {
    isValid = false;
    errorMessage += "You must agree to the terms and conditions.\n";
  }

  // Validate Comments (Optional, but with length constraint)
  if (commentsTextarea.value.length > 200) {
    isValid = false;
    errorMessage += "Comments should not exceed 200 characters.\n";
  }

  // Show alert or allow form submission
  if (!isValid) {
    event.preventDefault(); // Stop the form from submitting
    alert(`Form submission failed due to the following reasons:\n\n${errorMessage}`);
  } else {
    alert("Form submitted successfully!");
  }
});
