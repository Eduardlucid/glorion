import { initNavigation } from "./components/navigation.js";
import { initProjects } from "./components/projects.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initProjects();
});