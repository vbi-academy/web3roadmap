import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  roadmapId: string;
  topicId: string;
  openModal: (roadmapId: string, topicId: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  roadmapId: "",
  topicId: "",
  openModal: (roadmapId, topicId) => set({ isOpen: true, roadmapId, topicId }),
  closeModal: () => set({ isOpen: false, roadmapId: "", topicId: "" }),
}));
