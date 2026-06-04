// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Specialist",
    "Business Intelligence Analyst",
    "Python Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon =
    themeBtn.querySelector("i");

    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "dark"
        );
    }
});

// Load Theme

if (
    localStorage.getItem("theme")
    === "light"
) {

    document.body.classList.add(
        "light-mode"
    );

    const icon =
    document.querySelector(
        "#themeToggle i"
    );

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
}

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progressBar =
document.querySelector(
    ".scroll-progress"
);

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
        document.documentElement.scrollTop;

        const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / docHeight) * 100;

        progressBar.style.width =
        progress + "%";
    }
);

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements =
document.querySelectorAll(
    "section, .project-card, .skill-card, .stat-card, .achievement-card"
);

const revealObserver =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add(
"active"
);

}
});

},

{
threshold: 0.15
}

);

revealElements.forEach((el) => {

el.classList.add("reveal");

revealObserver.observe(el);

});

// ===============================
// COUNTER ANIMATION
// ===============================

const statNumbers =
document.querySelectorAll(
".stat-card h2"
);

const counterObserver =
new IntersectionObserver(

(entries) => {

entries.forEach((entry) => {

if (!entry.isIntersecting)
return;

const counter =
entry.target;

const original =
counter.textContent;

const value =
parseFloat(
original.replace(/[^0-9.]/g, "")
);

let current = 0;

const increment =
value / 60;

const updateCounter =
() => {

if (current < value) {

current += increment;

if (
original.includes(".")
) {

counter.textContent =
current.toFixed(2);

} else {

counter.textContent =
Math.floor(current);
}

requestAnimationFrame(
updateCounter
);

} else {

counter.textContent =
original;
}
};

updateCounter();

counterObserver.unobserve(
counter
);

});
},

{
threshold: 0.5
}

);

statNumbers.forEach((counter) => {

counterObserver.observe(
counter
);

});

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".navbar a"
);

window.addEventListener(
"scroll",
() => {

let current = "";

sections.forEach(
(section) => {

const sectionTop =
section.offsetTop - 150;

if (
window.scrollY >=
sectionTop
) {

current =
section.getAttribute(
"id"
);
}
}
);

navLinks.forEach(
(link) => {

link.classList.remove(
"active-nav"
);

if (
link.getAttribute(
"href"
) === "#" + current
) {

link.classList.add(
"active-nav"
);
}
}
);
}
);

// ===============================
// SMOOTH SCROLL
// ===============================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach((anchor) => {

anchor.addEventListener(
"click",
function (e) {

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(
"href"
)
);

if (target) {

target.scrollIntoView({

behavior: "smooth"

});
}
}
);
});

// ===============================
// CARD HOVER TILT EFFECT
// ===============================

const cards =
document.querySelectorAll(
".project-card, .skill-card"
);

cards.forEach((card) => {

card.addEventListener(
"mousemove",
(e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX -
rect.left;

const y =
e.clientY -
rect.top;

const rotateX =
(y -
rect.height / 2) /
15;

const rotateY =
(rect.width / 2 -
x) /
15;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

}
);

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";
}
);
});

// ===============================
// FLOATING PARTICLES
// ===============================

function createParticle() {

const particle =
document.createElement("div");

particle.classList.add(
"particle"
);

particle.style.left =
Math.random() * 100 + "vw";

particle.style.width =
particle.style.height =
Math.random() * 5 + 2 + "px";

particle.style.animationDuration =
Math.random() * 10 + 10 + "s";

document.body.appendChild(
particle
);

setTimeout(() => {

particle.remove();

}, 15000);
}

setInterval(
createParticle,
1000
);

// ===============================
// PRELOADER FADE
// ===============================

window.addEventListener(
"load",
() => {

document.body.classList.add(
"loaded"
);
}
);

// ===============================
// CONSOLE BRANDING
// ===============================

console.log(
"%cMansi Fartiyal Portfolio",
"font-size:24px;color:#00e5b4;font-weight:bold;"
);

console.log(
"%cData Analyst | SQL | Python | Power BI",
"font-size:14px;color:#7b61ff;"
);