// ===== Hardcoded Demo Accounts =====
const demoAccounts = {
  "admin@rjcouriers.com": "1234",
  "user@rjcouriers.com": "1234"
};

// ===== Tab Switching =====
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginBox = document.getElementById("loginBox");
const registerBox = document.getElementById("registerBox");

loginTab.addEventListener("click", () => {
  loginBox.classList.remove("hidden");
  registerBox.classList.add("hidden");
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
});

registerTab.addEventListener("click", () => {
  registerBox.classList.remove("hidden");
  loginBox.classList.add("hidden");
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
});

// ===== Login Form =====
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (email in demoAccounts && demoAccounts[email] === password) {
    alert(`✅ Login successful as ${email}`);
    localStorage.setItem("loggedIn", "true"); // Save login status
    window.location.href = "../gateway/index.html"; // Redirect to gateway
  } else {
    alert("❌ Invalid email or password. Try again.");
  }
});

// ===== Register Form =====
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (name && email && password) {
    if (email in demoAccounts) {
      alert("⚠️ This email is already registered!");
    } else {
      demoAccounts[email] = password;
      alert(`✅ Registered successfully! You can now log in as ${email}`);
      document.getElementById("registerForm").reset();
      loginTab.click(); // Switch back to login after registration
    }
  } else {
    alert("❌ Please fill all fields");
  }
});
