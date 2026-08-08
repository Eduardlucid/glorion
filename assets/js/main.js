import { initNavigation } from "./components/navigation.js";
import { initProjects } from "./components/projects.js";
import { initPrivacyModal } from "./components/privacy-modal.js";


document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
  initPrivacyModal();


  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("click", (event) => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      history.replaceState(null, "", window.location.pathname);
    });
  }
});