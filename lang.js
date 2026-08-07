const translations = {
  en: {
    nav_logo: "Back to about",
    nav_pronouns: "(he/him)",
    nav_tagline: "Discover more!",
    nav_about: "About",
    nav_educations: "Educations",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_contact: "Contact",
    about_title: "About Me",
    projects_title: "Research & Projects",
    publications_title: "Publications",
    contact_title: "Contact",
    socmed_title: "Social Media",
    footer_built: "Built with GitHub Pages.",
    cta_study: "Where am/was I studying?",
    cta_working: "What am I working on?",
    cta_results: "What are the results?",
    cta_contact: "How to contact me?",
    cta_top: "Back to top",
    cont_personal: "Personal:",
    cont_institution: "Institution:"
  },
  id: {
    nav_logo: "Kembali ke tentang",
    nav_pronouns: "(mas/bang)",
    nav_tagline: "Terus temukan!",
    nav_about: "Tentang",
    nav_educations: "Pendidikan",
    nav_projects: "Proyek",
    nav_publications: "Publikasi",
    nav_contact: "Kontak",
    about_title: "Tentang Saya",
    projects_title: "Riset & Proyek",
    publications_title: "Publikasi",
    contact_title: "Kontak",
    socmed_title: "Media Sosial",
    footer_built: "Dibangun dengan GitHub Pages.",
    cta_study: "Dimana saya sedang/dahulu belajar?",
    cta_working: "Apa yang sedang saya kerjakan?",
    cta_results: "Apakah hasilnya?",
    cta_contact: "Bagaimana cara menghubungi saya?",
    cta_top: "Kembali ke atas",
    cont_personal: "Pribadi:",
    cont_institution: "Institusi:"
  },
  fi: {
    nav_logo: "Takaisin tietoa",
    nav_pronouns: "(Hän/herra)",
    nav_tagline: "Löydä lisää!",
    nav_about: "Tietoa",
    nav_educations: "Koulutus",
    nav_projects: "Projektit",
    nav_publications: "Julkaisut",
    nav_contact: "Ota yhteyttä",
    about_title: "Tietoa minusta",
    projects_title: "Tutkimus & projektit",
    publications_title: "Julkaisut",
    contact_title: "Ota yhteyttä",
    socmed_title: "Sosiaalinen media",
    footer_built: "Toteutettu GitHub Pages -palvelulla.",
    cta_study: "Missä opiskelen / opiskelin?",
    cta_working: "Mitä teen parhaillaan?",
    cta_results: "Mitä tuloksia on saatu?",
    cta_contact: "Miten ottaa yhteyttä?",
    cta_top: "Takaisin alkuun",
    cont_personal: "Henk. koht.:",
    cont_institution: "Laitos:"
  }
};

// 2. Render Language Switcher
function renderLangSwitcher() {
  const container = document.getElementById("lang-switch-container");
  if (!container) return;

  container.innerHTML = `
    <div class="lang-switch">
      <button class="lang-btn" data-lang="en" title="English">
        <span class="icon-flag-en"></span>
      </button>
      <button class="lang-btn" data-lang="id" title="Bahasa Indonesia">
        <span class="icon-flag-id"></span>
      </button>
      <button class="lang-btn" data-lang="fi" title="Suomi">
        <span class="icon-flag-fi"></span>
      </button>
    </div>
  `;
}

// 3. Updated setLanguage function
function setLanguage(lang) {
  // Update standard text elements
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // NEW: Update tooltips (title attribute) so <img> tags aren't wiped out!
  document.querySelectorAll("[data-i18n-title]").forEach(element => {
    const key = element.getAttribute("data-i18n-title");
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("title", translations[lang][key]);
    }
  });

  // Update language block visibility
  document.querySelectorAll("[lang-block]").forEach(block => {
    block.style.display = (block.getAttribute("lang-block") === lang) ? "block" : "none";
  });

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active-lang");
    } else {
      btn.classList.remove("active-lang");
    }
  });

  localStorage.setItem("preferred_lang", lang);
}

// 4. Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderLangSwitcher();

  const savedLang = localStorage.getItem("preferred_lang") || "en";

  // Delegate click listener so dynamically rendered buttons work properly
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (btn) {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    }
  });

  setLanguage(savedLang);
});