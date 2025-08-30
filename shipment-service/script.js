document.getElementById("shipmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const sender = document.getElementById("senderName").value;
  const receiver = document.getElementById("receiverName").value;
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const distance = parseFloat(document.getElementById("distance").value);

  if (sender && receiver && pickup && destination && weight > 0 && distance > 0) {
    // Pricing formula: ₹50 per kg + ₹10 per km
    const price = (weight * 50) + (distance * 10);

    document.getElementById("result").innerText =
      `✅ Shipment booked!\nSender: ${sender}\nReceiver: ${receiver}\nPickup: ${pickup}\nDestination: ${destination}\nTotal Price: ₹${price}`;
  } else {
    document.getElementById("result").innerText = "❌ Please fill all fields correctly.";
    document.getElementById("result").style.color = "red";
  }
});
