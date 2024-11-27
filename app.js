

document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed("#home .details .line3 .skill", {
        strings: ["Frontend Development","Web Designing", "Backend Development",  "Web Development"],
        loop: true,
        typeSpeed: 30,
        backSpeed: 25,
        backDelay: 500,
    });
});


// Get the icon element and the navbar list element
const icon = document.querySelector('.icon');
const navList = document.querySelector('.nav-list ul');

// Add click event listener to the icon
icon.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar list
    
    $(".navbar").toggleClass("togglee");

});
