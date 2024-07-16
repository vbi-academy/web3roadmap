interface ModalFunctions {
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
}

interface Modals {
  [key: string]: ModalFunctions;
}

interface Window {
  modals?: Modals;
}
