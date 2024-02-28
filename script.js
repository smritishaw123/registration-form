const registrationForm = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Simple input validation
  if (username.length < 4) {
    errorMessage.textContent = 'Username must be at least 4 characters long.';
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,4}$/.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long.';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return;
  }

  // Replace this with your actual registration logic (e.g., sending data to a server)
  alert(`Successfully registered! Username: ${username}, Email: ${email}`);
});
