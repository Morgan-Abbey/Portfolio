const words = ["developer", "designer", "creator", "thinker"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const speed = 150; // typing speed
const pause = 1500; // pause before deleting

function type() {
    const element = document.getElementById("typewriter");

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
        element.textContent = currentWord.substring(0, charIndex);
    } else {
        charIndex++;
        element.textContent = currentWord.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, pause);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 80 : speed);
    }
}

type();
