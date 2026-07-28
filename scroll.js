document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".content-wrapper");
  const sections = document.querySelectorAll(".scroll-section");
  const navLinks = document.querySelectorAll("#sidebar-nav .nav-link");

  const observerOptions = {
    root: scrollContainer,
    threshold: 0.4 // Triggers when 40% of the section is visible
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 1. Trigger smooth entrance when coming INTO view
        entry.target.classList.add("is-visible");

        // 2. Update active sidebar nav link
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        // 3. Sync URL hash cleanly
        if (history.pushState) {
          history.pushState(null, null, `#${currentId}`);
        }
      } else {
        // RESET ANIMATION: Remove class when element goes OUT of view
        // This ensures it will smoothly animate up again on the next scroll!
        entry.target.classList.remove("is-visible");
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
});