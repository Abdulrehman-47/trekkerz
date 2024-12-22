

document.getElementById('tourForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dateTime = document.getElementById('dateTime').value;
    const numAdults = document.getElementById('numAdults').value;
    const numChildren = document.getElementById('numChildren').value;
    const childrenAges = document.getElementById('childrenAges').value;
    const numRooms = document.getElementById('numRooms').value;
    const departureCity = document.getElementById('departureCity').value;
    const tourType = document.getElementById('tourType').value;
    const tripDuration = document.getElementById('tripDuration').value;
    const notes = document.getElementById('notes').value;
    
    // Construct the message for WhatsApp
    const message = `*Tour Booking Details*\n\n` +
        `*Name:* ${firstName} ${lastName}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Date/Time:* ${dateTime}\n` +
        `*Number of Adults:* ${numAdults}\n` +
        `*Total Number of Children:* ${numChildren}\n` +
        `*Children Ages:* ${childrenAges}\n` +
        `*Number of Rooms:* ${numRooms}\n` +
        `*Departure From (City):* ${departureCity}\n` +
        `*Tour Type:* ${tourType}\n` +
        `*Duration of Trip:* ${tripDuration}\n` +
        `*Notes:* ${notes}`;
    
    // Encode the message to be URL-friendly
    const encodedMessage = encodeURIComponent(message);
    
    // Your WhatsApp number
    const phoneNumber = '+923096666871';
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappUrl;
});


document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("messageInput").value;
    var phoneNumber = "+923096666871"; // Replace with the recipient's WhatsApp number

    // Construct the WhatsApp message URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
});










// auto nav close after clicking link 

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav .nav-link');
    const checkbox = document.getElementById('click');

    // Add click event to each menu link
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if the clicked link is a dropdown link
            if (link.classList.contains('dropdown-link')) {
                const dropdownContent = link.nextElementSibling; // Get the dropdown content
                
                // Toggle the display of the dropdown
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none'; // Close dropdown if it's already open
                } else {
                    dropdownContent.style.display = 'block'; // Open dropdown
                }
                
                event.preventDefault(); // Prevent default action
            } else {
                checkbox.checked = false; // Uncheck the checkbox to close the menu
            }
        });
    });
});


 // auto nav close after clicking link Ends