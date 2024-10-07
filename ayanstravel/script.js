document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const roomType = document.getElementById("room-type").value;
    
    alert(`Thank you ${name}! You have booked a ${roomType}.`);
  });
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "Thank you for your message! We will get back to you soon.";
    successMessage.style.color = "green";
    
    // Reset the form after submission
    this.reset();
});
  