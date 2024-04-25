

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("applyNowButton1").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        window.open("https://forms.gle/SyrJywCGAdUuAtny5", "_blank");
    });

    // You can add similar event listeners for other buttons if needed
    document.getElementById("RegisterNow").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        window.open("https://forms.gle/GjSa5JLNfiQYqir99", "_blank");
    });
    document.getElementById("RecruitNow").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=services@sharpcareer.in"; // Replace example@gmail.com with your email address
        window.open(mailtoLink, "_blank");
    });
    document.getElementById("ContactUs").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the button
        var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=services@sharpcareer.in"; // Replace example@gmail.com with your email address
        window.open(mailtoLink, "_blank");
    });
    
  



});
// Get the Apply Now button and the modal
var applyNowButton = document.getElementById("ApplyNow2");
var modal = document.getElementById("myModal");
var closeModalButton = document.getElementById("closeModal");

// Add event listener to the Apply Now button
applyNowButton.addEventListener("click", function() {
   
    modal.classList.remove("hidden");
});

// Add event listener to the Close button
closeModalButton.addEventListener("click", function() {
  
    modal.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mobile-menu-btn").addEventListener("click", function () {
        document.getElementById("mobile-menu").classList.toggle("hidden");
        const menuBtnIconClosed = document.querySelector('#mobile-menu-btn > svg:first-child');
            const menuBtnIconOpen = document.querySelector('#mobile-menu-btn > svg:last-child');
            menuBtnIconOpen.classList.toggle('hidden', !isOpen);
            menuBtnIconClosed.classList.toggle('hidden', isOpen);
            
    });    
});


// JavaScript functions to show/hide dropdown on hover
function showDropdown() {
    var dropdown = document.getElementById("servicesDropdown");
    dropdown.classList.remove("hidden")
}

function hideDropdown() {
    var dropdown = document.getElementById("servicesDropdown");
    dropdown.classList.add("hidden");
}


// Get the container and clone its content
const container = document.querySelector('.marquee-container .container');
const content = container.innerHTML;

// Append the cloned content to the container
container.innerHTML += content;

// Adjust the width of the container to fit all content
const items = document.querySelectorAll('.marquee-container .container > *');
container.style.width = `${items.length * 100}%`;

// Dynamically adjust the width of each item based on its content
items.forEach(item => {
    const itemWidth = item.getBoundingClientRect().width;
    item.style.width = `${itemWidth}px`;
});

// Start the marquee animation
container.style.animation = `marquee ${items.length * 2}s linear infinite`;



document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        const menu = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');

        menu.addEventListener('click', function(e) {
            e.preventDefault();
            content.classList.toggle('hidden');
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        const isOpen = mobileMenu.classList.contains('hidden');
        mobileMenuBtn.querySelector('svg').classList.toggle('block', isOpen);
        mobileMenuBtn.querySelector('svg').classList.toggle('hidden', !isOpen);
    });
});


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  