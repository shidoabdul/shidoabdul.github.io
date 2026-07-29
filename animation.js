const names = [
  "Abdullah Rasyid",
  "Шидо Абдуллах",
  "Σίντο Αμπντουλλάχ",
  "ᛋᛁᛞᛟ ᚨᛒᛞᚢᛚᚨᚺ",
  "ᛋᛁᛏᚢ ᛅᛒᛏᚢᛚᛅᚼ",
  "Շիդո Աբդուլլահ",
  "შიდო აბდულა",
  "ཤི་དོ་ཨབ་དུལ་ལཱཧ།",
  "शिदो अब्दुल्लाह",
  "শিদো আব্দুল্লাহ",
  "ਸ਼ਿਦੋ ਅਬਦੁੱਲਾਹ",
  "ஷிதோ அப்துல்லாஹ்",
  "షిదో అబ్దుల్లా",
  "ಶಿಡೋ ಅಬ್ದುಲ್ಲಾ",
  "ଶିଦୋ ଅବ୍ଦୁଲ୍ଲାହ",
  "𑌶𑌿𑌦𑍋 𑌅𑌬𑍍𑌦𑍁𑌲𑍍𑌲",
  "ရှီဒို အဗ္ဗဒူလာ",
  "ชิโด อับดุลลอฮ์",
  "ຊີໂດ ອັບດຸນລາ",
  "ꨧꨪꨕ ꨀꨝꩉꨕꨭꨤꩌ",
  "ᯘᯪᯑᯬ ᯀᯅ᯲ᯑᯮᯞ᯲ᯞᯂ᯲",
  "ꤞꤤꤒꤥ ꤀꤅ꤲꤑꤢꤤꤤꤜ",
  "ᮞᮤᮓᮧ ᮃᮘ᮪ᮓᮥᮜ᮪ᮜᮠ᮪",
  "ꦯꦶꦢꦺꦴ ꦄꦧ꧀ꦢꦸꦭ꧀ꦭꦃ",
  "ᬰᬶᬤ ᬅᬩ᭄ᬤ᭄ᬉᬮ᭄ᬮᬄ",
  "ᨔᨗᨉᨚ ᨕᨅᨘᨉᨘᨒ",
  "ᜐᜒᜇᜓ ᜀᜊ᜔ᜇᜓᜎ᜔ᜎ",
  "神僕 指導",
  "시도 압둘라",
  "ᠰᠢᠳᠤ ᠠᠪᠳᠤᠯᠯᠠ",
  "ᏏᏙ ᎠᏆᏚᎳ",
  "ⵛⵉⴷⵓ ⵄⴰⴱⴷⵓⵍⵍⴰⵀ",
  "𒅆-𒁺 𒀜-𒁺-𒌌-𒆷-𒄴",
  "ܫܝܕܘ ܥܒܕ ܐܠܠܗ",
  "שידו עבדאללה",
  "شيدو عبدالله",
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typedNameElement = document.getElementById("typed-name");
  if (!typedNameElement) return;

  const currentName = names[nameIndex];
  const formattedArray = Array.from(currentName.normalize("NFC"));

  // Render first
  const currentText = formattedArray.slice(0, charIndex).join('');
  typedNameElement.innerHTML = `${currentText}<span class="cursor">|</span>`;

  // 1. Finished typing out full name
  if (!isDeleting && charIndex === formattedArray.length) {
    isDeleting = true;
    setTimeout(typeEffect, 7500);
    return;
  }

  // 2. Finished deleting -> Move to next name & pause for 0.8 seconds
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    setTimeout(typeEffect, 800);
    return;
  }

  // Increment / Decrement index
  if   (isDeleting) {charIndex--;} 
  else {charIndex++;}

  // Step delay
  const speed = isDeleting ? 100 : 140;
  setTimeout(typeEffect, speed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Ensure the code runs AFTER the DOM elements are fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile Navigation Dropdown Toggle
  const navToggle = document.getElementById("navToggle");
  const navCollapse = document.getElementById("navCollapse");
  const navLinks = document.querySelectorAll("#sidebar-nav a");

  if (navToggle && navCollapse) {
    // Toggle menu open/closed on hamburger click
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("is-active");
      navCollapse.classList.toggle("is-open");
    });

    // Auto-close menu when visitor clicks a section link on mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("is-active");
        navCollapse.classList.remove("is-open");
      });
    });
  }

  // Start typewriter effect
  typeEffect();
});