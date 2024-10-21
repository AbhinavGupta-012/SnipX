
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

  if (username === "" || email === "" || password === "") {
      alert("Please fill in all the fields.");
  } else {
       alert("Form submitted successfully!");
  }
});

document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault(); 

  const loginUsername = document.getElementById('loginUsername').value.trim();
  const loginPassword = document.getElementById('loginPassword').value.trim();
  const rememberMe = document.getElementById('rememberMe').checked;

  if (loginUsername === "" || loginPassword === "") {
      alert("Please fill in both username and password.");
  } else {
      if (rememberMe) {
        
          localStorage.setItem('username', loginUsername);
          localStorage.setItem('password', loginPassword);
          localStorage.setItem('rememberMe', true);
      } else {
       
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.setItem('rememberMe', false);
      }

      alert("Login successful! Username and Password remembered.");
  }
});


window.addEventListener('DOMContentLoaded', (event) => {
  const remembered = localStorage.getItem('rememberMe') === 'true';
  if (remembered) {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');
      
      if (savedUsername) {
          document.getElementById('loginUsername').value = savedUsername;
      }
      if (savedPassword) {
          document.getElementById('loginPassword').value = savedPassword;
      }
      document.getElementById('rememberMe').checked = true;
  }
});
