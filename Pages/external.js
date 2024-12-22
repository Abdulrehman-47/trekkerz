function toggleDay(dayId) {
    const day = document.getElementById(dayId);
    day.classList.toggle("show");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}







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





 