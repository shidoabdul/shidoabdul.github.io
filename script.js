const names = [
  "Abdullah Rasyid",
  "神僕 指導",
  "시도 카보쿠",
  "ςιδο αβδυλλαχ",
  "ᠱᠢᠳᠣ ᠠᠪᠳᠤᠯᠯᠠᠾ",
  "ⵛⵉⴹⴰ ⴰⴱⴷⵓⵍⵍⴰⵀ",
  "ᛊᛁᛞᛟ ᚨᛒᛞᚢᛚᛚᚨᚺ",
  "իդո Աբդւլլահ",
  "शिदो अब्दुल्लह्",
  "ܫܝܕ ܐܒܕܠܠܗ",
  "شيد ابدالله",
  "עבדאלله"
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typedNameElement = document.getElementById("typed-name");
  if (!typedNameElement) return;

  const currentName = names[nameIndex];

  if (isDeleting) {
    typedNameElement.textContent = Array.from(currentName).slice(0, charIndex - 1).join('');
    charIndex--;
  } else {
    typedNameElement.textContent = Array.from(currentName).slice(0, charIndex + 1).join('');
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === Array.from(currentName).length) {
    speed = 2000; // Pause for 2s when complete
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    speed = 400; // Pause before typing next name
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);