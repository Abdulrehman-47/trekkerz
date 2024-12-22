document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get values from the input fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Your WhatsApp number (with country code, e.g., 92 for Pakistan)
    const whatsappNumber = "923337384660"; // Replace with your WhatsApp number

    // Prepare the WhatsApp message
    const whatsappMessage = `
Hello, I am ${firstName} ${lastName}.
Email: ${email}
Phone: ${phone}
Message: ${message}
    `;

    // Encode the message to make it URL-safe
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create the WhatsApp API URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, "_blank");
});
