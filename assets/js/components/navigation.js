export function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  if (!toggle || !navigation) return;

  const closeMenu = () => {
    toggle.classList.remove("is-active");
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 950) {
      closeMenu();
    }
  });
}
