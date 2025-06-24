import { create } from "zustand";

export interface ModalStore {
    modal: 'STUDIO_A' | 'STUDIO_B' | 'VIRTUAL_PRODUCTION' | 'CONTENT_CREATION' | 'MOTION_CAPTURING' | 'TEAM' | 'PARTNERS' | null;
    setModal: (studio: 'STUDIO_A' | 'STUDIO_B' | 'VIRTUAL_PRODUCTION' | 'CONTENT_CREATION' | 'MOTION_CAPTURING' | 'TEAM' | 'PARTNERS' | null) => void;   
}

export const useModal = create<ModalStore>((set) => ({
    modal: null,
    setModal: (studio) => set({ modal: studio }),
}));