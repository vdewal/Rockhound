function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Simple dummy check
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful! ✨";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials. Try again.";
  }

  return false;
}
