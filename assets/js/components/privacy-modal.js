export function initPrivacyModal() {

  const modal = document.querySelector("#privacy-modal");
  const openButton = document.querySelector(".privacy-policy-link");
  const closeButton = document.querySelector(".privacy-modal-close");

  if (!modal || !openButton || !closeButton) {
    return;
  }

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}