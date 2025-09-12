// auth.js

// 🔐 Check if user is logged in (for QR page)
function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn !== "true") {
    window.location.href = "index.html"; // Redirect if not logged in
  }
}

// 🚪 Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

