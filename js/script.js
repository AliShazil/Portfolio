//Typing Animation

var typed = new Typed(".typing",{
    strings:["","Web Developer", "Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// For toggler 
const aside = document.querySelector('.aside');
const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', () => {
    aside.classList.toggle('show-aside'); // Toggle the aside when clicking the toggler
});

// Close aside when clicking outside of it
document.addEventListener('click', (e) => {
    if (!aside.contains(e.target) && !navToggler.contains(e.target)) {
        aside.classList.remove('show-aside');
    }
});


// For active link 

window.addEventListener('scroll', changeActiveLink);

function changeActiveLink() {
    let sections = document.querySelectorAll("section, .section");
    let navLinks = document.querySelectorAll(".nav li a");

    let scrollY = window.scrollY;

    sections.forEach((section) => {
        let sectionTop = section.offsetTop - 150; // Adjust as needed
        let sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${section.id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

//To change domain name
document.addEventListener("DOMContentLoaded", function() {
    var domainName = window.location.hostname;
    document.getElementById("domain-name").textContent = domainName;
    document.getElementById("domain-link").href = "http://" + domainName;
});