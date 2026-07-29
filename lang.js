const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_contact: "Contact",
    about_title: "About Me",
    projects_title: "Current Research & Projects",
    publications_title: "Publications",
    contact_title: "Contact",
    socmed_title: "Social Media",
    pronoun: "(he/him)",
    tagline: "Discover More!",
    footer_built: "Built with GitHub Pages.",
    cta_working: "What am I working on?",
    cta_results: "What are the results?",
    cta_contact: "How to contact me?",
    cta_top: "Back to top",
    cont_personal: "Personal",
    cont_institution: "Institution"
  },
  id: {
    nav_about: "Tentang",
    nav_projects: "Proyek",
    nav_publications: "Publikasi",
    nav_contact: "Kontak",
    about_title: "Tentang Saya",
    projects_title: "Riset & Proyek Saat Ini",
    publications_title: "Publikasi",
    contact_title: "Kontak",
    socmed_title: "Media Sosial",
    pronoun: "(mas/bang)",
    tagline: "Terus temukan!",
    footer_built: "Dibangun dengan GitHub Pages.",
    cta_working: "Apa yang sedang saya kerjakan?",
    cta_results: "Apakah hasilnya?",
    cta_contact: "Bagaimana cara menghubungi saya?",
    cta_top: "Kembali ke atas",
    cont_personal: "Personal",
    cont_institution: "Institusi"
  },
  fi: {
    nav_about: "Tietoa",
    nav_projects: "Projektit",
    nav_publications: "Julkaisut",
    nav_contact: "Ota yhteyttä",
    about_title: "Tietoa minusta",
    projects_title: "Nykyinen tutkimus & projektit",
    publications_title: "Julkaisut",
    contact_title: "Ota yhteyttä",
    socmed_title: "Sosiaalinen media",
    pronoun: "(hän/herra)",
    tagline: "Löydä lisää!",
    footer_built: "Toteutettu GitHub Pages -palvelulla.",
    cta_working: "Mitä teen parhaillaan?",
    cta_results: "Mitä tuloksia on saatu?",
    cta_contact: "Miten ottaa yhteyttä?",
    cta_top: "Takaisin alkuun",
    cont_personal: "Henk. koht.",
    cont_institution: "Laitos"
  }
};

function renderLangSwitcher() {
  const container = document.getElementById("lang-switch-container");
  if (!container) return;

  container.innerHTML = `
    <div class="lang-switch">
      <button class="lang-btn" data-lang="en" title="English">
        <img src="https://flagcdn.com/20x15/gb.png" alt="UK Flag" class="flag-img">
      </button>
      <button class="lang-btn" data-lang="id" title="Bahasa Indonesia">
        <img src="https://flagcdn.com/20x15/id.png" alt="Indonesia Flag" class="flag-img">
      </button>
      <button class="lang-btn" data-lang="fi" title="Suomi">
        <img src="https://flagcdn.com/20x15/fi.png" alt="Finland Flag" class="flag-img">
      </button>
    </div>
  `;
}

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[lang-block]").forEach(block => {
    block.style.display = (block.getAttribute("lang-block") === lang) ? "block" : "none";
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active-lang");
    } else {
      btn.classList.remove("active-lang");
    }
  });

  localStorage.setItem("preferred_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  renderLangSwitcher();

  const savedLang = localStorage.getItem("preferred_lang") || "en";

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  setLanguage(savedLang);
});