import { create } from "zustand";

export interface MapOverlayStore {
    isOpen: string | null;
    setIsOpen: (isOpen: string | null) => void;
}

export const useMap = create<MapOverlayStore>((set) => ({
    isOpen: null,
    setIsOpen: (isOpen: string | null) => set({ isOpen }),
}));