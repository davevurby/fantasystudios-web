import { create } from "zustand";

export interface ModalStore {
    modal: 'STUDIO_A' | 'STUDIO_B' | 'VIRTUAL_PRODUCTION' | null;
    setModal: (studio: 'STUDIO_A' | 'STUDIO_B' | 'VIRTUAL_PRODUCTION' | null) => void;   
}

export const useModal = create<ModalStore>((set) => ({
    modal: null,
    setModal: (studio) => set({ modal: studio }),
}));