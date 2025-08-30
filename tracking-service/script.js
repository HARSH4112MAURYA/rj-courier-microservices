document.getElementById("trackingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const trackingId = document.getElementById("trackingId").value.trim();
  const message = document.getElementById("message");
  const resultCard = document.getElementById("resultCard");
  const trackingResult = document.getElementById("trackingResult");

  // Dummy data for simulation
  const dummyData = {
    "RJ123": "In Transit - Expected Delivery: 2 Days",
    "RJ456": "Delivered - Signed by Customer",
    "RJ789": "Pending Pickup at Warehouse",
    "RJ101": "Out for Delivery",
    "RJ202": "Shipment Created - Awaiting Pickup"
  };

  if (trackingId in dummyData) {
    message.innerText = "✅ Tracking found!";
    message.style.color = "green";
    trackingResult.innerText = `Tracking ID: ${trackingId}\nStatus: ${dummyData[trackingId]}`;
    resultCard.style.display = "block";
  } else {
    message.innerText = "❌ Tracking ID not found!";
    message.style.color = "red";
    resultCard.style.display = "none";
  }

  document.getElementById("trackingForm").reset();
});
