const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".login-container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.getElementById('signUpBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (username === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all the fields.");
  } else if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
  } else {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Sign up successful!");
  }
});

document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const loginUsername = document.getElementById('loginUsername').value.trim();
  const loginPassword = document.getElementById('loginPassword').value.trim();

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (loginUsername === "" || loginPassword === "") {
    alert("Please fill in both username and password.");
  } else if (loginUsername === storedUsername && loginPassword === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});

window.addEventListener('load', () => {
  const rememberedUsername = localStorage.getItem('rememberedUsername');
  const rememberedPassword = localStorage.getItem('rememberedPassword');

  if (rememberedUsername && rememberedPassword) {
    document.getElementById('loginUsername').value = rememberedUsername;
    document.getElementById('loginPassword').value = rememberedPassword;
    document.getElementById('rememberMe').checked = true;
  }

  // Initialize eye icons based on the type of input
  updateEyeIcon(document.querySelector('#loginPassword'), document.querySelector('#togglePassword'));
  updateEyeIcon(document.querySelector('#password'), document.querySelector('#toggleSignUpPassword'));
  updateEyeIcon(document.querySelector('#confirmPassword'), document.querySelector('#toggleConfirmPassword'));
});

const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#loginPassword');

togglePassword.addEventListener('click', function() {
  togglePasswordVisibility(passwordInput, this);
});

const toggleSignUpPassword = document.querySelector('#toggleSignUpPassword');
const signUpPasswordInput = document.querySelector('#password');

toggleSignUpPassword.addEventListener('click', function() {
  togglePasswordVisibility(signUpPasswordInput, this);
});

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');

toggleConfirmPassword.addEventListener('click', function() {
  togglePasswordVisibility(confirmPasswordInput, this);
});

function togglePasswordVisibility(inputField, icon) {
  const type = inputField.getAttribute('type') === 'password' ? 'text' : 'password';
  inputField.setAttribute('type', type);
  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
}

function updateEyeIcon(inputField, icon) {
  if (inputField.getAttribute('type') === 'password') {
    icon.classList.add('fa-eye-slash');
    icon.classList.remove('fa-eye');
  } else {
    icon.classList.add('fa-eye');
    icon.classList.remove('fa-eye-slash');
  }
}
