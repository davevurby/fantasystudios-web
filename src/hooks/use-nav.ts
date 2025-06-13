import { create } from "zustand";

export interface NavStore {
    disableLinks: boolean;
    setDisableLinks: (disableLinks: boolean) => void;
}

export const useNavStore = create<NavStore>((set) => ({
    disableLinks: false,
    setDisableLinks: (disableLinks) => set({ disableLinks }),
}));