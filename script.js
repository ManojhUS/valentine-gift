let sections = document.querySelectorAll(".section");
let current = 0;

/* SECTION NAVIGATION */
function nextSection() {
    sections[current].classList.remove("active");
    current++;
    if (current < sections.length) {
        sections[current].classList.add("active");
    }
}

/* AUTOPLAY MUSIC on first click */
document.body.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });

/* YES BUTTON */
function sayYes() {
    createHearts();
    alert("You just made a man the happiest ❤️");
}

/* RUNNING NO BUTTON */
let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    let x = Math.random() * 300 - 150;
    let y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* HEART CONFETTI */
function createHearts() {
    for (let i = 0; i < 60; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-confetti");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

/* TYPING EFFECT */
const text = "Open slowly… this is made only for you ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // typing speed
    }
}

window.onload = typeWriter;
