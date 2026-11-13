
// 1. TYPING ANIMATION
const roles = [
    "Student",
    "Beginner Developer",
    "Python Programmer",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".hero-content h2");

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. NAVIGATION ACTIVE EFFECT
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// 3. SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// 4. WELCOME MESSAGE
console.log("Welcome to Banveer's Portfolio!");
console.log("Thanks for visiting my website.");


// 5. CURRENT YEAR IN FOOTER
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Banveer | All Rights Reserved`;
}


// 6. BACK TO TOP BUTTON
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.id = "backToTop";
backToTop.title = "Back to top";

document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
