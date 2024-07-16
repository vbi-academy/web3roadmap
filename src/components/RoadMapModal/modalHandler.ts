export function setupModalHandlers() {
  document.querySelectorAll(".openModalBtn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const modalId = (event.target as HTMLElement).getAttribute(
        "data-modal-id"
      );
      const modalContent = (event.target as HTMLElement).getAttribute(
        "data-modal-content"
      );

      if (modalId && window.modals && window.modals[modalId]) {
        window.modals[modalId].openModal(
          `${modalContent}`,
          `<p>This is the content for Modal Specific ${modalContent}</p>`
        );
      }
    });
  });
}
