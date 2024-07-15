import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: "",
  content: "",
  openModal: (title, content) => set({ isOpen: true, title, content }),
  closeModal: () => set({ isOpen: false, title: "", content: "" }),
}));
