import { create } from "zustand";

export interface StudioViewStore {
    visibleStudio: 'A' | 'B' | null;
    setVisibleStudio: (studio: 'A' | 'B' | null) => void;   
}

export const useStudioViewStore = create<StudioViewStore>((set) => ({
    visibleStudio: null,
    setVisibleStudio: (studio) => set({ visibleStudio: studio }),
}));