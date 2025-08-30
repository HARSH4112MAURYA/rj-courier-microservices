document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const issue = document.getElementById("issue").value;

  if (name && email && issue) {
    // Show success message
    document.getElementById("message").innerText = "✅ Ticket submitted successfully!";
    
    // Create ticket entry
    const ticketList = document.getElementById("ticketList");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> (${email}): <em>${issue}</em>`;
    ticketList.appendChild(li);

    // Reset form
    document.getElementById("supportForm").reset();
  } else {
    document.getElementById("message").innerText = "❌ Please fill all fields.";
    document.getElementById("message").style.color = "red";
  }
});
