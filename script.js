function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const service = document.querySelector('input[name="service"]:checked').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const destination = document.getElementById('destination').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Log form data to console
    console.log('Service:', service);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Destination:', destination);
    console.log('Contact Number:', contactNumber);
    console.log('Adults:', adults);
    console.log('Children:', children);

    // Check if any fields are empty
    if (!service || !checkInDate || !checkOutDate || !destination || !contactNumber || !adults || !children) {
        alert('Please fill in all fields');
        return;
    }

    // Create message
    let message = `Service: ${service}%0A`;
    message += `Check-in Date: ${checkInDate}%0A`;
    message += `Check-out Date: ${checkOutDate}%0A`;
    message += `Destination: ${destination}%0A`;
    message += `Contact Number: ${contactNumber}%0A`;
    message += `Adults: ${adults}%0A`;
    message += `Children: ${children}`;

    // WhatsApp number
    const whatsappNumber = "+923096666871"; // Replace with your WhatsApp number

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    console.log('WhatsApp URL:', whatsappURL); // Log URL to console
    window.open(whatsappURL, '_blank');
}

// FORM SECTION ENDS HERE




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






// car Whatsapp text 

 document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("messageInput").value;
    var phoneNumber = "+923096666871"; // Replace with the recipient's WhatsApp number

    // Construct the WhatsApp message URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
});


function bookNow(carName) {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number in international format, e.g., "1234567890"
    const message = `Hi, I would like to book the ${carName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${+923096666871}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}


// car Whatsapp text end here










                                          // Testmonial and review section js
//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});



                                         // Testmonial and review section js Ends

                                         

                                                    // HOtels sections
                                         const swiper = new Swiper('.slider-wrapper', {
                                            loop: true,
                                            grabCursor: true,
                                            spaceBetween: 30,
                                          
                                            // Pagination
                                            pagination: {
                                              el: '.swiper-pagination',
                                              clickable: true,
                                              dynamicBullets: true
                                            },
                                          
                                            // Navigation
                                            navigation: {
                                              nextEl: '.swiper-button-next',
                                              prevEl: '.swiper-button-prev',
                                            },
                                          
                                            // Responsive
                                            breakpoints: {
                                              0: {
                                                slidesPerView: 1
                                              },
                                              768: {
                                                slidesPerView: 2
                                              },
                                              1024: {
                                                slidesPerView: 3
                                              }
                                            }
                                          });
                                                 // HOtels sections ends










                                                 function initializeSlider(sliderContainer) {
                                                  const exploreSlider = sliderContainer.querySelector('.explore-slider');
                                                  const slides = sliderContainer.querySelectorAll('.slide').length;
                                                  const buttons = sliderContainer.querySelectorAll('.btn');
                                              
                                                  let isDragging = false;
                                                  let startX = 0;
                                                  let currentX = 0;
                                                  let moveX = 0;
                                                  let startMargin = 0;
                                              
                                                  const slidesPerPage = calculateSlidesPerPage(sliderContainer.offsetWidth);
                                                  const slidesCount = slides - slidesPerPage;
                                                  let currentMargin = 0;
                                              
                                                  // Helper function to calculate slides per page based on width
                                                  function calculateSlidesPerPage(containerWidth) {
                                                      if (containerWidth < 551) return 1;
                                                      if (containerWidth < 901) return 2;
                                                      if (containerWidth < 1101) return 3;
                                                      return 4;
                                                  }
                                              
                                                  // Update slider's parameters dynamically on resize
                                                  window.addEventListener("resize", () => {
                                                      updateSliderParams();
                                                  });
                                              
                                                  // Update parameters based on current slider width
                                                  function updateSliderParams() {
                                                      const containerWidth = sliderContainer.offsetWidth;
                                                      currentMargin = Math.max(
                                                          Math.min(currentMargin, 0),
                                                          -slidesCount * (100 / slidesPerPage)
                                                      );
                                                      exploreSlider.style.marginLeft = `${currentMargin}%`;
                                                      updateButtonStates();
                                                  }
                                              
                                                  // Function to set button states
                                                  function updateButtonStates() {
                                                      if (buttons.length > 0) {
                                                          buttons[0].classList.toggle('inactive', currentMargin === 0);
                                                          buttons[1].classList.toggle(
                                                              'inactive',
                                                              currentMargin <= -slidesCount * (100 / slidesPerPage)
                                                          );
                                                      }
                                                  }
                                              
                                                  // Dragging functions
                                                  function dragStart(e) {
                                                      isDragging = true;
                                                      startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
                                                      startMargin = currentMargin;
                                                      exploreSlider.style.cursor = 'grabbing';
                                                  }
                                              
                                                  function dragMove(e) {
                                                      if (!isDragging) return;
                                              
                                                      currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
                                              
                                                      // Amplify moveX for a more responsive experience
                                                      moveX = ((startX - currentX) / sliderContainer.offsetWidth) * 400; // Increased sensitivity
                                              
                                                      const newMargin = startMargin - moveX;
                                              
                                                      // Enforce boundaries to prevent extra blank space
                                                      if (newMargin <= 0 && newMargin >= -slidesCount * (100 / slidesPerPage)) {
                                                          currentMargin = newMargin;
                                                          exploreSlider.style.marginLeft = `${currentMargin}%`;
                                                      }
                                                  }
                                              
                                                  function dragEnd() {
                                                      if (!isDragging) return;
                                                      isDragging = false;
                                              
                                                      // Snap to nearest slide if necessary
                                                      currentMargin = Math.round(currentMargin * slidesPerPage / 100) * (100 / slidesPerPage);
                                              
                                                      // Enforce boundaries
                                                      currentMargin = Math.max(
                                                          Math.min(currentMargin, 0),
                                                          -slidesCount * (100 / slidesPerPage)
                                                      );
                                              
                                                      exploreSlider.style.marginLeft = `${currentMargin}%`;
                                                      exploreSlider.style.cursor = 'grab';
                                                      updateButtonStates();
                                                  }
                                              
                                                  // Attach drag events
                                                  exploreSlider.addEventListener('mousedown', dragStart);
                                                  document.addEventListener('mousemove', dragMove);
                                                  document.addEventListener('mouseup', dragEnd);
                                              
                                                  exploreSlider.addEventListener('touchstart', dragStart);
                                                  exploreSlider.addEventListener('touchmove', dragMove);
                                                  exploreSlider.addEventListener('touchend', dragEnd);
                                              
                                                  // Button functions
                                                  function slideLeft() {
                                                      currentMargin = Math.min(currentMargin + (100 / slidesPerPage), 0);
                                                      exploreSlider.style.marginLeft = `${currentMargin}%`;
                                                      updateButtonStates();
                                                  }
                                              
                                                  function slideRight() {
                                                      currentMargin = Math.max(
                                                          currentMargin - (100 / slidesPerPage),
                                                          -slidesCount * (100 / slidesPerPage)
                                                      );
                                                      exploreSlider.style.marginLeft = `${currentMargin}%`;
                                                      updateButtonStates();
                                                  }
                                              
                                                  // Attach button events
                                                  if (buttons.length > 0) {
                                                      buttons[0].addEventListener('click', slideLeft);
                                                      buttons[1].addEventListener('click', slideRight);
                                                  }
                                              
                                                  // Initialize parameters and button states
                                                  updateSliderParams();
                                              }
                                              
                                              // Initialize all sliders
                                              document.querySelectorAll('.explore-container').forEach(initializeSlider);
                                              
















