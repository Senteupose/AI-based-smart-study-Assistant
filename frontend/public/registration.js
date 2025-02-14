const registrationForm = document.getElementById("registration-form");
const loadingOverlay = document.getElementById("loading-overlay");
registrationForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fullname = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;
  const phoneNumberRegex = /^0\d{9}$/;

  showLoadingSpinner();
  
  // Basic client-side validation
  if (fullname == "" || email == "" || contact == "" || password == "" || confirmPassword == "") {
    displayFloatingCard('Please fill all the fields', 'error');
    hideLoadingSpinner();
    
    return;
  }

  if (!emailRegex.test(email)) {
    displayFloatingCard('Please provide a valid email address.', 'error');
    hideLoadingSpinner();
    return;
  }

  if (!phoneNumberRegex.test(contact)) {
    displayFloatingCard('Please provide a valid phone number.', 'error');
    hideLoadingSpinner();
    return;
  }

  if (!passwordRegex.test(password)) {
    displayFloatingCard('Password must be at least 6 characters.', 'error');
    hideLoadingSpinner();
    return;
  }

  if (password.trim() !== confirmPassword.trim()) {
    displayFloatingCard('Your passwords do not match.', 'error');
    hideLoadingSpinner();
    return;
  }

  // Send data to server
  try {
    const response = await fetch('/userregistration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        contact: contact,
        password: password
      }),
    });

    const result = await response.json();
    
    if (response.ok) {
      displayFloatingCard(result.message, 'success');
      setTimeout(() => {
        window.location.href = '/login';
      }, 6000); // Redirect after 10 seconds
    } else {
      displayFloatingCard(result.error, 'error');
    }

  } catch (error) {
    displayFloatingCard('An error occurred. Please try again later.', 'error');
  }
  hideLoadingSpinner();
});



// loading spinner

function showLoadingSpinner() {
    loadingOverlay.classList.add('active');
  }
  
  function hideLoadingSpinner() {
    loadingOverlay.classList.remove('active');
  }

function displayFloatingCard(message, type) {
  const card = document.createElement('div');
  card.className = `floating-card ${type}`;
  
  const icon = document.createElement('img');
  icon.className = 'card-icon';
  
  if (type === 'error') {
    icon.src = 'error.png';  // Assuming error.png is in the same directory
  } else if (type === 'success') {
    icon.src = 'tick.png';  // Assuming success.png is in the same directory
  }

  const text = document.createElement('span');
  text.className = 'card-message';
  text.textContent = message;

  const closeBtn = document.createElement('span');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '✕';
  closeBtn.onclick = () => {
    card.remove();
  };

  card.appendChild(icon);
  card.appendChild(text);
  card.appendChild(closeBtn);
  
  document.body.appendChild(card);

  // Automatically remove the card after 3 seconds
  setTimeout(() => {
    card.remove();
  }, 4000);
}