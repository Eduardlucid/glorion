export function initNavigation() {
  const MOBILE_BREAKPOINT = 1024;

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const servicesItem = document.querySelector(".navigation-item--submenu");
  const servicesLink = servicesItem?.querySelector(".navigation-link");
  const submenu = servicesItem?.querySelector(".navigation-submenu");

  if (!menuToggle || !navigation) return;

  const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

  const setBodyLock = (locked) => {
    document.body.classList.toggle("menu-open", locked);
  };

  const closeSubmenu = () => {
    if (!servicesItem || !servicesLink) return;

    servicesItem.classList.remove("is-open");
    servicesLink.setAttribute("aria-expanded", "false");
  };

  const openSubmenu = () => {
    if (!servicesItem || !servicesLink) return;

    servicesItem.classList.add("is-open");
    servicesLink.setAttribute("aria-expanded", "true");
  };

  const closeMobileMenu = () => {
    menuToggle.classList.remove("is-active");
    navigation.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");

    closeSubmenu();
    setBodyLock(false);
  };

  const openMobileMenu = () => {
    menuToggle.classList.add("is-active");
    navigation.classList.add("is-open");

    menuToggle.setAttribute("aria-expanded", "true");

    setBodyLock(true);
  };

  menuToggle.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.contains("is-open");

    if (menuIsOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  if (servicesItem && servicesLink && submenu) {
    servicesItem.addEventListener("mouseenter", () => {
      if (!isMobile()) {
        openSubmenu();
      }
    });

    servicesItem.addEventListener("mouseleave", () => {
      if (!isMobile()) {
        closeSubmenu();
      }
    });

    servicesLink.addEventListener("click", (event) => {
      if (!isMobile()) {
        closeSubmenu();
        return;
      }

      event.preventDefault();

      const submenuIsOpen = servicesItem.classList.contains("is-open");

      if (submenuIsOpen) {
        closeSubmenu();
      } else {
        openSubmenu();
      }
    });
  }

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!(link instanceof HTMLAnchorElement)) return;

    if (isMobile()) {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) return;

    if (
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    closeMobileMenu();
    closeSubmenu();
    menuToggle.focus();
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      closeMobileMenu();
    } else {
      closeSubmenu();
    }
  });
}